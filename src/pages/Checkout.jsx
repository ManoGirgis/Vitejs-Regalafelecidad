import React, { useState } from 'react'
import CryptoJS from "crypto-js";
import { useLocation } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  //const totalAmount = location.state?.totalAmount || 0; // Asegurar que no sea undefined
  //const orderId = location.state?.orderId || "000000"; // Si no hay ID, asignar un valor por defecto

  const [cart, setCart] = useState(() => {
    const productos = JSON.parse(localStorage.getItem('Product')) || [];
    const reservas = JSON.parse(localStorage.getItem('appointments')) || [];
    return [...productos, ...reservas];
  });
  const totalAmount = Math.round(cart.reduce((total, p) => total + p.price * p.quantity, 0) * 100);
  const orderId = JSON.parse(localStorage.getItem('orderID')) || [];

  function createMerchantParameters(params) {
    let merchantParameters = CryptoJS.enc.Utf8.parse(JSON.stringify(params));
    let merchantBase64 = merchantParameters.toString(CryptoJS.enc.Base64);
    return merchantBase64;
  }

  const formatOrderId = (orderId) => {
    let orderString = orderId.toString(); // Convertir a string si es numérico
    return orderString.padStart(12, "0").slice(0, 12); // Asegurar 12 caracteres exactos
  };




  function createMerchatSignature(params, merchantBase64) {
    const claveComercio = "sq7HjrUOBfKmC576ILgskD5srU870gJ7";

    // Decode key
    let decodeKey = CryptoJS.enc.Base64.parse(claveComercio);

    // Generate transaction key
    let iv = CryptoJS.enc.Hex.parse("0000000000000000");
    let cipher = CryptoJS.TripleDES.encrypt(
      params.DS_MERCHANT_ORDER,
      decodeKey,
      {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
      }
    );

    // Sign
    let signature = CryptoJS.HmacSHA256(merchantBase64, cipher.ciphertext);
    let signatureBase64 = signature.toString(CryptoJS.enc.Base64);

    return signatureBase64;
  }

  let data = {
    DS_MERCHANT_AMOUNT: totalAmount.toString(),
    DS_MERCHANT_CURRENCY: "978",
    DS_MERCHANT_MERCHANTCODE: "999008881",
    DS_MERCHANT_MERCHANTURL: "http://www.prueba.com/urlNotificacion",
    DS_MERCHANT_ORDER: formatOrderId(orderId),
    DS_MERCHANT_TERMINAL: "1",
    DS_MERCHANT_TRANSACTIONTYPE: "0",
    DS_MERCHANT_URLKO: `${window.location.origin}/carrito/error`,
    DS_MERCHANT_URLOK: `${window.location.origin}/ok`,
  };

  let dsmerchantParameters = createMerchantParameters(data);
  let dsSignature = createMerchatSignature(data, dsmerchantParameters);
  let dsSignatureVersion = "HMAC_SHA256_V1";

  return (
    <form
      name="formularioPago"
      method="POST"
      action="https://sis-t.redsys.es:25443/sis/realizarPago"
    >
      <input
        type="hidden"
        name="DS_MERCHANTPARAMETERS"
        value={dsmerchantParameters}
      />
      <input type="hidden" name="DS_SIGNATURE" value={dsSignature} />
      <input
        type="hidden"
        name="DS_SIGNATUREVERSION"
        value={dsSignatureVersion}
      />
      <input type="submit" value="REALIZAR PAGO" />
    </form>
  )
}

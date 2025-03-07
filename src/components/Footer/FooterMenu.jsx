export default function FooterMenu() {
    return (
        <footer className="bg-rgx-blue text-white py-10 font-nunito">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                
                <div>
                    <h2 className="text-rgx-yellow font-semibold text-mb mb-4">¿NECESITAS AYUDA?</h2>
                    <ul className="space-y-1">
                        <li><a href="https://wa.me/+34640030604?text=Hola%20me%20gustar%C3%ADa%20hacer%20una%20consulta" className="hover:underline hover:text-rgx-yellow">Envíanos un mensaje</a></li>
                        <li><a href="/preguntas" className="hover:underline hover:text-rgx-yellow">Preguntas frecuentes</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Cambio de fecha</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Regalo Conjunto</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-rgx-yellow font-semibold text-mb mb-4">EXPERIENCIAS</h2>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Creativo</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Explorador</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Científico</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Deportista</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-rgx-yellow font-semibold text-mb mb-4">EMPRESA</h2>
                    <ul className="space-y-1">
                        <li><a href="/aboutus" className="hover:underline hover:text-rgx-yellow">Conócenos</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Fundaciones</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Contacto</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-rgx-yellow font-semibold text-mb mb-4">PROFESIONALES</h2>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Hazte colaborador</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Espacio colaborador</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-rgx-yellow font-semibold text-mb mb-4">LEGAL</h2>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Condiciones generales</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Aviso legal</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Política de privacidad</a></li>
                        <li><a href="#" className="hover:underline hover:text-rgx-yellow">Política de cookies</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

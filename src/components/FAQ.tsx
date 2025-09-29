import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Tiene algún costo participar en Glottia?",
      answer: "Glottia es completamente gratuito para aprendices. Solo necesitas registrarte y puedes unirte a todas las sesiones que desees. Los locales aliados tampoco pagan por formar parte de nuestra red."
    },
    {
      question: "¿Qué nivel de idioma necesito para participar?",
      answer: "Aceptamos desde principiantes hasta avanzados. Nuestro sistema de emparejamiento inteligente agrupa a las personas según su nivel, garantizando conversaciones cómodas y productivas para todos."
    },
    {
      question: "¿Cómo garantizan la seguridad en los encuentros?",
      answer: "Todos nuestros espacios aliados son verificados y los encuentros se realizan en lugares públicos. Además, contamos con moderadores certificados y un sistema de valoraciones para mantener un ambiente seguro y respetuoso."
    },
    {
      question: "¿Puedo participar si soy muy tímido/a?",
      answer: "¡Por supuesto! Muchos de nuestros miembros empezaron siendo tímidos. Creamos un ambiente relajado y acogedor, con dinámicas estructuradas que facilitan la conversación natural."
    },
    {
      question: "¿Qué idiomas están disponibles?",
      answer: "Actualmente ofrecemos sesiones en inglés, francés, portugués, italiano y alemán. Estamos expandiendo constantemente nuestra oferta según la demanda de la comunidad."
    },
    {
      question: "¿Puedo cancelar mi asistencia a una sesión?",
      answer: "Sí, puedes cancelar hasta 2 horas antes del encuentro sin penalización. Respetamos que surjan imprevistos y queremos mantener la flexibilidad para todos."
    },
    {
      question: "¿Cómo se benefician los locales aliados?",
      answer: "Los locales reciben nuevos clientes regularmente, aumentan su consumo en horas de menor actividad y se posicionan como centros culturales en su comunidad, todo sin costos adicionales."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Preguntas Frecuentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre Glottia
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg shadow-card border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-secondary/50 transition-colors">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a 
            href="mailto:hola@glottia.com" 
            className="text-brand-blue hover:text-brand-blue-dark transition-colors font-medium"
          >
            Contáctanos en hola@glottia.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
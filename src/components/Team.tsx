import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Matias Aliaga Aguirre",
      role: "Co-Fundador",
      description: "Encargado del desarrollo backend.",
    },
    {
      name: "Italo Sanchez Manrique",
      role: "Fundador",
      description: "Responsable de diseño y desarrollo front end.",
    },
    {
      name: "Ivo Machado Bracamonte",
      role: "Co-Fundador",
      description: "Responsable de diseño y desarrollo front end.",
    },
        {
      name: "Leandro Contreras Lopez",
      role: "Co-Fundador",
      description: "Responsable de diseño y desarrollo front end.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce al equipo apasionado detrás de Glottia, trabajando para
            revolucionar el aprendizaje de idiomas
          </p>
        </div>

        {/* Team Members Table */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Miembros del Equipo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Nombre
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Rol
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Descripción
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {teamMembers.map((member, index) => (
                      <tr
                        key={index}
                        className="hover:bg-muted/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-foreground">
                          {member.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">
                          {member.role}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {member.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Video Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Conoce a Nuestro Equipo
          </h3>
          <div className="aspect-video rounded-lg overflow-hidden border border-border">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/S2RB1lCP13c"
              title="Video del Equipo Glottia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

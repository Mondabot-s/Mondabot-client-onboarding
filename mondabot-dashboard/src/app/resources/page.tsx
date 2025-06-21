import Card from '../../ui/Card';

const documentation = [
  { title: 'Manual: Configuración Inicial del Sistema', type: 'PDF', pages: '12 págs', icon: '📖' },
  { title: 'Guía: Integración con HubSpot', type: 'PDF', pages: '8 págs', icon: '📊' },
  { title: 'Manual: Reportes y Análisis de Campañas', type: 'PDF', pages: '8 págs', icon: '📈' }
];

const templates = [
  { title: 'Scripts de Voz: Servicios Financieros', type: '5 ejemplos', icon: '🎤' },
  { title: 'Plantillas Zap: HubSpot + Twilio', type: '3 integraciones', icon: '⚡' },
  { title: 'Plantillas de Flujos de Trabajo', type: '4 diagramas', icon: '🔄' }
];

const troubleshooting = [
  { title: 'La IA no reconoce correctamente al cliente', description: 'Soluciones para problemas de reconocimiento de voz o entidades.' },
  { title: 'Errores en la sincronización con el CRM', description: 'Cómo resolver problemas de integración con HubSpot u otros CRMs.' },
  { title: 'Configuración de retención de grabaciones', description: 'Políticas y ajustes para cumplimiento normativo.' }
];

export default function ResourcesPage() {
  return (
    <section id="resources" className="mb-12">
      <div className="border-l-3 border-primary pl-4 my-8">
        <h2 className="text-2xl font-bold mb-6">Biblioteca de Recursos</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Documentation */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Documentación</h3>
          <div className="space-y-3">
            {documentation.map((doc) => (
              <div key={doc.title} className="border border-gray-200 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-500">{doc.icon}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium">{doc.title}</h4>
                    <p className="text-xs text-gray-500">{doc.type} · {doc.pages}</p>
                  </div>
                  <button className="text-primary text-sm">Ver</button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Templates */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Plantillas y Ejemplos</h3>
          <div className="space-y-3">
            {templates.map((template) => (
              <div key={template.title} className="border border-gray-200 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-yellow-500">{template.icon}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium">{template.title}</h4>
                    <p className="text-xs text-gray-500">{template.type}</p>
                  </div>
                  <button className="text-primary text-sm">Ver</button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Troubleshooting */}
      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Solución de Problemas</h3>
        <div className="mb-4">
          <input 
            type="text" 
            className="w-full border border-gray-300 rounded-lg p-3" 
            placeholder="Buscar soluciones..."
          />
        </div>
        <div className="space-y-3">
          {troubleshooting.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <h4 className="font-medium mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <button className="text-primary text-sm">Ver solución</button>
            </div>
          ))}
        </div>
      </Card>

      {/* Support Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <h3 className="text-xl font-semibold mb-4">Soporte Técnico</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <div>
                <h4 className="font-medium">Línea de Soporte</h4>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">✉️</span>
              <div>
                <h4 className="font-medium">Email de Soporte</h4>
                <p className="text-sm text-gray-600">soporte@empresa.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💬</span>
              <div>
                <h4 className="font-medium">Chat en Vivo</h4>
                <p className="text-sm text-gray-600">Disponible 24/7</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-4">Comunidad</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">👥</span>
              <div>
                <h4 className="font-medium">Foro de Usuarios</h4>
                <p className="text-sm text-gray-600">Conecta con otros usuarios</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📺</span>
              <div>
                <h4 className="font-medium">Canal de YouTube</h4>
                <p className="text-sm text-gray-600">Tutoriales en video</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📚</span>
              <div>
                <h4 className="font-medium">Base de Conocimientos</h4>
                <p className="text-sm text-gray-600">Artículos y guías</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium">
            Solicitar Soporte
          </button>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg font-medium">
            Programar Capacitación
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Enviar Feedback
          </button>
        </div>
      </Card>
    </section>
  );
} 
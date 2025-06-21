import Card from '../../ui/Card';
import ProgressBar from '../../ui/ProgressBar';

const setupTasks = [
  { id: 1, title: 'Configuración de Twilio API', status: 'completed', description: 'Configuración de credenciales y números de teléfono' },
  { id: 2, title: 'Integración con HubSpot', status: 'in-progress', description: 'Configuración de webhooks y sincronización de datos' },
  { id: 3, title: 'Configuración de IA Voice', status: 'pending', description: 'Entrenamiento del modelo de reconocimiento de voz' },
  { id: 4, title: 'Configuración de n8n Workflows', status: 'pending', description: 'Creación de flujos de automatización' },
  { id: 5, title: 'Configuración de Base de Datos', status: 'completed', description: 'Configuración de esquemas y tablas' },
];

const apiConfigs = [
  {
    name: 'Twilio',
    status: 'connected',
    icon: '📞',
    description: 'API de telefonía y SMS'
  },
  {
    name: 'HubSpot',
    status: 'connecting',
    icon: '📊',
    description: 'CRM y marketing automation'
  },
  {
    name: 'OpenAI',
    status: 'pending',
    icon: '🤖',
    description: 'IA y procesamiento de lenguaje'
  }
];

export default function SetupPage() {
  const completedTasks = setupTasks.filter(task => task.status === 'completed').length;
  const progress = (completedTasks / setupTasks.length) * 100;

  return (
    <section id="setup" className="mb-12">
      <div className="border-l-3 border-primary pl-4 my-8">
        <h2 className="text-2xl font-bold mb-6">Paso 3: Configuración</h2>
      </div>

      {/* Setup Progress */}
      <Card className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Progreso de Configuración</h3>
        <ProgressBar value={progress} label={`Configuración del Sistema: ${Math.round(progress)}%`} />
        <p className="text-sm text-gray-600 mt-2">
          {completedTasks} de {setupTasks.length} tareas completadas
        </p>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Setup Checklist */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Lista de Tareas</h3>
          <div className="space-y-3">
            {setupTasks.map((task) => (
              <div key={task.id} className="flex items-start space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 mt-1 flex-shrink-0 ${
                  task.status === 'completed' 
                    ? 'bg-primary border-primary' 
                    : task.status === 'in-progress'
                    ? 'border-primary bg-blue-100'
                    : 'border-gray-300'
                }`}>
                  {task.status === 'completed' && (
                    <span className="text-white text-xs flex items-center justify-center">✓</span>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{task.title}</h4>
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <span className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
                    task.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : task.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {task.status === 'completed' ? 'Completado' : 
                     task.status === 'in-progress' ? 'En Progreso' : 'Pendiente'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* API Configuration */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Configuración de APIs</h3>
          <div className="space-y-4">
            {apiConfigs.map((api) => (
              <div key={api.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{api.icon}</span>
                  <div>
                    <h4 className="font-medium">{api.name}</h4>
                    <p className="text-sm text-gray-600">{api.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${
                    api.status === 'connected' 
                      ? 'bg-green-500' 
                      : api.status === 'connecting'
                      ? 'bg-yellow-500'
                      : 'bg-gray-400'
                  }`} />
                  <span className="text-sm text-gray-600">
                    {api.status === 'connected' ? 'Conectado' : 
                     api.status === 'connecting' ? 'Conectando' : 'Pendiente'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Configuration Details */}
      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Detalles de Configuración</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Configuración de Twilio</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Account SID:</span>
                <span className="font-mono">AC1234567890abcdef</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Número de Teléfono:</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estado:</span>
                <span className="text-green-600">Activo</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Configuración de HubSpot</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Portal ID:</span>
                <span>12345678</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">API Key:</span>
                <span className="font-mono">pat-***</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estado:</span>
                <span className="text-yellow-600">Configurando</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
} 
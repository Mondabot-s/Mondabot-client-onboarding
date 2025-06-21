import Card from '../../ui/Card';
import ProgressBar from '../../ui/ProgressBar';

const launchTasks = [
  { id: 1, title: 'Configuración de Producción', status: 'completed', description: 'Despliegue en servidores de producción' },
  { id: 2, title: 'Pruebas Finales', status: 'completed', description: 'Validación completa del sistema' },
  { id: 3, title: 'Capacitación del Equipo', status: 'in-progress', description: 'Entrenamiento de usuarios finales' },
  { id: 4, title: 'Documentación Final', status: 'pending', description: 'Manuales de usuario y procedimientos' },
  { id: 5, title: 'Comunicación Interna', status: 'pending', description: 'Anuncio del lanzamiento al equipo' },
  { id: 6, title: 'Monitoreo Inicial', status: 'pending', description: 'Configuración de alertas y monitoreo' }
];

const launchMetrics = [
  { metric: 'Tiempo de Respuesta', value: '2.1s', status: 'optimal' },
  { metric: 'Disponibilidad', value: '99.9%', status: 'optimal' },
  { metric: 'Leads Procesados', value: '0', status: 'pending' },
  { metric: 'Satisfacción', value: 'N/A', status: 'pending' }
];

export default function LaunchPage() {
  const completedTasks = launchTasks.filter(task => task.status === 'completed').length;
  const progress = (completedTasks / launchTasks.length) * 100;
  
  // Mock countdown - in real app, this would be calculated from launch date
  const daysUntilLaunch = 3;
  const hoursUntilLaunch = 12;
  const minutesUntilLaunch = 30;

  return (
    <section id="launch" className="mb-12">
      <div className="border-l-3 border-primary pl-4 my-8">
        <h2 className="text-2xl font-bold mb-6">Paso 5: Lanzamiento</h2>
      </div>

      {/* Countdown Timer */}
      <Card className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Cuenta Regresiva para el Lanzamiento</h3>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">
            {daysUntilLaunch}d {hoursUntilLaunch}h {minutesUntilLaunch}m
          </div>
          <p className="text-gray-600">Lanzamiento programado para el 30 de Julio, 2023</p>
        </div>
      </Card>

      {/* Launch Progress */}
      <Card className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Progreso de Lanzamiento</h3>
        <ProgressBar value={progress} label={`Preparación para Lanzamiento: ${Math.round(progress)}%`} />
        <p className="text-sm text-gray-600 mt-2">
          {completedTasks} de {launchTasks.length} tareas completadas
        </p>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Launch Checklist */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Lista de Lanzamiento</h3>
          <div className="space-y-3">
            {launchTasks.map((task) => (
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

        {/* Launch Metrics */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Métricas de Lanzamiento</h3>
          <div className="space-y-4">
            {launchMetrics.map((metric) => (
              <div key={metric.metric} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{metric.metric}</h4>
                  <p className="text-sm text-gray-600">{metric.value}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  metric.status === 'optimal' ? 'bg-green-500' : 'bg-gray-400'
                }`} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Go-Live Status */}
      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Estado de Go-Live</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">⚠️</div>
            <div className="text-sm font-medium mt-2">Preparación</div>
            <div className="text-xs text-gray-600">Sistema en modo de preparación</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-600">🔒</div>
            <div className="text-sm font-medium mt-2">Acceso Limitado</div>
            <div className="text-xs text-gray-600">Solo equipo interno</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">🚀</div>
            <div className="text-sm font-medium mt-2">Listo para Lanzar</div>
            <div className="text-xs text-gray-600">Todos los sistemas verificados</div>
          </div>
        </div>
      </Card>

      {/* Launch Actions */}
      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Acciones de Lanzamiento</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium">
            Iniciar Lanzamiento
          </button>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg font-medium">
            Simular Lanzamiento
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Verificar Sistemas
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Generar Reporte de Estado
          </button>
        </div>
      </Card>
    </section>
  );
} 
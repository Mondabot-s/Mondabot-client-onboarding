import Card from '../../ui/Card';
import ProgressBar from '../../ui/ProgressBar';

const testScenarios = [
  {
    id: 1,
    name: 'Reconocimiento de Voz',
    description: 'Pruebas de precisión en el reconocimiento de comandos de voz',
    status: 'passed',
    results: { passed: 95, total: 100 }
  },
  {
    id: 2,
    name: 'Integración CRM',
    description: 'Verificación de sincronización de datos con HubSpot',
    status: 'in-progress',
    results: { passed: 8, total: 12 }
  },
  {
    id: 3,
    name: 'Flujo de Cualificación',
    description: 'Validación de la lógica de clasificación de leads',
    status: 'pending',
    results: { passed: 0, total: 15 }
  },
  {
    id: 4,
    name: 'Respuesta de IA',
    description: 'Pruebas de respuestas automáticas y personalización',
    status: 'passed',
    results: { passed: 20, total: 20 }
  }
];

const qualityMetrics = [
  { metric: 'Precisión de Voz', value: 95, unit: '%', status: 'excellent' },
  { metric: 'Tiempo de Respuesta', value: 2.3, unit: 's', status: 'good' },
  { metric: 'Tasa de Éxito', value: 98, unit: '%', status: 'excellent' },
  { metric: 'Disponibilidad', value: 99.9, unit: '%', status: 'excellent' }
];

export default function TestingPage() {
  const totalTests = testScenarios.reduce((acc, test) => acc + test.results.total, 0);
  const passedTests = testScenarios.reduce((acc, test) => acc + test.results.passed, 0);
  const testProgress = (passedTests / totalTests) * 100;

  return (
    <section id="testing" className="mb-12">
      <div className="border-l-3 border-primary pl-4 my-8">
        <h2 className="text-2xl font-bold mb-6">Paso 4: Pruebas</h2>
      </div>

      {/* Testing Progress */}
      <Card className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Progreso de Pruebas</h3>
        <ProgressBar value={testProgress} label={`Pruebas Completadas: ${Math.round(testProgress)}%`} />
        <p className="text-sm text-gray-600 mt-2">
          {passedTests} de {totalTests} pruebas exitosas
        </p>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Test Scenarios */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Escenarios de Prueba</h3>
          <div className="space-y-4">
            {testScenarios.map((test) => (
              <div key={test.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">{test.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    test.status === 'passed' 
                      ? 'bg-green-100 text-green-800' 
                      : test.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {test.status === 'passed' ? 'Aprobado' : 
                     test.status === 'in-progress' ? 'En Progreso' : 'Pendiente'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{test.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-green-600 font-medium">{test.results.passed}</span>
                    <span className="text-gray-600">/{test.results.total} pruebas</span>
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded">
                    <div 
                      className="h-2 bg-primary rounded" 
                      style={{ width: `${(test.results.passed / test.results.total) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quality Metrics */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Métricas de Calidad</h3>
          <div className="space-y-4">
            {qualityMetrics.map((metric) => (
              <div key={metric.metric} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{metric.metric}</h4>
                  <p className="text-sm text-gray-600">
                    {metric.value}{metric.unit}
                  </p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  metric.status === 'excellent' ? 'bg-green-500' : 'bg-yellow-500'
                }`} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Test Results Summary */}
      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Resumen de Resultados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{testScenarios.filter(t => t.status === 'passed').length}</div>
            <div className="text-sm text-gray-600">Pruebas Aprobadas</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{testScenarios.filter(t => t.status === 'in-progress').length}</div>
            <div className="text-sm text-gray-600">En Progreso</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-600">{testScenarios.filter(t => t.status === 'pending').length}</div>
            <div className="text-sm text-gray-600">Pendientes</div>
          </div>
        </div>
      </Card>

      {/* Test Actions */}
      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Acciones de Prueba</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium">
            Ejecutar Pruebas Automáticas
          </button>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg font-medium">
            Generar Reporte de Pruebas
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Ver Logs de Pruebas
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Configurar Pruebas Personalizadas
          </button>
        </div>
      </Card>
    </section>
  );
} 
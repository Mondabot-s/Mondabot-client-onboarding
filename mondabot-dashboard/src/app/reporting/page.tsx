import Card from '../../ui/Card';

const kpiData = [
  { title: 'Leads Procesados', value: '1,247', change: '+12%', trend: 'up' },
  { title: 'Tiempo de Respuesta', value: '2.1s', change: '-15%', trend: 'down' },
  { title: 'Tasa de Conversión', value: '23.5%', change: '+8%', trend: 'up' },
  { title: 'Satisfacción', value: '4.8/5', change: '+5%', trend: 'up' }
];

const performanceMetrics = [
  { metric: 'Llamadas Recibidas', value: 156, target: 150, status: 'exceeded' },
  { metric: 'Leads Calificados', value: 89, target: 100, status: 'below' },
  { metric: 'Tiempo Promedio', value: '2.1s', target: '3.0s', status: 'exceeded' },
  { metric: 'Disponibilidad', value: '99.9%', target: '99.5%', status: 'exceeded' }
];

const recentActivity = [
  { time: '2 min', action: 'Nuevo lead procesado', type: 'lead' },
  { time: '5 min', action: 'Llamada completada', type: 'call' },
  { time: '12 min', action: 'Lead calificado como Hot', type: 'qualification' },
  { time: '18 min', action: 'Integración CRM actualizada', type: 'integration' },
  { time: '25 min', action: 'Nuevo lead procesado', type: 'lead' }
];

export default function ReportingPage() {
  return (
    <section id="reporting" className="mb-12">
      <div className="border-l-3 border-primary pl-4 my-8">
        <h2 className="text-2xl font-bold mb-6">Paso 6: Reportes</h2>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {kpiData.map((kpi) => (
          <Card key={kpi.title} className="text-center">
            <div className="kpi-card">
              <div className="kpi-value text-3xl font-bold text-primary mb-2">{kpi.value}</div>
              <div className="kpi-label text-sm text-gray-600 mb-2">{kpi.title}</div>
              <div className={`text-xs font-medium ${
                kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {kpi.change} vs mes anterior
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Metrics */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Métricas de Rendimiento</h3>
          <div className="space-y-4">
            {performanceMetrics.map((metric) => (
              <div key={metric.metric} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{metric.metric}</h4>
                  <p className="text-sm text-gray-600">
                    Meta: {metric.target}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{metric.value}</div>
                  <div className={`text-xs ${
                    metric.status === 'exceeded' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.status === 'exceeded' ? '✅ Excede' : '❌ Debajo'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Actividad Reciente</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'lead' ? 'bg-blue-500' :
                  activity.type === 'call' ? 'bg-green-500' :
                  activity.type === 'qualification' ? 'bg-yellow-500' :
                  'bg-purple-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time} atrás</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Analytics Charts Placeholder */}
      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Análisis de Tendencias</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h4 className="font-medium mb-2">Leads por Día</h4>
            <div className="text-2xl font-bold text-primary mb-2">45</div>
            <p className="text-sm text-gray-600">Promedio de los últimos 7 días</p>
            {/* Chart placeholder */}
            <div className="mt-4 h-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">📊 Gráfico de Leads</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h4 className="font-medium mb-2">Tiempo de Respuesta</h4>
            <div className="text-2xl font-bold text-primary mb-2">2.1s</div>
            <p className="text-sm text-gray-600">Promedio de respuesta</p>
            {/* Chart placeholder */}
            <div className="mt-4 h-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">📈 Gráfico de Tiempo</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Report Actions */}
      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Generar Reportes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium">
            Reporte Diario
          </button>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg font-medium">
            Reporte Semanal
          </button>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg font-medium">
            Reporte Mensual
          </button>
        </div>
      </Card>

      {/* Export Options */}
      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Exportar Datos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Exportar a Excel
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Exportar a PDF
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Enviar por Email
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Programar Reportes
          </button>
        </div>
      </Card>
    </section>
  );
} 
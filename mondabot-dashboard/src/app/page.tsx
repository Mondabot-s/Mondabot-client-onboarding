"use client";

import Card from '../ui/Card';
import Icon from '../ui/Icon';
import ProgressBar from '../ui/ProgressBar';
import Image from 'next/image';
import {
  CheckCircle2,
  Mic,
  RefreshCw,
  Database,
  Calendar,
  Target,
  Mail,
  Phone,
  MessageSquare,
  PlayCircle,
  User,
  FileText,
  Clock,
  ListChecks,
  ArrowRight,
} from 'lucide-react';

// Overview Section
const OverviewSection = () => (
  <section id="overview" className="mb-16">
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">
          Welcome to your Dashboard
        </h1>
        <p className="text-text-secondary">
          AI Voice Automation + CRM Integration for Client ABC
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full bg-white shadow-md">
          <Icon icon={User} className="w-6 h-6 text-gray-500" />
        </div>
        <div className="p-2 rounded-full bg-primary text-white shadow-md">
          <p className="font-bold text-lg">AI</p>
        </div>
      </div>
    </header>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2">
        <Card>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Welcome Video
          </h2>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1068762817?h=1234567890abcdef&title=0&byline=0&portrait=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <p className="text-sm text-text-secondary mt-2">
            A personal message from our CEO explaining the automation process
            and next steps.
          </p>
        </Card>
      </div>
      <div>
        <Card>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Your Project Manager
          </h2>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image 
                src="/Sergio_Bernal.jpg" 
                alt="Sergio Bernal" 
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">
                Sergio Bernal
              </h3>
              <p className="text-sm text-text-secondary">
                Senior Project Manager
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Icon icon={Mail} className="w-5 h-5 mr-3" />
              <a 
                href="mailto:sergio@mondabot.com"
                className="text-text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                sergio@mondabot.com
              </a>
            </div>
            <div className="flex items-center text-sm">
              <Icon icon={Phone} className="w-5 h-5 mr-3" />
              <span className="text-text-secondary">+34 634800790</span>
            </div>
            <div className="flex items-center text-sm">
              <Icon icon={Calendar} className="w-5 h-5 mr-3" />
              <a 
                href="https://calendly.com/mondabot/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                Schedule a call
              </a>
            </div>
            <div className="flex items-center text-sm">
              <Icon icon={MessageSquare} className="w-5 h-5 mr-3" />
              <a 
                href="https://www.linkedin.com/in/sergio-bernal-300816206/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>

    <Card>
      <h2 className="text-xl font-semibold text-text-primary mb-6">
        Project Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-base font-medium text-text-secondary mb-4">
            Objectives
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Icon
                icon={CheckCircle2}
                className="w-5 h-5 mr-3 text-green-500"
              />
              <span className="text-sm text-text-primary">
                Reduce customer response time by 80%
              </span>
            </li>
            <li className="flex items-center">
              <Icon
                icon={CheckCircle2}
                className="w-5 h-5 mr-3 text-green-500"
              />
              <span className="text-sm text-text-primary">
                Automate lead qualification processes
              </span>
            </li>
            <li className="flex items-center">
              <Icon
                icon={CheckCircle2}
                className="w-5 h-5 mr-3 text-green-500"
              />
              <span className="text-sm text-text-primary">
                Integrate data with existing CRM
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-medium text-text-secondary mb-4">
            Automation Type
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Icon icon={Mic} className="w-5 h-5 mr-3" />
              <span className="text-sm text-text-primary">
                AI Voice Response
              </span>
            </li>
            <li className="flex items-center">
              <Icon icon={RefreshCw} className="w-5 h-5 mr-3" />
              <span className="text-sm text-text-primary">
                Qualification Workflow
              </span>
            </li>
            <li className="flex items-center">
              <Icon icon={Database} className="w-5 h-5 mr-3" />
              <span className="text-sm text-text-primary">
                Bidirectional CRM Integration
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-medium text-text-secondary mb-4">
            Key Dates
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Icon icon={Calendar} className="w-5 h-5 mr-3 mt-1" />
              <div>
                <p className="text-sm text-text-primary font-medium">
                  Project Start
                </p>
                <p className="text-sm text-text-secondary">June 15, 2023</p>
              </div>
            </li>
            <li className="flex items-start">
              <Icon icon={Target} className="w-5 h-5 mr-3 mt-1" />
              <div>
                <p className="text-sm text-text-primary font-medium">
                  Estimated Launch
                </p>
                <p className="text-sm text-text-secondary">July 30, 2023</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  </section>
);

// Discovery Section
const DiscoverySection = () => {
  const discoveryResponses = [
    { label: 'Industry', value: 'Financial Services' },
    { label: 'Company Size', value: '51-200 employees' },
    { label: 'Current CRM', value: 'HubSpot' },
    { label: 'Monthly Lead Volume', value: '500-1000' },
    { label: 'Main Challenge', value: 'Slow response time to new leads' },
  ];

  return (
    <section id="discovery" className="mb-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary">
          Step 1: Discovery
        </h2>
        <p className="text-text-secondary mt-1">
          Let&apos;s gather all the necessary information to kick-start your
          project.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Discovery Responses
          </h3>
          <div className="space-y-4">
            {discoveryResponses.map((response, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                <span className="text-sm font-medium text-text-secondary">
                  {response.label}
                </span>
                <span className="text-sm text-text-primary font-semibold">
                  {response.value}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Discovery Status
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon icon={FileText} className="w-5 h-5 mr-3 text-green-500" />
                <span className="text-sm font-medium">Questionnaire Completed</span>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Complete
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon icon={Calendar} className="w-5 h-5 mr-3 text-green-500" />
                <span className="text-sm font-medium">Initial Meeting</span>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Complete
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon icon={Clock} className="w-5 h-5 mr-3 text-blue-500" />
                <span className="text-sm font-medium">Technical Review</span>
              </div>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                In Progress
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon icon={ListChecks} className="w-5 h-5 mr-3 text-gray-400" />
                <span className="text-sm font-medium">Requirements Finalized</span>
              </div>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                Pending
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

// Strategy Section
const StrategySection = () => {
  const workflowSteps = [
    'Lead Capture',
    'AI Qualification',
    'CRM Update',
    'Follow-up',
  ];

  const automationTypes = [
    {
      title: 'Voice Response System',
      description: 'AI-powered voice responses for incoming calls with natural language processing.',
      status: 'approved',
      icon: Mic,
    },
    {
      title: 'Lead Qualification Workflow',
      description: 'Automated lead scoring and qualification based on conversation analysis.',
      status: 'approved',
      icon: Target,
    },
    {
      title: 'CRM Integration',
      description: 'Bidirectional sync with HubSpot for real-time data updates.',
      status: 'pending',
      icon: Database,
    },
  ];

  return (
    <section id="strategy" className="mb-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary">
          Step 2: Strategy
        </h2>
        <p className="text-text-secondary mt-1">
          Here we define the core automation logic and get your approval on the
          proposed workflows.
        </p>
      </header>

      <Card className="mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          Workflow Diagram
        </h3>
        <div className="flex items-center justify-center flex-wrap gap-4 text-sm">
          {workflowSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <span className="font-bold text-primary mr-2">
                  {index + 1}
                </span>
                <span className="text-text-primary">{step}</span>
              </div>
              {index < workflowSteps.length - 1 && (
                <Icon
                  icon={ArrowRight}
                  className="w-5 h-5 mx-2 text-gray-300"
                />
              )}
            </div>
          ))}
        </div>
      </Card>

      <div className="space-y-6">
        {automationTypes.map((type) => (
          <Card key={type.title}>
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-2">
                  <Icon icon={type.icon} className="w-6 h-6 mr-3" />
                  <h3 className="text-lg font-semibold text-text-primary">
                    {type.title}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary">
                  {type.description}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${
                  type.status === 'approved' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {type.status === 'approved' ? 'Approved' : 'Pending'}
              </span>
            </div>
            <div className="flex space-x-4 mt-4 pt-4 border-t border-gray-100">
              <button className="text-sm font-medium text-primary hover:underline">
                View Details
              </button>
              <button className="text-sm font-medium text-primary hover:underline">
                Edit
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Setup Section
const SetupSection = () => {
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

  const completedTasks = setupTasks.filter(task => task.status === 'completed').length;
  const progressPercentage = (completedTasks / setupTasks.length) * 100;

  return (
    <section id="setup" className="mb-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary">
          Step 3: Setup
        </h2>
        <p className="text-text-secondary mt-1">
          Technical configuration and integration setup for your automation system.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-semibold mb-4">Setup Progress</h3>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-gray-600">{Math.round(progressPercentage)}%</span>
            </div>
            <ProgressBar value={progressPercentage} />
          </div>
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

        <Card>
          <h3 className="text-xl font-semibold mb-4">API Configurations</h3>
          <div className="space-y-4">
            {apiConfigs.map((api) => (
              <div key={api.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{api.icon}</span>
                    <div>
                      <h4 className="font-medium">{api.name}</h4>
                      <p className="text-sm text-gray-600">{api.description}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    api.status === 'connected' 
                      ? 'bg-green-100 text-green-700' 
                      : api.status === 'connecting'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {api.status === 'connected' ? 'Connected' : 
                     api.status === 'connecting' ? 'Connecting' : 'Pending'}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-sm font-medium text-primary hover:underline">
                    Configure
                  </button>
                  <button className="text-sm font-medium text-primary hover:underline">
                    Test
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

// Testing Section
const TestingSection = () => {
  const testScenarios = [
    {
      name: 'Voice Response Test',
      status: 'passed',
      description: 'Testing AI voice responses and natural language processing',
      icon: Mic,
    },
    {
      name: 'CRM Integration Test',
      status: 'in-progress',
      description: 'Testing bidirectional data sync with HubSpot',
      icon: Database,
    },
    {
      name: 'Workflow Test',
      status: 'pending',
      description: 'Testing complete lead qualification workflow',
      icon: RefreshCw,
    },
  ];

  return (
    <section id="testing" className="mb-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary">
          Step 4: Testing
        </h2>
        <p className="text-text-secondary mt-1">
          Comprehensive testing of all automation components and workflows.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-semibold mb-4">Test Scenarios</h3>
          <div className="space-y-4">
            {testScenarios.map((test) => (
              <div key={test.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Icon icon={test.icon} className="w-6 h-6 mr-3" />
                    <div>
                      <h4 className="font-medium">{test.name}</h4>
                      <p className="text-sm text-gray-600">{test.description}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    test.status === 'passed' 
                      ? 'bg-green-100 text-green-700' 
                      : test.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {test.status === 'passed' ? 'Passed' : 
                     test.status === 'in-progress' ? 'In Progress' : 'Pending'}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-sm font-medium text-primary hover:underline">
                    Run Test
                  </button>
                  <button className="text-sm font-medium text-primary hover:underline">
                    View Results
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-4">Test Results</h3>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Icon icon={CheckCircle2} className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-medium text-green-800">Voice Response Test</span>
              </div>
              <p className="text-sm text-green-700">All voice interactions working correctly</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Icon icon={Clock} className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-medium text-blue-800">CRM Integration Test</span>
              </div>
              <p className="text-sm text-blue-700">Testing in progress...</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

// Launch Section
const LaunchSection = () => {
  const launchTasks = [
    { id: 1, title: 'Final System Review', status: 'completed', description: 'Complete system validation and performance check' },
    { id: 2, title: 'User Training', status: 'in-progress', description: 'Training sessions for team members' },
    { id: 3, title: 'Go-Live Preparation', status: 'pending', description: 'Final preparations for system launch' },
    { id: 4, title: 'Launch Monitoring', status: 'pending', description: '24/7 monitoring during initial launch period' },
  ];

  const completedTasks = launchTasks.filter(task => task.status === 'completed').length;
  const progressPercentage = (completedTasks / launchTasks.length) * 100;

  return (
    <section id="launch" className="mb-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary">
          Step 5: Launch
        </h2>
        <p className="text-text-secondary mt-1">
          Final preparations and system launch with monitoring.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-semibold mb-4">Launch Checklist</h3>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Launch Progress</span>
              <span className="text-sm text-gray-600">{Math.round(progressPercentage)}%</span>
            </div>
            <ProgressBar value={progressPercentage} />
          </div>
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

        <Card>
          <h3 className="text-xl font-semibold mb-4">Launch Metrics</h3>
          <div className="space-y-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">July 30</div>
              <div className="text-sm text-gray-600">Target Launch Date</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-600">24/7</div>
                <div className="text-xs text-blue-600">Monitoring</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-lg font-bold text-green-600">99.9%</div>
                <div className="text-xs text-green-600">Uptime Target</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

// Reporting Section
const ReportingSection = () => {
  const reports = [
    { name: 'Daily Performance Report', type: 'Automated', frequency: 'Daily' },
    { name: 'Weekly Analytics Summary', type: 'Automated', frequency: 'Weekly' },
    { name: 'Monthly ROI Analysis', type: 'Manual', frequency: 'Monthly' },
  ];

  return (
    <section id="reporting" className="mb-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary">
          Step 6: Reporting
        </h2>
        <p className="text-text-secondary mt-1">
          Analytics, insights, and performance monitoring for your automation system.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Response Time</span>
              <span className="text-lg font-bold text-primary">2.1s</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Lead Conversion Rate</span>
              <span className="text-lg font-bold text-primary">23%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">System Uptime</span>
              <span className="text-lg font-bold text-primary">99.8%</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-4">Automated Reports</h3>
          <div className="space-y-3">
            {reports.map((report) => (
              <div key={report.name} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium">{report.name}</h4>
                  <p className="text-sm text-gray-600">{report.type} • {report.frequency}</p>
                </div>
                <button className="text-sm font-medium text-primary hover:underline">
                  View
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Análisis de Tendencias</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h4 className="font-medium mb-2">Leads por Día</h4>
            <div className="text-2xl font-bold text-primary mb-2">45</div>
            <p className="text-sm text-gray-600">Promedio de los últimos 7 días</p>
            <div className="mt-4 h-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">📊 Gráfico de Leads</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h4 className="font-medium mb-2">Tiempo de Respuesta</h4>
            <div className="text-2xl font-bold text-primary mb-2">2.1s</div>
            <p className="text-sm text-gray-600">Promedio de respuesta</p>
            <div className="mt-4 h-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">📈 Gráfico de Tiempo</span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

// Library Section
const LibrarySection = () => {
  const documentation = [
    { title: 'User Manual', type: 'PDF', pages: '45 pages', icon: '📖' },
    { title: 'API Documentation', type: 'HTML', pages: 'Interactive', icon: '🔧' },
    { title: 'Best Practices Guide', type: 'PDF', pages: '32 pages', icon: '📋' },
  ];

  const templates = [
    { title: 'Email Templates', type: 'Collection', count: '12 templates', icon: '📧' },
    { title: 'Voice Scripts', type: 'Collection', count: '8 scripts', icon: '🎤' },
    { title: 'Workflow Templates', type: 'Collection', count: '5 workflows', icon: '🔄' },
  ];

  return (
    <section id="library" className="mb-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary">
          Library
        </h2>
        <p className="text-text-secondary mt-1">
          Resources, documentation, and templates for your automation system.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

        <Card>
          <h3 className="text-xl font-semibold mb-4">Templates</h3>
          <div className="space-y-3">
            {templates.map((template) => (
              <div key={template.title} className="border border-gray-200 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-500">{template.icon}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium">{template.title}</h4>
                    <p className="text-xs text-gray-500">{template.type} · {template.count}</p>
                  </div>
                  <button className="text-primary text-sm">Ver</button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-6">
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
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      <OverviewSection />
      <DiscoverySection />
      <StrategySection />
      <SetupSection />
      <TestingSection />
      <LaunchSection />
      <ReportingSection />
      <LibrarySection />
    </div>
  );
}

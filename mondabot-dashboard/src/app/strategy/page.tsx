import Card from '../../ui/Card';
import Icon from '../../ui/Icon';
import {
  Mic,
  RefreshCw,
  Database,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

const automationTypes = [
  {
    title: 'AI Voice Response',
    description: 'Automated response system with voice recognition and natural language processing.',
    icon: Mic,
    status: 'approved'
  },
  {
    title: 'Qualification Workflow',
    description: 'Automated flow to qualify and distribute leads according to predefined criteria.',
    icon: RefreshCw,
    status: 'approved'
  },
  {
    title: 'CRM Integration',
    description: 'Bidirectional synchronization with HubSpot for contact and opportunity management.',
    icon: Database,
    status: 'pending'
  }
];

const workflowSteps = [
  'Incoming call received',
  'AI identifies customer intent',
  'Automatic lead classification',
  'Ticket creation in CRM',
  'Assignment to the corresponding team',
  'Automated follow-up'
];

export default function StrategyPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">
          Step 2: Strategy
        </h1>
        <p className="text-text-secondary mt-1">
          Here we define the core automation logic and get your approval on the
          proposed workflows.
        </p>
      </header>

      <Card>
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          Workflow Diagram
        </h2>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

      <Card>
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          Approval Status
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <Icon
                icon={CheckCircle2}
                className="w-6 h-6 mr-3 text-green-500"
              />
              <div>
                <h4 className="font-medium text-text-primary">
                  Automation Strategy
                </h4>
                <p className="text-sm text-text-secondary">
                  Approved by the technical team
                </p>
              </div>
            </div>
            <span className="text-sm font-semibold text-green-600">
              Approved
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center">
              <Icon
                icon={AlertCircle}
                className="w-6 h-6 mr-3 text-yellow-500"
              />
              <div>
                <h4 className="font-medium text-text-primary">
                  Budget and Timeline
                </h4>
                <p className="text-sm text-text-secondary">
                  Pending client review
                </p>
              </div>
            </div>
            <span className="text-sm font-semibold text-yellow-600">
              Pending
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
} 
import Card from '../../ui/Card';
import Icon from '../../ui/Icon';
import { FileText, Calendar, Clock, ListChecks } from 'lucide-react';

const discoveryResponses = [
  { label: 'Industry', value: 'Financial Services' },
  { label: 'Company Size', value: '51-200 employees' },
  { label: 'Current CRM', value: 'HubSpot' },
  { label: 'Monthly Lead Volume', value: '500-1000' },
  { label: 'Main Challenge', value: 'Slow response time to new leads' },
];

export default function DiscoveryPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">
          Step 1: Discovery
        </h1>
        <p className="text-text-secondary mt-1">
          Let&apos;s gather all the necessary information to kick-start your
          project.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-8">
        <Card>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Intake Form
          </h2>
          <p className="text-sm text-text-secondary mb-6">
            Please complete our detailed form to help us understand your
            specific automation needs.
          </p>
          <button className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg font-medium">
            <Icon icon={FileText} className="w-5 h-5 mr-2" />
            <span>Complete Form</span>
          </button>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Response Summary
          </h2>
          <div className="space-y-4">
            {discoveryResponses.map((item) => (
              <div key={item.label}>
                <h3 className="text-sm font-medium text-text-secondary">
                  {item.label}
                </h3>
                <p className="text-text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          Schedule Your Kick-off Call
        </h2>
        <p className="text-sm text-text-secondary mb-6">
          Schedule a 60-minute session with your Project Manager to review the
          discovery findings and define the implementation strategy.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-3">
          <div className="flex items-center text-sm">
            <Icon icon={Clock} className="w-5 h-5 mr-3" />
            <span className="text-text-secondary">Duration: 60 minutes</span>
          </div>
          <div className="flex items-center text-sm">
            <Icon icon={ListChecks} className="w-5 h-5 mr-3" />
            <span className="text-text-secondary">
              Agenda: Discovery review and strategy planning
            </span>
          </div>
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg font-medium">
          <Icon icon={Calendar} className="w-5 h-5 mr-2" />
          <span>Schedule Call</span>
        </button>
      </Card>
    </div>
  );
} 
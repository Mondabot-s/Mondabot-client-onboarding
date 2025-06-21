import Card from '../../ui/Card';
import Icon from '../../ui/Icon';
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
} from 'lucide-react';

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
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

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <Card>
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              Welcome Video
            </h2>
            <div className="relative aspect-video rounded-lg bg-gray-200 flex items-center justify-center">
              <Icon
                icon={PlayCircle}
                className="w-20 h-20 text-gray-400"
              />
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
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src="/Sergio_Bernal.jpg" 
                  alt="Sergio Bernal" 
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
            <div className="space-y-3 mt-6">
              <div className="flex items-center text-sm">
                <Icon icon={Mail} className="w-5 h-5 mr-3" />
                <span className="text-text-secondary">
                  sergio@mondabot.com
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Icon icon={Phone} className="w-5 h-5 mr-3" />
                <span className="text-text-secondary">+34 634800790</span>
              </div>
              <div className="flex items-center text-sm">
                <Icon icon={Calendar} className="w-5 h-5 mr-3" />
                <span className="text-text-secondary">Schedule a call</span>
              </div>
              <div className="flex items-center text-sm">
                <Icon icon={MessageSquare} className="w-5 h-5 mr-3" />
                <span className="text-text-secondary">WhatsApp</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card>
        <h2 className="text-xl font-semibold text-text-primary mb-6">
          Project Summary
        </h2>
        <div className="grid grid-cols-3 gap-8">
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
    </div>
  );
} 

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Building, Zap, ArrowUp, ArrowDown } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface EnergyMetric {
  id: string;
  title: string;
  value: string;
  unit: string;
  trend: 'up' | 'down';
  trendValue: string;
  progress: number;
  icon: React.ReactNode;
  description: string;
}

const EnergyDashboard = () => {
  const metrics: EnergyMetric[] = [
    {
      id: 'area',
      title: 'Coverage Area',
      value: '683',
      unit: 'Km²',
      trend: 'up',
      trendValue: '+5.2%',
      progress: 75,
      icon: <Building className="h-6 w-6" />,
      description: 'Total geographical area covered by our clean energy infrastructure'
    },
    {
      id: 'production',
      title: 'Energy Production',
      value: '92.17',
      unit: 'M kWh',
      trend: 'up',
      trendValue: '+12.8%',
      progress: 85,
      icon: <Zap className="h-6 w-6" />,
      description: 'Total clean energy produced this quarter'
    },
    {
      id: 'consumers',
      title: 'Consumer Units',
      value: '8,860',
      unit: 'UCs',
      trend: 'down',
      trendValue: '-2.1%',
      progress: 68,
      icon: <Building className="h-6 w-6" />,
      description: 'Active consumer units connected to our clean energy grid'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Clean Energy Production Dashboard
          </h1>
          <p className="text-gray-600">
            Brazil's Strategic Clean Energy Presence - Real-time Production Values
          </p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline" size="sm">
              Export Data
            </Button>
            <Button variant="outline" size="sm">
              View Trends
            </Button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric) => (
            <Card 
              key={metric.id} 
              className="relative group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 bg-gradient-to-br from-white to-orange-50/30"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    {metric.icon}
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? (
                      <ArrowUp className="h-4 w-4" />
                    ) : (
                      <ArrowDown className="h-4 w-4" />
                    )}
                    {metric.trendValue}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-700">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Main Value */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {metric.value}
                    </span>
                    <span className="text-lg text-gray-600">
                      {metric.unit}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Capacity Utilization</span>
                      <span>{metric.progress}%</span>
                    </div>
                    <Progress 
                      value={metric.progress} 
                      className="h-2 bg-orange-100"
                    />
                  </div>

                  {/* Description with Tooltip */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-sm text-gray-600 truncate cursor-help">
                        {metric.description}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{metric.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Section */}
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardHeader>
            <CardTitle className="text-xl">Strategic Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">683</div>
                <div className="text-orange-100">Total Coverage (Km²)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">92.17M</div>
                <div className="text-orange-100">Clean Energy (kWh)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">8,860</div>
                <div className="text-orange-100">Active Consumers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Last updated: {new Date().toLocaleString()} | Data refreshes every 15 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default EnergyDashboard;

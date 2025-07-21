"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Circle,
  Clock,
  Calendar,
  Users,
  FileText,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react"
import { TimelineFiltersComponent, type TimelineFilters } from "./timeline-filters"
import { parseISO, isWithinInterval } from "date-fns"

interface TimelinePhase {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  duration: string
  status: "completed" | "in-progress" | "upcoming"
  milestones: {
    id: string
    title: string
    date: string
    description: string
    status: "completed" | "in-progress" | "upcoming"
    icon: React.ReactNode
  }[]
  deliverables: string[]
  team: string[]
}

interface ProjectTimelineProps {
  phases: TimelinePhase[]
  projectTitle: string
}

export function ProjectTimeline({ phases, projectTitle }: ProjectTimelineProps) {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"overview" | "detailed">("overview")
  const [filters, setFilters] = useState<TimelineFilters>({
    phaseTypes: [],
    teamMembers: [],
    dateRange: { from: null, to: null },
    searchTerm: "",
    status: [],
  })

  // Extract available filter options
  const availablePhaseTypes = useMemo(() => {
    return Array.from(new Set(phases.map((phase) => phase.title)))
  }, [phases])

  const availableTeamMembers = useMemo(() => {
    const allMembers = phases.flatMap((phase) => phase.team)
    return Array.from(new Set(allMembers)).sort()
  }, [phases])

  const availableStatuses = useMemo(() => {
    return Array.from(new Set(phases.map((phase) => phase.status)))
  }, [phases])

  // Filter phases based on active filters
  const filteredPhases = useMemo(() => {
    return phases.filter((phase) => {
      // Phase type filter
      if (filters.phaseTypes.length > 0 && !filters.phaseTypes.includes(phase.title)) {
        return false
      }

      // Status filter
      if (filters.status.length > 0 && !filters.status.includes(phase.status)) {
        return false
      }

      // Team member filter
      if (filters.teamMembers.length > 0) {
        const hasTeamMember = filters.teamMembers.some((member) => phase.team.includes(member))
        if (!hasTeamMember) return false
      }

      // Date range filter
      if (filters.dateRange.from || filters.dateRange.to) {
        try {
          const phaseStart = parseISO(phase.startDate + "-01") // Add day for parsing
          const phaseEnd = parseISO(phase.endDate + "-01")

          if (filters.dateRange.from && filters.dateRange.to) {
            const isInRange =
              isWithinInterval(phaseStart, { start: filters.dateRange.from, end: filters.dateRange.to }) ||
              isWithinInterval(phaseEnd, { start: filters.dateRange.from, end: filters.dateRange.to })
            if (!isInRange) return false
          } else if (filters.dateRange.from) {
            if (phaseEnd < filters.dateRange.from) return false
          } else if (filters.dateRange.to) {
            if (phaseStart > filters.dateRange.to) return false
          }
        } catch (error) {
          // If date parsing fails, include the phase
          console.warn("Date parsing error for phase:", phase.title)
        }
      }

      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase()
        const phaseMatches =
          phase.title.toLowerCase().includes(searchLower) || phase.description.toLowerCase().includes(searchLower)

        const milestoneMatches = phase.milestones.some(
          (milestone) =>
            milestone.title.toLowerCase().includes(searchLower) ||
            milestone.description.toLowerCase().includes(searchLower),
        )

        const deliverableMatches = phase.deliverables.some((deliverable) =>
          deliverable.toLowerCase().includes(searchLower),
        )

        if (!phaseMatches && !milestoneMatches && !deliverableMatches) {
          return false
        }
      }

      return true
    })
  }, [phases, filters])

  // Filter milestones within phases based on search term
  const getFilteredMilestones = (phase: TimelinePhase) => {
    if (!filters.searchTerm) return phase.milestones

    const searchLower = filters.searchTerm.toLowerCase()
    return phase.milestones.filter(
      (milestone) =>
        milestone.title.toLowerCase().includes(searchLower) ||
        milestone.description.toLowerCase().includes(searchLower),
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100"
      case "in-progress":
        return "text-blue-600 bg-blue-100"
      case "upcoming":
        return "text-gray-600 bg-gray-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-600" />
      case "upcoming":
        return <Circle className="h-5 w-5 text-gray-400" />
      default:
        return <Circle className="h-5 w-5 text-gray-400" />
    }
  }

  const completedPhases = filteredPhases.filter((p) => p.status === "completed").length
  const totalPhases = filteredPhases.length

  return (
    <div className="space-y-8">
      {/* Timeline Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-contrast-dark mb-2">Project Timeline</h2>
          <p className="text-secondary">
            Detailed timeline showing key phases and milestones for {projectTitle}
            {totalPhases !== phases.length && (
              <span className="ml-2 text-primary">
                ({totalPhases} of {phases.length} phases shown)
              </span>
            )}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "overview" ? "default" : "outline"}
            onClick={() => setViewMode("overview")}
            className={viewMode === "overview" ? "bg-primary text-white" : ""}
          >
            Overview
          </Button>
          <Button
            variant={viewMode === "detailed" ? "default" : "outline"}
            onClick={() => setViewMode("detailed")}
            className={viewMode === "detailed" ? "bg-primary text-white" : ""}
          >
            Detailed
          </Button>
        </div>
      </div>

      {/* Timeline Filters */}
      <TimelineFiltersComponent
        filters={filters}
        onFiltersChange={setFilters}
        availablePhaseTypes={availablePhaseTypes}
        availableTeamMembers={availableTeamMembers}
        availableStatuses={availableStatuses}
      />

      {/* Timeline Progress Bar */}
      <div className="relative">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-contrast-dark">
            {totalPhases > 0 ? "Filtered Progress" : "Project Progress"}
          </span>
          <span className="text-sm text-secondary">
            {completedPhases} of {totalPhases} phases completed
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{
              width: totalPhases > 0 ? `${(completedPhases / totalPhases) * 100}%` : "0%",
            }}
          ></div>
        </div>
      </div>

      {/* No Results Message */}
      {filteredPhases.length === 0 && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-8 text-center">
            <AlertCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-contrast-dark mb-2">No phases match your filters</h3>
            <p className="text-secondary mb-4">Try adjusting your filters or clearing them to see more results.</p>
            <Button
              variant="outline"
              onClick={() =>
                setFilters({
                  phaseTypes: [],
                  teamMembers: [],
                  dateRange: { from: null, to: null },
                  searchTerm: "",
                  status: [],
                })
              }
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Timeline Phases */}
      <div className="space-y-6">
        {filteredPhases.map((phase, index) => {
          const filteredMilestones = getFilteredMilestones(phase)

          return (
            <Card
              key={phase.id}
              className={`border-l-4 transition-all duration-200 ${
                phase.status === "completed"
                  ? "border-l-green-500 bg-green-50/30"
                  : phase.status === "in-progress"
                    ? "border-l-blue-500 bg-blue-50/30"
                    : "border-l-gray-300 bg-gray-50/30"
              } ${expandedPhase === phase.id ? "shadow-lg" : "hover:shadow-md"}`}
            >
              <CardContent className="p-6">
                {/* Phase Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">{getStatusIcon(phase.status)}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-contrast-dark">{phase.title}</h3>
                        <Badge className={getStatusColor(phase.status)}>
                          {phase.status.charAt(0).toUpperCase() + phase.status.slice(1).replace("-", " ")}
                        </Badge>
                        {filters.searchTerm && filteredMilestones.length !== phase.milestones.length && (
                          <Badge variant="outline" className="text-xs bg-yellow-100 text-yellow-800">
                            {filteredMilestones.length} of {phase.milestones.length} milestones
                          </Badge>
                        )}
                      </div>
                      <p className="text-secondary mb-3">{phase.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-secondary">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {phase.startDate} - {phase.endDate}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{phase.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{phase.team.length} team members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                    className="flex-shrink-0"
                  >
                    {expandedPhase === phase.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Phase Milestones - Always Visible in Overview */}
                {(viewMode === "overview" || expandedPhase === phase.id) && (
                  <div className="space-y-4">
                    {/* Milestones */}
                    <div>
                      <h4 className="font-semibold text-contrast-dark mb-3">
                        Key Milestones
                        {filters.searchTerm && filteredMilestones.length !== phase.milestones.length && (
                          <span className="text-sm font-normal text-secondary ml-2">
                            (showing {filteredMilestones.length} of {phase.milestones.length})
                          </span>
                        )}
                      </h4>
                      <div className="space-y-3">
                        {filteredMilestones.map((milestone, milestoneIndex) => (
                          <div key={milestone.id} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">{milestone.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h5 className="font-medium text-contrast-dark">{milestone.title}</h5>
                                <span className="text-xs text-secondary">{milestone.date}</span>
                              </div>
                              <p className="text-sm text-secondary mt-1">{milestone.description}</p>
                            </div>
                            <div className="flex-shrink-0">{getStatusIcon(milestone.status)}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {expandedPhase === phase.id && viewMode === "detailed" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral/30">
                        {/* Deliverables */}
                        <div>
                          <h4 className="font-semibold text-contrast-dark mb-3 flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Key Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-secondary">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Team Members */}
                        <div>
                          <h4 className="font-semibold text-contrast-dark mb-3 flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            Team Members
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.team.map((member, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className={`text-xs ${
                                  filters.teamMembers.includes(member)
                                    ? "bg-primary/10 border-primary text-primary"
                                    : ""
                                }`}
                              >
                                {member}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Timeline Summary */}
      {filteredPhases.length > 0 && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-contrast-dark mb-4">
              {totalPhases !== phases.length ? "Filtered Summary" : "Project Summary"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">{completedPhases}</div>
                <p className="text-sm text-secondary">Phases Completed</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {filteredPhases.reduce((acc, phase) => acc + phase.milestones.length, 0)}
                </div>
                <p className="text-sm text-secondary">Total Milestones</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {totalPhases > 0 ? Math.round((completedPhases / totalPhases) * 100) : 0}%
                </div>
                <p className="text-sm text-secondary">Progress</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {Array.from(new Set(filteredPhases.flatMap((p) => p.team))).length}
                </div>
                <p className="text-sm text-secondary">Team Members</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

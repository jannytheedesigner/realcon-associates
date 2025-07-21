"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Filter, X, CalendarIcon, Users, Building2, Search, RotateCcw } from "lucide-react"
import { format } from "date-fns"

export interface TimelineFilters {
  phaseTypes: string[]
  teamMembers: string[]
  dateRange: {
    from: Date | null
    to: Date | null
  }
  searchTerm: string
  status: string[]
}

interface TimelineFiltersProps {
  filters: TimelineFilters
  onFiltersChange: (filters: TimelineFilters) => void
  availablePhaseTypes: string[]
  availableTeamMembers: string[]
  availableStatuses: string[]
}

export function TimelineFiltersComponent({
  filters,
  onFiltersChange,
  availablePhaseTypes,
  availableTeamMembers,
  availableStatuses,
}: TimelineFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const updateFilters = (updates: Partial<TimelineFilters>) => {
    onFiltersChange({ ...filters, ...updates })
  }

  const clearAllFilters = () => {
    onFiltersChange({
      phaseTypes: [],
      teamMembers: [],
      dateRange: { from: null, to: null },
      searchTerm: "",
      status: [],
    })
  }

  const getActiveFilterCount = () => {
    let count = 0
    if (filters.phaseTypes.length > 0) count++
    if (filters.teamMembers.length > 0) count++
    if (filters.dateRange.from || filters.dateRange.to) count++
    if (filters.searchTerm) count++
    if (filters.status.length > 0) count++
    return count
  }

  const togglePhaseType = (phaseType: string) => {
    const newPhaseTypes = filters.phaseTypes.includes(phaseType)
      ? filters.phaseTypes.filter((t) => t !== phaseType)
      : [...filters.phaseTypes, phaseType]
    updateFilters({ phaseTypes: newPhaseTypes })
  }

  const toggleTeamMember = (member: string) => {
    const newTeamMembers = filters.teamMembers.includes(member)
      ? filters.teamMembers.filter((m) => m !== member)
      : [...filters.teamMembers, member]
    updateFilters({ teamMembers: newTeamMembers })
  }

  const toggleStatus = (status: string) => {
    const newStatuses = filters.status.includes(status)
      ? filters.status.filter((s) => s !== status)
      : [...filters.status, status]
    updateFilters({ status: newStatuses })
  }

  return (
    <div className="space-y-4">
      {/* Filter Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-wrap gap-2 items-center">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary" />
            <Input
              placeholder="Search phases or milestones..."
              value={filters.searchTerm}
              onChange={(e) => updateFilters({ searchTerm: e.target.value })}
              className="pl-10 w-64"
            />
          </div>

          {/* Advanced Filters Toggle */}
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="relative">
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {getActiveFilterCount() > 0 && (
                  <Badge className="ml-2 h-5 w-5 p-0 text-xs bg-primary text-white rounded-full">
                    {getActiveFilterCount()}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-6" align="start">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-contrast-dark">Filter Timeline</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-secondary hover:text-contrast-dark"
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Clear All
                  </Button>
                </div>

                {/* Phase Types Filter */}
                <div>
                  <label className="text-sm font-medium text-contrast-dark mb-3 flex items-center">
                    <Building2 className="h-4 w-4 mr-2" />
                    Phase Types
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availablePhaseTypes.map((type) => (
                      <Button
                        key={type}
                        variant={filters.phaseTypes.includes(type) ? "default" : "outline"}
                        size="sm"
                        onClick={() => togglePhaseType(type)}
                        className={
                          filters.phaseTypes.includes(type)
                            ? "bg-primary text-white"
                            : "border-primary/30 text-primary hover:bg-primary hover:text-white"
                        }
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="text-sm font-medium text-contrast-dark mb-3 block">Status</label>
                  <div className="flex flex-wrap gap-2">
                    {availableStatuses.map((status) => (
                      <Button
                        key={status}
                        variant={filters.status.includes(status) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleStatus(status)}
                        className={
                          filters.status.includes(status)
                            ? "bg-primary text-white"
                            : "border-primary/30 text-primary hover:bg-primary hover:text-white"
                        }
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Team Members Filter */}
                <div>
                  <label className="text-sm font-medium text-contrast-dark mb-3 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Team Members
                  </label>
                  <div className="max-h-32 overflow-y-auto space-y-2">
                    {availableTeamMembers.map((member) => (
                      <div key={member} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`member-${member}`}
                          checked={filters.teamMembers.includes(member)}
                          onChange={() => toggleTeamMember(member)}
                          className="rounded border-primary/30 text-primary focus:ring-primary"
                        />
                        <label htmlFor={`member-${member}`} className="text-sm text-secondary cursor-pointer">
                          {member}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Range Filter */}
                <div>
                  <label className="text-sm font-medium text-contrast-dark mb-3 flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Date Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {filters.dateRange.from ? format(filters.dateRange.from, "MMM dd, yyyy") : "From date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={filters.dateRange.from || undefined}
                          onSelect={(date) =>
                            updateFilters({
                              dateRange: { ...filters.dateRange, from: date || null },
                            })
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {filters.dateRange.to ? format(filters.dateRange.to, "MMM dd, yyyy") : "To date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={filters.dateRange.to || undefined}
                          onSelect={(date) =>
                            updateFilters({
                              dateRange: { ...filters.dateRange, to: date || null },
                            })
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Quick Filter Presets */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateFilters({ status: ["completed"] })}
            className="border-green-200 text-green-700 hover:bg-green-50"
          >
            Completed Only
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateFilters({ status: ["in-progress"] })}
            className="border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            In Progress
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateFilters({ phaseTypes: ["Planning & Design Phase", "Construction & Fit-out"] })}
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            Key Phases
          </Button>
        </div>
      </div>

      {/* Active Filters Display */}
      {getActiveFilterCount() > 0 && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-contrast-dark">Active Filters:</span>
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-6 px-2 text-xs">
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.searchTerm && (
                <Badge variant="outline" className="bg-white">
                  Search: "{filters.searchTerm}"
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => updateFilters({ searchTerm: "" })} />
                </Badge>
              )}
              {filters.phaseTypes.map((type) => (
                <Badge key={type} variant="outline" className="bg-white">
                  Phase: {type}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => togglePhaseType(type)} />
                </Badge>
              ))}
              {filters.status.map((status) => (
                <Badge key={status} variant="outline" className="bg-white">
                  Status: {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => toggleStatus(status)} />
                </Badge>
              ))}
              {filters.teamMembers.map((member) => (
                <Badge key={member} variant="outline" className="bg-white">
                  Team: {member}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => toggleTeamMember(member)} />
                </Badge>
              ))}
              {(filters.dateRange.from || filters.dateRange.to) && (
                <Badge variant="outline" className="bg-white">
                  Date: {filters.dateRange.from ? format(filters.dateRange.from, "MMM dd") : "Start"} -{" "}
                  {filters.dateRange.to ? format(filters.dateRange.to, "MMM dd") : "End"}
                  <X
                    className="h-3 w-3 ml-1 cursor-pointer"
                    onClick={() => updateFilters({ dateRange: { from: null, to: null } })}
                  />
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

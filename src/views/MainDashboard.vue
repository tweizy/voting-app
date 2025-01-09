<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-12 text-center text-gray-800 tracking-tight">
        Welcome to EventVote
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <router-link
          to="/dashboard/all-events"
          class="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
          <div class="relative flex flex-col items-center text-center space-y-4">
            <CalendarIcon class="h-16 w-16 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
            <h2 class="text-2xl font-bold text-gray-800">All Events</h2>
            <p class="text-gray-600 max-w-sm">Browse and vote on community events. Your voice matters!</p>
            <span class="inline-flex items-center text-blue-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
              View Events
              <ArrowRightIcon class="h-4 w-4 ml-2" />
            </span>
          </div>
        </router-link>

        <router-link
          to="/dashboard/add-event"
          class="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
          <div class="relative flex flex-col items-center text-center space-y-4">
            <PlusCircleIcon class="h-16 w-16 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
            <h2 class="text-2xl font-bold text-gray-800">Create Event</h2>
            <p class="text-gray-600 max-w-sm">Start a new event and gather community feedback.</p>
            <span class="inline-flex items-center text-emerald-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
              Create Now
              <ArrowRightIcon class="h-4 w-4 ml-2" />
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { CalendarIcon, PlusCircleIcon } from "@heroicons/vue/24/outline";

export default {
  name: "MainDashboard",
  components: { CalendarIcon, PlusCircleIcon },
};
</script>
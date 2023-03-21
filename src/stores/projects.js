import { defineStore } from 'pinia'

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: [],
    sortKey: 'name',
    reverse: false
  }),

  actions: {
    async loadProjects() {
      const response = await fetch(
        `https://crm-project-c11ac-default-rtdb.europe-west1.firebasedatabase.app/projects.json`
      )
      const responseData = await response.json()
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch data!')
        throw error
      } else {
        const projects = []
        for (const key in responseData) {
          const project = {
            projectName: responseData[key].projectName,
            projectDoorNo: responseData[key].projectDoorNo,
            furnitureStatus: responseData[key].furnitureStatus,
            electricityNo: responseData[key].electricityNo,
            waterNo: responseData[key].waterNo,
            rentPrice: responseData[key].rentPrice,
            rentCurrency: responseData[key].rentCurrency,
            maintenanceFee: responseData[key].maintenanceFee,
            maintenanceFeeCurrency: responseData[key].maintenanceFeeCurrency,
            deposit: responseData[key].deposit,
            depositCurrency: responseData[key].depositCurrency,
            rentalPeriod: responseData[key].rentalPeriod,
            contractStart: responseData[key].contractStart,
            contractEnd: responseData[key].contractEnd,
            landlordName: responseData[key].landlordName,
            landlordPhone: responseData[key].landlordPhone,
            landlordEmail: responseData[key].landlordEmail,
            landlordId: responseData[key].landlordId,
            bankAccount: responseData[key].bankAccount,
            documents: responseData[key].documents,
            tenant: responseData[key].tenant,
            keyStatus: responseData[key].keyStatus,
            waterCard: responseData[key].waterCard,
            elevatorCard: responseData[key].elevatorCard,
            electricityDebt: responseData[key].electricityDebt,
            waterDebt: responseData[key].waterDebt
          }
          projects.push(project)
        }
        this.projects = projects
      }
    },
    sortBy(key) {
      if (this.sortKey === key) {
        this.reverse = !this.reverse
      } else {
        this.sortKey = key
        this.reverse = false
      }
    }
  },

  getters: {
    sortedProjects: (state) => {
      const key = state.sortKey
      const reverse = state.reverse ? -1 : 1
      return state.projects.sort((a, b) => {
        const x = (a[key] || '').toString().toLowerCase()
        const y = (b[key] || '').toString().toLowerCase()
        return reverse * ((x > y) - (y > x))
      })
    }
  }
})

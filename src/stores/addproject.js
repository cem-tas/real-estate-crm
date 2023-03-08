import { defineStore } from 'pinia'

export const useAddProjectStore = defineStore({
  id: 'addProject',
  state: () => ({
    // id: new Date().toISOString(),
    projectName: '',
    projectDoorNo: '',
    furnitureStatus: '',
    electricityNo: '',
    waterNo: '',
    rentPrice: null,
    rentCurrency: 'TRY',
    dues: null,
    duesCurrency: 'TRY',
    deposit: null,
    depositCurrency: 'TRY',
    rentalPeriod: '',
    contractStart: '',
    contractEnd: '',
    landlordName: '',
    landlordPhone: '',
    landlordEmail: '',
    landlordId: '',
    bankAccount: '',
    documents: [],
    tenant: { tenantName: '', tenantPhone: '', tenantEmail: '', tenantId: '' },
    keyStatus: '',
    waterCard: '',
    elevatorCard: '',
    electricityDebt: null,
    waterDebt: null
  }),

  getters: {
    ttLandlordName: (state) => {
      return state.elevatorCard
    }
  },

  actions: {
    async addProject() {
      const newProject = {
        projectName: this.projectName,
        projectDoorNo: this.projectDoorNo,
        furnitureStatus: this.furnitureStatus,
        electricityNo: this.electricityNo,
        waterNo: this.waterNo,
        rentPrice: this.rentPrice,
        rentCurrency: this.rentCurrency,
        dues: this.dues,
        duesCurrency: this.duesCurrency,
        deposit: this.deposit,
        depositCurrency: this.depositCurrency,
        rentalPeriod: this.rentalPeriod,
        contractStart: this.contractStart,
        contractEnd: this.contractEnd,
        landlordName: this.landlordName,
        landlordPhone: this.landlordPhone,
        landlordEmail: this.landlordEmail,
        landlordId: this.landlordId,
        bankAccount: this.bankAccount,
        documents: this.documents,
        tenant: { tenantName: this.tenant.tenantName, tenantPhone: this.tenant.tenantPhone, tenantEmail: this.tenant.tenantEmail, tenantId: this.tenant.tenantId },
        keyStatus: this.keyStatus,
        waterCard: this.waterCard,
        elevatorCard: this.elevatorCard,
        electricityDebt: this.electricityDebt,
        waterDebt: this.waterDebt
      }
      const response = await fetch(
        `https://crm-project-c11ac-default-rtdb.europe-west1.firebasedatabase.app/projects.json`,
        {
          method: 'POST',
          body: JSON.stringify(newProject)
        }
      )

      const responseData = await response.json()

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to register new project data! Try again.'
        )
        throw error
      }
    }
  }
})

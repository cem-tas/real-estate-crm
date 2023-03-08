import { defineStore } from 'pinia'

export const useAddProjectStore = defineStore({
  id: 'addProject',
  state: () => ({
    // id: new Date().toISOString(),
    projectName: '',
    projectType: null,
    projectDoorNo: '',
    projectFurnish: null,
    projectElectricityNo: '',
    projectWaterNo: '',
    projectCurrency: null,
    projectMaintananceFee: null,
    projectDepositFee: null,
    projectPrice: null,
    projectLendPeriod: '',
    projectContractStart: null,
    projectContactEnd: null,
    llordName: '',
    llordPhone: '',
    llEmail: '',
    llPassport: '',
    llBankNo: '',
    documents: [],
    tenant: {
      ttName: '',
      ttPhone: '',
      ttEmail: '',
      ttPassport: ''
    },
    key: null,
    waterCard: null,
    elevatorCard: null,
    outdoorCard: null,
    electricityBill: null,
    waterBill: null,
    maintananceBill: null
  }),

  getters: {
    ttLandlordName: (state) => {
      return state.landlord.llordName
    }
  },

  actions: {
    async addProject() {
      const newProject = {
        id: crypto.randomUUID(),
        projectName: this.projectName,
        projectType: this.projectType,
        projectDoorNo: this.projectDoorNo,
        projectFurnish: this.projectFurnish,
        projectElectricityNo: this.projectElectricityNo,
        projectWaterNo: this.projectWaterNo,
        projectCurrency: this.projectCurrency,
        projectMaintananceFee: this.projectMaintananceFee,
        projectDepositFee: this.projectDepositFee,
        projectPrice: this.projectPrice,
        projectLendPeriod: this.projectLendPeriod,
        projectContractStart: this.projectContractStart,
        projectContactEnd: this.projectContactEnd,
        llordName: this.llordName,
        llordPhone: this.llordPhone,
        llEmail: this.llEmail,
        llPassport: this.llPassport,
        llBankNo: this.llBankNo,
        documents: this.documents,
        tenant: this.tenant,
        key: this.key,
        waterCard: this.waterCard,
        elevatorCard: this.elevatorCard,
        outdoorCard: this.outdoorCard,
        electricityBill: this.electricityBill,
        waterBill: this.waterBill,
        maintananceBill: this.maintananceBill
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
          responseData.message || 'Failed to register student data! Try again.'
        )
        throw error
      }
    }
  }
})

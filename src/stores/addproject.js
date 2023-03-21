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
    rentPrice: 0,
    rentCurrency: 'TRY',
    maintenanceFee: 0,
    maintenanceFeeCurrency: 'TRY',
    deposit: 0,
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
    electricityDebt: 0,
    waterDebt: 0
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
        maintenanceFee: this.maintenanceFee,
        maintenanceFeeCurrency: this.maintenanceFeeCurrency,
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
        tenant: {
          tenantName: this.tenant.tenantName,
          tenantPhone: this.tenant.tenantPhone,
          tenantEmail: this.tenant.tenantEmail,
          tenantId: this.tenant.tenantId
        },
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
      } else {
        this.projectName = ''
        this.projectDoorNo = ''
        this.furnitureStatus = ''
        this.electricityNo = ''
        this.waterNo = ''
        this.rentPrice = 0
        this.rentCurrency = 'TRY'
        this.maintenanceFee = 0
        this.maintenanceFeeCurrency = 'TRY'
        this.deposit = 0
        this.depositCurrency = 'TRY'
        this.rentalPeriod = ''
        this.contractStart = ''
        this.contractEnd = ''
        this.landlordName = ''
        this.landlordPhone = ''
        this.landlordEmail = ''
        this.landlordId = ''
        this.bankAccount = ''
        this.documents = []
        this.tenant = { tenantName: '', tenantPhone: '', tenantEmail: '', tenantId: '' }
        this.keyStatus = ''
        this.waterCard = ''
        this.elevatorCard = ''
        this.electricityDebt = 0
        this.waterDebt = 0
        this.$router.push({ name: 'projects' })
      }
    },
    fill() {
      this.projectName = 'Alasya Park'
      this.projectDoorNo = '12'
      this.furnitureStatus = 'Eşyalı'
      this.electricityNo = '123151'
      this.waterNo = '125123'
      this.rentPrice = 300
      this.rentCurrency = 'GBP'
      this.maintenanceFee = 200
      this.maintenanceFeeCurrency = 'GBP'
      this.deposit = 300
      this.depositCurrency = 'GBP'
      this.rentalPeriod = '6 Ay'
      this.contractStart = '2022-01-01'
      this.contractEnd = '2023-01-01'
      this.landlordName = 'Cemal Satici'
      this.landlordPhone = '533 55 55'
      this.landlordEmail = 'cem@denemed.com'
      this.landlordId = '210938109'
      this.bankAccount = 'TR091823901'
      this.documents = []
      this.tenant = {
        tenantName: 'Cenkal Alici',
        tenantPhone: '533 535 535',
        tenantEmail: 'cenk@denden.com',
        tenantId: '19823801'
      }
      this.keyStatus = 'Alındı'
      this.waterCard = 'Alındı'
      this.elevatorCard = 'Alındı'
      this.electricityDebt = 0
      this.waterDebt = 0
    },
    reset() {
      this.projectName = ''
      this.projectDoorNo = ''
      this.furnitureStatus = ''
      this.electricityNo = ''
      this.waterNo = ''
      this.rentPrice = 0
      this.rentCurrency = 'TRY'
      this.maintenanceFee = 0
      this.maintenanceFeeCurrency = 'TRY'
      this.deposit = 0
      this.depositCurrency = 'TRY'
      this.rentalPeriod = ''
      this.contractStart = ''
      this.contractEnd = ''
      this.landlordName = ''
      this.landlordPhone = ''
      this.landlordEmail = ''
      this.landlordId = ''
      this.bankAccount = ''
      this.documents = []
      this.tenant = { tenantName: '', tenantPhone: '', tenantEmail: '', tenantId: '' }
      this.keyStatus = ''
      this.waterCard = ''
      this.elevatorCard = ''
      this.electricityDebt = 0
      this.waterDebt = 0
    }
  }
})

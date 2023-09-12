<template>
  <div clas="page">
    <h2>Add Project</h2>
    <form class="add-project-form" @submit.prevent="store.addProject()">
      <div class="form-group">
        <label for="projectName">Proje Adı</label>
        <input type="text" id="projectName" v-model="store.projectName" required />
      </div>
      <div class="form-group">
        <label for="projectDoorNo">Proje Kapı No</label>
        <input type="text" id="projectDoorNo" v-model="store.projectDoorNo" required />
      </div>
      <div class="form-group">
        <label for="furnitureStatus">Eşya Durumu</label>
        <select id="furnitureStatus" v-model="store.furnitureStatus" required>
          <option value="Eşyalı">Eşyalı</option>
          <option value="Eşyasız">Eşyasız</option>
        </select>
      </div>
      <div class="form-group">
        <label for="electricityNo">Elektrik No</label>
        <input type="text" id="electricityNo" v-model="store.electricityNo" required />
      </div>
      <div class="form-group">
        <label for="waterNo">Su No</label>
        <input type="text" id="waterNo" v-model="store.waterNo" required />
      </div>
      <div class="form-group">
        <label for="rentPrice">Kira Fiyatı</label>
        <input type="number" id="rentPrice" v-model="store.rentPrice" required />
      </div>
      <div class="form-group">
        <label for="rentCurrency">Kira Para Birimi</label>
        <select id="rentCurrency" v-model="store.rentCurrency" required>
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EU">EU</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div class="form-group">
        <label for="maintenanceFee">Aidat</label>
        <input type="number" id="maintenanceFee" v-model="store.maintenanceFee" required />
      </div>
      <div class="form-group">
        <label for="maintenanceFeeCurrency">Aidat Para Birimi</label>
        <select id="maintenanceFeeCurrency" v-model="store.maintenanceFeeCurrency" required>
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EU">EU</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div class="form-group">
        <label for="depositAmount">Depozito</label>
        <input type="number" id="depositAmount" v-model="store.deposit" required />
      </div>
      <div class="form-group">
        <label for="depositCurrency">Depozito Para Birimi</label>
        <select id="depositCurrency" v-model="store.depositCurrency" required>
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EU">EU</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div class="form-group">
        <label for="rentalPeriod">Kiralama Süresi</label>
        <input
          id="rentalPeriod"
          v-model="store.rentalPeriod"
          type="text"
          class="form-control"
          placeholder="Örn: 12 ay"
          required
        />
      </div>
      <div class="form-group">
        <label for="contractStart">Kontrat Başlangıç</label>
        <input
          id="contractStart"
          v-model="store.contractStart"
          type="date"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="contractEnd">Kontrat Bitiş</label>
        <input
          id="contractEnd"
          v-model="store.contractEnd"
          type="date"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="landlordName">Ev Sahibi</label>
        <input
          id="landlordName"
          v-model="store.landlordName"
          type="text"
          class="form-control"
          placeholder="Ad Soyad"
          required
        />
      </div>
      <div class="form-group">
        <label for="landlordPhone">Telefon</label>
        <input
          id="landlordPhone"
          v-model="store.landlordPhone"
          type="text"
          class="form-control"
          placeholder="Örn: 05XXXXXXXXX"
          required
        />
      </div>
      <div class="form-group">
        <label for="landlordEmail">E-mail</label>
        <input
          id="landlordEmail"
          v-model="store.landlordEmail"
          type="email"
          class="form-control"
          placeholder="ornek@ornek.com"
          required
        />
      </div>
      <div class="form-group">
        <label for="landlordId">Kimlik / Pasaport No</label>
        <input
          id="landlordId"
          v-model="store.landlordId"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="bankAccount">Banka Numarası</label>
        <input
          id="bankAccount"
          v-model="store.bankAccount"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="documents">Dökümanlar</label>
        <input
          id="documents"
          v-on:change="store.documents"
          type="file"
          accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
          multiple
        />
      </div>
      <div class="form-group">
        <label for="tenantName">Kiracı Adı</label>
        <input
          id="tenantName"
          v-model="store.tenant.tenantName"
          type="text"
          class="form-control"
          placeholder="Ad Soyad"
          required
        />
      </div>
      <div class="form-group">
        <label for="tenantPhone">Kiracı Telefon</label>
        <input
          id="tenantPhone"
          v-model="store.tenant.tenantPhone"
          type="text"
          class="form-control"
          placeholder="Örn: 05XXXXXXXXX"
          required
        />
      </div>
      <div class="form-group">
        <label for="tenantEmail">Kiracı E-mail</label>
        <input
          id="tenantEmail"
          v-model="store.tenant.tenantEmail"
          type="email"
          class="form-control"
          placeholder="ornek@ornek.com"
          required
        />
      </div>
      <div class="form-group">
        <label for="tenantId">Kiracı Kimlik / Pasaport No</label>
        <input
          id="tenantId"
          v-model="store.tenant.tenantId"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="keyStatus">Anahtar</label>
        <select id="keyStatus" v-model="store.keyStatus" required>
          <option value="Alındı">Alındı</option>
          <option value="Alınmadı">Alınmadı</option>
          <option value="Kiracıda">Kiracıda</option>
        </select>
      </div>
      <div class="form-group">
        <label for="waterCard">Su Kartı</label>
        <select id="waterCard" v-model="store.waterCard" required>
          <option value="Alındı">Alındı</option>
          <option value="Alınmadı">Alınmadı</option>
          <option value="Kiracıda">Kiracıda</option>
        </select>
      </div>
      <div class="form-group">
        <label for="elevatorCard">Asansör Kartı</label>
        <select id="elevatorCard" v-model="store.elevatorCard" required>
          <option value="Alındı">Alındı</option>
          <option value="Alınmadı">Alınmadı</option>
          <option value="Kiracıda">Kiracıda</option>
        </select>
      </div>
      <div class="form-group">
        <label for="electricBill">Elektrik Borcu TRY</label>
        <input
          id="electricBill"
          v-model.number="store.electricityDebt"
          type="number"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="waterBill">Su Borcu TRY</label>
        <input
          id="waterBill"
          v-model.number="store.waterDebt"
          type="number"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Ekle</button>
      </div>
    </form>
    <button class="fill" @click="store.fill">Doldur</button>
    <button class="reset" @click="store.reset">Reset</button>
  </div>
</template>

<script setup>
import { useAddProjectStore } from '@/stores/addproject.js'

const store = useAddProjectStore()
</script>

<style>
.add-project-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.form-group {
  flex: 0 0 calc(33.33% - 10px);
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.fill {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #29d31a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.reset {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #d34e1a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type='submit'] {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #0069d9;
}
</style>

<!-- <style>
.add-project-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.form-group {
  flex: 0 0 calc(33.33% - 10px);
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0069d9;
}

</style> -->

<template>
    <div class='container'>
        <h1>Administrator Dashboard</h1>
        <div>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <td class="tdId">Id</td>
                        <td class="label">First Name</td>
                        <td class="label">Last Name</td>
                        <td class="label">Email</td>
                        <td class="label">Category</td>
                        <td class="label" style="color:Blue">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td class="tdIddata" v-if="user.id">{{user.id}}</td>
                        <td class="labeldata" v-if="user.firstname">{{user.firstname}}</td>
                        <td class="labeldata" v-if="user.lastname">{{user.lastname}}</td>
                        <td class="labeldata" v-if="user.email">{{user.email}}</td>
                        <td class="labeldata" v-if="user.category">{{user.category}}</td>
                        <td>
                            <button type="button" class="btn btn-danger" @click='showModalDelete = true, selectedUser = user.id'><i class="far fa-trash-alt"></i></button>
                            <button type="button" class="btn btn-primary" @click='showModalEdit = true, selectedUser = user.id'><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-success" @click='showModalAdd = true'><i class="fa fa-user-plus"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <DeleteUserModal v-if="showModalDelete" :userid="selectedUser"></DeleteUserModal>
            <addusermodal v-if='showModalAdd' @closeModal='item = null' />
            <EditUserModal v-if='showModalEdit' :userid="selectedUser"></EditUserModal>
        </div>
    </div>
</template>

<script>
import AddUserModal from '../components/AddUserModal.vue';
import axios from 'axios';
import DeleteUserModal from '../components/DeleteUserModal.vue';
import EditUserModal from '../components/EditUserModal.vue';

var baseURL = 'http://localhost:3000/'

export default {
    components: {
        "addusermodal": AddUserModal,
        "DeleteUserModal": DeleteUserModal,
        "EditUserModal": EditUserModal
    },
    data() {
        return {
            users: [],
            showModalAdd: false,
            showModalDelete: false,
            showModalEdit: false,
            selectedUser: 0,
        }
    },
    async mounted() {
        try {
            const res = await axios.get(baseURL + 'users');
            this.users = res.data;
        } catch (e) {
            console.error(e)
        }
    },
    methods: {
        /* async deleteUser(index) {
            await axios.delete
        } */
    }
}
</script>


<style scoped>

div{
    text-align: center;
    color: whitesmoke;
}
h1{
    color: #8c38ff;
    text-shadow: 3px 3px black;
}
table{
    width: 100% ;
    text-align: center;
}

.label {
    width: 20%;
    font-size: 1.8rem;
    color: #8c38ff;
    text-shadow: 1px 1px black;
}

.tdId{
    width: 5%;
    font-size: 1.8rem;
    color: #8c38ff;
    text-shadow: 1px 1px black;
}

.tdIddata{
    font-size: 1.2rem;
}

.labeldata{
    font-size: 1.2rem;
}

.btn {
    text-shadow: 1px 1px black;
    margin-right: 4px;
}

#btnadd{
    padding: 10px 30px;
    text-align: center;
    font-size: 20px;
    height: 50px;
}

</style>

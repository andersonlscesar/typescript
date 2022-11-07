/**
    Suponhamos que você tenha um aplicação que recebe dados de um back end ou algum lugar
    onde você não sabe certamente se um objeto ou propriedade está definido.
 */

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own Company' }
}

// Verificando se fetchedUserData existe, para então acessar job, e verificando se job existe, para então acessar title

console.log(fetchedUserData?.job?.title)
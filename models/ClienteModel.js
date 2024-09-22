const db = require('../config/db'); // Importe a configuração do banco de dados


const Cliente = {
  getAllClients: async () => {
    try {
      const [rows] = await db.query('SELECT * FROM Cliente');
      return rows;
    } catch (error) {
      throw error;
    }
  },


  createNewClient: async (nome, cpf) => {
    try {
      const [result] = await db.execute('INSERT INTO Cliente (nome, cpf) VALUES (?, ?)', [nome, cpf]);
      return { id: result.insertId, nome, cpf };
    } catch (error) {
      throw error;
    }
  },

  updateClient: async (id, nome, cpf) => {
    try {
      if (!id){
        throw new Error ("ID do cliente é obrigatório");
      }
      // ATUALIZAR O CLIENTE NO BANCO
      const[result] = await db.execute("UPDATE Client SET nome" + "= ?, cpf = ? WHERE id = ?" , [nome, cpf, id]
      )
      //VERIFICAR SE TEVE ALTERAÇÃO DE ALGUM REGISTRO 
      if(result.affectedRows === 0){
        throw new Error('Cliente não encontrado')
      }

      return {id, nome, cpf }

    } catch (error) {
      throw error;
      
    }
  }


};


module.exports = Cliente;
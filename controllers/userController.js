const express = require("express");
const { PrismaClient } = require('@prisma/client')
const app = express();

const prisma = new PrismaClient()

const getAll = async (req, res) => {
  console.log('asd');
  const users = await prisma.user.findMany()
    .then((result) => {
      res.json(result)
      console.log(result)
    })
    .catch((err) => {
      console.log('Erro: ' + err);
    });
  res.json(users)
  
}

module.exports = {
  getAll
}
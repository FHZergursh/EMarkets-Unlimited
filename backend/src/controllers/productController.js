import express from 'express';
import { sql } from '../db/db.js';



export const addProduct = async (req, res) => {
  try {
    const {name, imageurl, price, stock} = req.body

    if (!name || !price)
    {
      return res.status(400).json({success: false, message: "Missing required fields!"})
    }

    const created = await sql.query("INSERT INTO products(name, imageurl, price, stock) VALUES ($1, $2, $3, $4)", [name, imageurl, price, stock])

    return res.status(200).json({success: true, data: created})

  } catch (error) 
  {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const getAllProducts = async (req, res) => {
  try {
    
    const allProducts = await sql.query("SELECT * FROM products")

    return res.status(200).json({success: true, data: allProducts})

  } catch (error) 
  {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const getProduct = async (req, res) => {
  try {
    const {productid} = req.params

    if (!productid)
    {
      return res.status(400).json({success: false, message: "ID not provided!, "})
    }

    const product = await sql.query("SELECT * FROM products WHERE productid = $1", [productid])

    return res.status(200).json({success: true, data: product[0]})

  } catch (error) 
  {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const updateProduct = async (req, res) => {
  try {
    const {productid} = req.params
    const {name, imageurl, price, stock} = req.body

    
    const updated = await sql.query("UPDATE products SET name = $1, imageurl = $2, price = $3, stock = $4 WHERE productid = $5", [name, imageurl, price, stock, productid])

    return res.status(200).json({success: true, data: updated})

  } catch (error) 
  {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const {productid} = req.params
    
    const deleted = await sql.query("DELETE FROM products WHERE productid = $1", [productid])

    return res.status(200).json({success: true})

  } catch (error) 
  {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}
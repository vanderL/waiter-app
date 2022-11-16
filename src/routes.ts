import { Router } from 'express';

export const router = Router();

// List categories
router.get('/categories', (req, res) => {
  res.send('ok');
});
// Create category
router.post('/categories', (req, res) => {
  res.send('ok');
});
// List products
router.get('/products', (req, res) => {
  res.send('ok');
});
// Create product
router.post('/products', (req, res) => {
  res.send('ok');
});
// Get products by category
router.get('/categories/:id/products', (req, res) => {
  res.send('ok');
});
// List orders
router.get('/orders', (req, res) => {
  res.send('ok');
});
// Create order
router.post('/orders', (req, res) => {
  res.send('ok');
});
// Change order status
router.patch('/orders', (req, res) => {
  res.send('ok');
});

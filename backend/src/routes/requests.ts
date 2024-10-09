import { Router } from 'express';

// Initialize the router
const router = Router();

// Define a mock database
let requests: any[] = [];

// Get all requests
router.get('/', (req, res) => {
    res.json(requests);
});

// Create a new request
router.post('/', (req, res) => {
    const newRequest = { id: requests.length + 1, ...req.body };
    requests.push(newRequest);
    res.status(201).json(newRequest); // Return 201 Created status
});

// Update a request
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = requests.findIndex(r => r.id === parseInt(id));
    if (index !== -1) {
        requests[index] = { id: parseInt(id), ...req.body };
        res.json(requests[index]);
    } else {
        res.status(404).json({ error: 'Request not found' });
    }
});

// Delete a request
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    requests = requests.filter(r => r.id !== parseInt(id));
    res.json({ message: 'Request deleted' });
});

// Export the router
export { router as requestRoutes };

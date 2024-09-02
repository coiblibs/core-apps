import {   fetchInvestments ,fetchWithdrawals} from './func.js';

export default (router, { database }) => {
  router.get('/', (req, res) => res.send('Hello, World! sdf'));
  router.post('/user-add-invite', async (req, res) => { 

    // const results = await database("users").select("* ") 
    res.json({req,res});
  });
  router.get('/config/:id', async (req, res) => { 
    const results = await database("site_domains").select("* ") 
 
    res.json(results);
  });


  router.get('/user-stats/:id', async (req, res) => {
    const { id } = req.params;
    let results = {
      investments: {}, 
      withdrawals: {}
    }; 
    try {  
		results.investments = await fetchInvestments(database, id) 
		results.withdrawals = await fetchWithdrawals(database, id)  
    } catch (error) {
		console.error("Error fetching user stats:", error);
		res.status(500).json({ error });
		return;
    } 
    res.json(results);
  });
};
// filter[_and][1][site_id][theme_id][pages_id][_and][slug][_contains]
// filter[_and][1][site_id][theme_id][pages_id][slug][_eq]
// filter[_and][1][site_id][theme_id][_and][0][pages_id][slug][_eq]
// filter[_and][1][site_id][theme_id][pages_id][_and][0][slug][_eq]



// filter[_and][0][site_id][theme_id][pages_id][_and][0][slug][_eq]

// filter[_and][0][_and][1][domains_id][sites_id][theme_id][pages_id][slug][_contains]=%2F
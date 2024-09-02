// funcs.js
const calculateTotals = (items) => {
    const totals = {
      total_items: 0,
      total_usdt: 0,
      total_amount: 0,
    };
  
    const currencyTotals = {};
  
    items.forEach((item) => {
      const itemTotalItems = parseInt(item.total_items, 10);
      const itemTotalUsdt = parseFloat(item.total_usdt);
      const itemTotalAmount = parseFloat(item.total_amount);
  
      totals.total_items += isNaN(itemTotalItems) ? 0 : itemTotalItems;
      totals.total_usdt += isNaN(itemTotalUsdt) ? 0 : itemTotalUsdt;
      totals.total_amount += isNaN(itemTotalAmount) ? 0 : itemTotalAmount;
  
      if (!currencyTotals[item.currency]) {
        currencyTotals[item.currency] = {
          total_items: 0,
          total_usdt: 0,
          status: {
            completed: 0,
            waiting: 0,
            archived: 0,
          },
        };
      }
  
      const currencyTotalItems = parseInt(item.total_items, 10);
      const currencyTotalUsdt = parseFloat(item.total_usdt);
  
      currencyTotals[item.currency].total_items += isNaN(currencyTotalItems) ? 0 : currencyTotalItems;
      currencyTotals[item.currency].total_usdt += isNaN(currencyTotalUsdt) ? 0 : currencyTotalUsdt;
  
      if (item.status === 'completed') {
        currencyTotals[item.currency].status.completed += isNaN(currencyTotalUsdt) ? 0 : currencyTotalUsdt;
      } else if (item.status === 'waiting') {
        currencyTotals[item.currency].status.waiting += isNaN(currencyTotalUsdt) ? 0 : currencyTotalUsdt;
      } else if (item.status === 'archived') {
        currencyTotals[item.currency].status.archived += isNaN(currencyTotalUsdt) ? 0 : currencyTotalUsdt;
      }
    });
  
    return {
      all: totals,
      currency: currencyTotals,
    };
  };
  
  const fetch = async (table, database, userId) => {
    try {
      return await database(table)
        .select(
          database.raw('COUNT(id) AS total_items'),
          database.raw('SUM(usdt) AS total_usdt'),
          database.raw('SUM(amount) AS total_amount'),
          'account',
          'currency',
          'status',
          'user_add_balance'
        )
        .where({ user_id: userId })
        .groupBy('account', 'currency', 'status','user_add_balance');
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Hata tekrar fırlatılarak üst seviyede de yakalanabilir
    }
  };
  
  const fetchInvestments = async (database, userId) => {
    try {
      const items = await fetch('coin_investments', database, userId);
      return {
        totals: calculateTotals(items),
        items,
      };
    } catch (error) {
      console.error("Error in fetchInvestments:", error);
      return {
        totals: { all: {}, currency: {} },
        items: [],
      };
    }
  };
  const fetchWithdrawals = async (database, userId) => {
    try {
      const items = await fetch('coin_withdrawals', database, userId);
 
      return {
        totals: calculateTotals(items),
        items,
      };
    } catch (error) {
      console.error("Error in fetchWithdrawals:", error);
      return {
        totals: { all: {}, currency: {} },
        items: [],
      };
    }
  };

var e0 = (router, { database }) => {
  router.get('/', (req, res) => res.send('Hello, World! sdf'));
  router.post('/user-add-invite', async (req, res) => { 

    // const results = await database("users").select("* ") 
    res.json({req,res});
  });
  router.get('/config/:id', async (req, res) => { 
    const results = await database("site_domains").select("* "); 
 
    res.json(results);
  });


  router.get('/user-stats/:id', async (req, res) => {
    const { id } = req.params;
    let results = {
      investments: {}, 
      withdrawals: {}
    }; 
    try {  
		results.investments = await fetchInvestments(database, id); 
		results.withdrawals = await fetchWithdrawals(database, id);  
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

const hooks = [];const endpoints = [{name:'core-apps-endpoint',config:e0}];const operations = [];

export { endpoints, hooks, operations };

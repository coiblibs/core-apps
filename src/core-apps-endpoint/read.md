	const invest = await database('coin_investments')
		  .select([
			// Total counts and sums for all account types
			database.raw(`SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS total_completed_items`),
			database.raw(`SUM(CASE WHEN status = 'archived' THEN 1 ELSE 0 END) AS total_archived_items`),
			database.raw(`SUM(CASE WHEN status = 'waiting' THEN 1 ELSE 0 END) AS total_waiting_items`),
			database.raw(`SUM(CASE WHEN status = 'completed' THEN usdt ELSE 0 END) AS total_sum_completed_usdt`),
			database.raw(`SUM(CASE WHEN status = 'archived' THEN usdt ELSE 0 END) AS total_sum_archived_usdt`),
			database.raw(`SUM(CASE WHEN status = 'waiting' THEN usdt ELSE 0 END) AS total_sum_waiting_usdt`),
			// Basic account counts and sums
			database.raw(`SUM(CASE WHEN status = 'completed' AND account = 'basic' THEN 1 ELSE 0 END) AS total_basic_completed_items`),
			database.raw(`SUM(CASE WHEN status = 'archived' AND account = 'basic' THEN 1 ELSE 0 END) AS total_basic_archived_items`),
			database.raw(`SUM(CASE WHEN status = 'waiting' AND account = 'basic' THEN 1 ELSE 0 END) AS total_basic_waiting_items`),
			database.raw(`SUM(CASE WHEN status = 'completed' AND account = 'basic' THEN usdt ELSE 0 END) AS total_basic_sum_completed_usdt`),
			database.raw(`SUM(CASE WHEN status = 'archived' AND account = 'basic' THEN usdt ELSE 0 END) AS total_basic_sum_archived_usdt`),
			database.raw(`SUM(CASE WHEN status = 'waiting' AND account = 'basic' THEN usdt ELSE 0 END) AS total_basic_sum_waiting_usdt`),
			// Waiting account counts and sums
			database.raw(`SUM(CASE WHEN status = 'completed' AND account = 'waiting' THEN 1 ELSE 0 END) AS total_waiting_completed_items`),
			database.raw(`SUM(CASE WHEN status = 'archived' AND account = 'waiting' THEN 1 ELSE 0 END) AS total_waiting_archived_items`),
			database.raw(`SUM(CASE WHEN status = 'waiting' AND account = 'waiting' THEN 1 ELSE 0 END) AS total_waiting_waiting_items`),
			database.raw(`SUM(CASE WHEN status = 'completed' AND account = 'waiting' THEN usdt ELSE 0 END) AS total_waiting_sum_completed_usdt`),
			database.raw(`SUM(CASE WHEN status = 'archived' AND account = 'waiting' THEN usdt ELSE 0 END) AS total_waiting_sum_archived_usdt`),
			database.raw(`SUM(CASE WHEN status = 'waiting' AND account = 'waiting' THEN usdt ELSE 0 END) AS total_waiting_sum_waiting_usdt`),
			// Archived account counts and sums
			database.raw(`SUM(CASE WHEN status = 'completed' AND account = 'archived' THEN 1 ELSE 0 END) AS total_archived_completed_items`),
			database.raw(`SUM(CASE WHEN status = 'archived' AND account = 'archived' THEN 1 ELSE 0 END) AS total_archived_archived_items`),
			database.raw(`SUM(CASE WHEN status = 'waiting' AND account = 'archived' THEN 1 ELSE 0 END) AS total_archived_waiting_items`),
			database.raw(`SUM(CASE WHEN status = 'completed' AND account = 'archived' THEN usdt ELSE 0 END) AS total_archived_sum_completed_usdt`),
			database.raw(`SUM(CASE WHEN status = 'archived' AND account = 'archived' THEN usdt ELSE 0 END) AS total_archived_sum_archived_usdt`),
			database.raw(`SUM(CASE WHEN status = 'waiting' AND account = 'archived' THEN usdt ELSE 0 END) AS total_archived_sum_waiting_usdt`)
		  ])
		  .where({ user_id: id });
const sampleNutritionData = {
	dietPlan: {
		dailyIntake: {
			totalCalories: 3500,
			macros: { protein: '150 g', carbs: '500 g', fat: '100 g' },
		},
		meals: [
			{
				mealNumber: 1,
				instructions:
					'Blend together the rolled oats, banana, and Greek yogurt with some ice and a splash of milk to create a nutritious breakfast smoothie. This smoothie combines complex carbs from the oats, protein from the yogurt, and natural sugars and vitamins from the banana for a balanced start to the day.',
				ingredients: [
					{
						food: 'Rolled Oats',
						quantity: '1 cup',
						calories: 307,
						macros: { protein: '11 g', carbs: '54 g', fat: '5 g' },
					},
					{
						food: 'Banana',
						quantity: '1 medium',
						calories: 105,
						macros: {
							protein: '1.3 g',
							carbs: '27 g',
							fat: '0.3 g',
						},
					},
					{
						food: 'Greek Yogurt',
						quantity: '1 cup',
						calories: 220,
						macros: { protein: '20 g', carbs: '9 g', fat: '11 g' },
					},
				],
			},
			{
				mealNumber: 2,
				instructions:
					'For a high-protein lunch, prepare a chicken breast seasoned with spices of your choice. Serve with a side of quinoa and steamed broccoli for a fulfilling meal rich in protein, fibrous carbs, and essential nutrients.',
				ingredients: [
					{
						food: 'Chicken Breast',
						quantity: '200g',
						calories: 330,
						macros: { protein: '62 g', carbs: '0 g', fat: '7 g' },
					},
					{
						food: 'Quinoa',
						quantity: '1 cup cooked',
						calories: 222,
						macros: { protein: '8 g', carbs: '39 g', fat: '4 g' },
					},
					{
						food: 'Steamed Broccoli',
						quantity: '1 cup',
						calories: 55,
						macros: {
							protein: '3.7 g',
							carbs: '11 g',
							fat: '0.6 g',
						},
					},
				],
			},
			{
				mealNumber: 3,
				instructions:
					'Prepare a mixed bean salad with kidney beans, black beans, chickpeas, and a variety of fresh vegetables such as tomatoes, cucumbers, and bell peppers. Dress with olive oil and lemon juice for a refreshing and nutrient-dense dinner.',
				ingredients: [
					{
						food: 'Kidney Beans',
						quantity: '1 cup',
						calories: 225,
						macros: { protein: '15 g', carbs: '40 g', fat: '1 g' },
					},
					{
						food: 'Black Beans',
						quantity: '1 cup',
						calories: 227,
						macros: { protein: '15 g', carbs: '41 g', fat: '1 g' },
					},
					{
						food: 'Chickpeas',
						quantity: '1 cup',
						calories: 269,
						macros: { protein: '15 g', carbs: '45 g', fat: '4 g' },
					},
					{
						food: 'Mixed Vegetables',
						quantity: '2 cups',
						calories: 100,
						macros: { protein: '2 g', carbs: '20 g', fat: '1 g' },
					},
				],
			},
			{
				mealNumber: 4,
				instructions:
					'For a mid-day snack, enjoy a serving of mixed nuts and seeds with a piece of fruit for a quick energy boost and a dose of healthy fats.',
				ingredients: [
					{
						food: 'Mixed Nuts',
						quantity: '50g',
						calories: 300,
						macros: { protein: '7 g', carbs: '9 g', fat: '25 g' },
					},
					{
						food: 'Apple',
						quantity: '1 large',
						calories: 115,
						macros: {
							protein: '0.5 g',
							carbs: '30 g',
							fat: '0.3 g',
						},
					},
				],
			},
			{
				mealNumber: 5,
				instructions:
					'End your day with a protein-packed smoothie made from whey protein, almond milk, peanut butter, and cocoa powder. This delicious treat will satisfy your sweet tooth while still fitting perfectly into your nutrition goals.',
				ingredients: [
					{
						food: 'Whey Protein',
						quantity: '2 scoops',
						calories: 240,
						macros: { protein: '48 g', carbs: '8 g', fat: '2 g' },
					},
					{
						food: 'Almond Milk',
						quantity: '1 cup',
						calories: 60,
						macros: { protein: '1 g', carbs: '8 g', fat: '2.5 g' },
					},
					{
						food: 'Peanut Butter',
						quantity: '2 tablespoons',
						calories: 188,
						macros: { protein: '8 g', carbs: '6 g', fat: '16 g' },
					},
					{
						food: 'Cocoa Powder',
						quantity: '1 tablespoon',
						calories: 12,
						macros: { protein: '1 g', carbs: '3 g', fat: '0.7 g' },
					},
				],
			},
			{
				mealNumber: 6,
				instructions:
					' for an evening snack, opt for a simple yet nutritious option of cottage cheese topped with fresh berries. This light snack provides a mix of slow-digesting protein and antioxidants to ensure a well-rested night.',
				ingredients: [
					{
						food: 'Cottage Cheese',
						quantity: '1 cup',
						calories: 220,
						macros: { protein: '28 g', carbs: '6 g', fat: '10 g' },
					},
					{
						food: 'Fresh Berries',
						quantity: '0.5 cup',
						calories: 42,
						macros: {
							protein: '0.5 g',
							carbs: '10 g',
							fat: '0.3 g',
						},
					},
				],
			},
			{
				mealNumber: 7,
				instructions:
					'For a deep energy snack before a workout, prepare a homemade energy bar made with dates, oats, almonds, and a scoop of whey protein powder. This will give you both quick energy from the carbs and sustained energy from the proteins and fats.',
				ingredients: [
					{
						food: 'Dates',
						quantity: '100g',
						calories: 277,
						macros: {
							protein: '1.8 g',
							carbs: '75 g',
							fat: '0.2 g',
						},
					},
					{
						food: 'Oats',
						quantity: '50g',
						calories: 194,
						macros: { protein: '5 g', carbs: '33 g', fat: '3.5 g' },
					},
					{
						food: 'Almonds',
						quantity: '25g',
						calories: 144,
						macros: {
							protein: '5.2 g',
							carbs: '4.8 g',
							fat: '12.5 g',
						},
					},
					{
						food: 'Whey Protein Powder',
						quantity: '1 scoop',
						calories: 120,
						macros: { protein: '24 g', carbs: '4 g', fat: '1 g' },
					},
				],
			},
		],
	},
};

export default sampleNutritionData;
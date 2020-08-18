//export const pythoncourses =[];
export const pythoncourses =[
  {
    "title": "Introduction to Python",
    "description": "Master the basics of data analysis in Python. Expand your skillset by learning scientific computing with numpy.",
    "detailDescription": "Python is a general-purpose programming language that is becoming ever more popular for data science. Companies worldwide are using Python to harvest insights from their data and gain a competitive edge. Unlike other Python tutorials, this course focuses on Python specifically for data science. In our Introduction to Python course, you’ll learn about powerful ways to store and manipulate data, and helpful data science tools to begin conducting your own analyses. Start DataCamp’s online Python curriculum now.",
    "time": "4 hours",
    "chapters": [{
      "title": "Python Basics",
      "index": "1",
      "description": "An introduction to the basic concepts of Python. Learn how to use Python interactively and by using a script. Create your first variables and acquaint yourself with Python's basic data types.",
      "parts": ["Hello Python!", "The Python Interface", "When to use Python?", "Any comments?", "Python as a calculator", "Variables and Types", "Variable Assignment", "Calculations with variables", "Other variable types", "Guess the type", "Operations with other types", "Type conversion", "Can Python handle everything?"]
    }, {
      "title": "Functions and Packages",
      "index": "3",
      "description": "You'll learn how to use functions, methods, and packages to efficiently leverage the code that brilliant Python developers have written. The goal is to reduce the amount of code you need to solve challenging problems!",
      "parts": ["Functions", "Familiar functions", "Help!", "Multiple arguments", "Methods", "String Methods", "List Methods", "List Methods (2)", "Packages", "Import package", "Selective import", "Different ways of importing"]
    }, {
      "title": "Python Lists",
      "index": "2",
      "description": "Learn to store, access, and manipulate data in lists: the first step toward efficiently working with huge amounts of data.",
      "parts": ["Python Lists", "Create a list", "Create list with different types", "Select the valid list", "List of lists", "Subsetting Lists", "Subset and conquer", "Subset and calculate", "Slicing and dicing", "Slicing and dicing (2)", "Subsetting lists of lists", "Manipulating Lists", "Replace list elements", "Extend a list", "Delete list elements", "Inner workings of lists"]
    }, {
      "title": "NumPy",
      "index": "4",
      "description": "NumPy is a fundamental Python package to efficiently practice data science. Learn to work with powerful tools in the NumPy array, and get started with data exploration.",
      "parts": ["Numpy", "Your First NumPy Array", "Baseball players' height", "Baseball player's BMI", "Lightweight baseball players", "NumPy Side Effects", "Subsetting NumPy Arrays", "2D Numpy Arrays", "Your First 2D NumPy Array", "Baseball data in 2D form", "Subsetting 2D NumPy Arrays", "2D Arithmetic", "Numpy: Basic Statistics", "Average versus median", "Explore the baseball data", "Blend it all together"]
    }],
    "prerequistes": [],
    "tracks": ["Data Science for Everyone", "Machine Learning for Everyone", "Data Scientist with Python", "Python Programming"]
  },
  {
     "title":"Interactive Data Visualization with Bokeh",
     "description":"Learn how to create versatile and interactive data visualizations using Bokeh.",
     "detailDescription":"Bokeh is an interactive data visualization library for Python—and other languages—that targets modern web browsers for presentation. It can create versatile, data-driven graphics and connect the full power of the entire Python data science stack to create rich, interactive visualizations.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basic plotting with Bokeh\n        ",
           "index":"1",
           "description":"\n    This chapter provides an introduction to basic plotting with Bokeh. You will create your first plots, learn about different data formats Bokeh understands, and make visual customizations for selections and mouse hovering.\n  ",
           "parts":[
              "Plotting with glyphs",
              "What are glyphs?",
              "A simple scatter plot",
              "A scatter plot with different shapes",
              "Customizing your scatter plots",
              "Additional glyphs",
              "Lines",
              "Lines and markers",
              "Patches",
              "Data formats",
              "Plotting data from NumPy arrays",
              "Plotting data from Pandas DataFrames",
              "The Bokeh ColumnDataSource",
              "The Bokeh ColumnDataSource (continued)",
              "Customizing glyphs",
              "Selection and non-selection glyphs",
              "Hover glyphs",
              "Colormapping"
           ]
        },
        {
           "title":"\n          Layouts,  Interactions, and Annotations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to combine multiple Bokeh plots into different kinds of layouts on a page, how to easily link different plots together, and how to add annotations such as legends and hover tooltips.\n  ",
           "parts":[
              "Introduction to layouts",
              "Creating rows of plots",
              "Creating columns of plots",
              "Nesting rows and columns of plots",
              "Advanced layouts",
              "Investigating the layout API",
              "Creating gridded layouts",
              "Starting tabbed layouts",
              "Displaying tabbed layouts",
              "Linking plots together",
              "Linked axes",
              "Linked brushing",
              "Annotations and guides",
              "How to create legends",
              "Positioning and styling legends",
              "Hover tooltips for exposing details",
              "Adding a hover tooltip"
           ]
        },
        {
           "title":"\n          Building interactive apps with Bokeh\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Bokeh server applications allow you to connect all of the powerful Python libraries for data science and analytics, such as NumPy and pandas to create rich, interactive Bokeh visualizations. Learn about Bokeh's built-in widgets, how to add them to Bokeh documents alongside plots, and how to connect everything to real Python code using the Bokeh server.\n  ",
           "parts":[
              "Introducing the Bokeh Server",
              "Understanding Bokeh apps",
              "Using the current document",
              "Add a single slider",
              "Multiple sliders in one document",
              "Connecting sliders to plots",
              "Adding callbacks to sliders",
              "How to combine Bokeh models into layouts",
              "Learn about widget callbacks",
              "Updating plots from dropdowns",
              "Updating data sources from dropdown callbacks",
              "Synchronize two dropdowns",
              "Buttons",
              "Button widgets",
              "Button styles",
              "Hosting applications for wider audiences"
           ]
        },
        {
           "title":"\n          Putting It All Together! A Case Study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you'll build a more sophisticated Bokeh data exploration application from the ground up based on the famous Gapminder dataset.\n  ",
           "parts":[
              "Time to put it all together!",
              "Introducing the project dataset",
              "Some exploratory plots of the data",
              "Starting the app",
              "Beginning with just a plot",
              "Enhancing the plot with some shading",
              "Adding a slider to vary the year",
              "Customizing based on user input",
              "Adding more interactivity to the app",
              "Adding a hover tool",
              "Adding dropdowns to the app",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "pandas Foundations"
     ],
     "tracks":[
        "Data Visualization with Python"
     ]
  },
  {
     "title":"Intermediate Importing Data in Python",
     "description":"Improve your Python data importing skills and learn to work with web and API data.",
     "detailDescription":"As a data scientist, you will need to clean data, wrangle and munge it, visualize it, build predictive models and interpret these models. Before you can do so, however, you will need to know how to get data into Python. In the prequel to this course, you learned many ways to import data into Python: from flat files such as .txt and .csv; from files native to other software such as Excel spreadsheets, Stata, SAS, and MATLAB files; and from relational databases such as SQLite and PostgreSQL. In this course, you'll extend this knowledge base by learning to import data from the web and by pulling data from Application Programming Interfaces— APIs—such as the Twitter streaming API, which allows us to stream real-time tweets.",
     "time":"2 hours",
     "chapters":[
        {
           "title":"\n          Importing data from the Internet\n        ",
           "index":"1",
           "description":"\n    The web is a rich source of data from which you can extract various types of insights and findings. In this chapter, you will learn how to get data from the web, whether it is stored in files or in HTML. You'll also learn the basics of scraping and parsing web data.\n  ",
           "parts":[
              "Importing flat files  from the web",
              "Importing flat files from the web: your turn!",
              "Opening and reading flat files from the web",
              "Importing non-flat files from the web",
              "HTTP requests  to import files  from the web",
              "Performing HTTP requests in Python using urllib",
              "Printing HTTP request results in Python using urllib",
              "Performing HTTP requests in Python using requests",
              "Scraping the web  in Python",
              "Parsing HTML with BeautifulSoup",
              "Turning a webpage into data using BeautifulSoup: getting the text",
              "Turning a webpage into data using BeautifulSoup: getting the hyperlinks"
           ]
        },
        {
           "title":"\n          Interacting with APIs to import data from the web\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will gain a deeper understanding of how to import data from the web. You will learn the basics of extracting data from APIs, gain insight on the importance of APIs, and practice extracting data by diving into the OMDB and Library of Congress APIs.\n  ",
           "parts":[
              "Introduction to  APIs and JSONs",
              "Pop quiz: What exactly is a JSON?",
              "Loading and exploring a JSON",
              "Pop quiz: Exploring your JSON",
              "APIs and  interacting with  the world wide web",
              "Pop quiz: What's an API?",
              "API requests",
              "JSON–from the web to Python",
              "Checking out the Wikipedia API"
           ]
        },
        {
           "title":"\n          Diving  deep into the Twitter API\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will consolidate your knowledge of interacting with APIs in a deep dive into the Twitter streaming API. You'll learn how to stream real-time Twitter data, and how to analyze and visualize it.\n  ",
           "parts":[
              "The Twitter API and Authentication",
              "API Authentication",
              "Streaming tweets",
              "Load and explore your Twitter data",
              "Twitter data to DataFrame",
              "A little bit of Twitter text analysis",
              "Plotting your Twitter data",
              "Final Thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Importing Data in Python"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Analyst with Python",
        "Data Scientist with Python",
        "Importing & Cleaning Data with Python"
     ]
  },
  {
     "title":"Introduction to Databases in Python",
     "description":"In this course, you'll learn the basics of relational databases and how to interact with them.",
     "detailDescription":"In this course, you'll learn the basics of using SQL with Python. This will be useful because databases are ubiquitous and data scientists, analysts, and engineers must interact with them constantly. The Python SQL toolkit SQLAlchemy provides an accessible and intuitive way to query, build, and write to essential databases, including SQLite, MySQL, and PostgreSQL.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basics of Relational Databases\n        ",
           "index":"1",
           "description":"\n    In this chapter, you’ll get acquainted with the fundamentals of relational databases and the relational model for database management. You will learn how to connect to a database and interact with it by writing basic SQL queries, both in raw SQL as well as SQLAlchemy, which provides a Pythonic way of interacting with databases.\n  ",
           "parts":[
              "Introduction to Databases",
              "Relational model",
              "Connecting to your database",
              "Engines and connection strings",
              "Autoloading Tables from a database",
              "Viewing Table details",
              "Introduction to SQL queries",
              "Selecting data from a Table: raw SQL",
              "Selecting data from a Table with SQLAlchemy",
              "Handling a ResultSet",
              "Congratulations!"
           ]
        },
        {
           "title":"\n          Applying Filtering, Ordering and Grouping to Queries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will build on your database knowledge by writing more nuanced queries that allow you to filter, order, and count your data—all within the Pythonic framework provided by SQLAlchemy.\n  ",
           "parts":[
              "Filtering and targeting data",
              "Connecting to a PostgreSQL database",
              "Filter data selected from a Table - Simple",
              "Filter data selected from a Table - Expressions",
              "Filter data selected from a Table - Advanced",
              "Ordering query results",
              "Ordering by a single column",
              "Ordering in descending order by a single column",
              "Ordering by multiple columns",
              "Counting, summing, and grouping data",
              "Counting distinct data",
              "Count of records by state",
              "Determining the population sum by state",
              "SQLAlchemy and pandas for visualization",
              "ResultsSets and pandas DataFrames",
              "From SQLAlchemy results to a plot"
           ]
        },
        {
           "title":"\n          Advanced SQLAlchemy Queries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn to perform advanced—and incredibly useful—queries that enable you to interact with your data in powerful ways.\n  ",
           "parts":[
              "Calculating values in a query",
              "Connecting to a MySQL database",
              "Calculating a difference between two columns",
              "Determining the overall percentage of women",
              "SQL relationships",
              "Automatic joins with an established relationship",
              "Joins",
              "More practice with joins",
              "Working with hierarchical tables",
              "Using alias to handle same table joined queries",
              "Leveraging functions and group_bys with hierarchical data",
              "Handling large ResultSets",
              "Working on blocks of records"
           ]
        },
        {
           "title":"\n          Creating and Manipulating your own Databases\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapters, you interacted with existing databases and queried them in different ways. Now, you will learn how to build your own databases and keep them updated.\n  ",
           "parts":[
              "Creating databases and tables",
              "Creating tables with SQLAlchemy",
              "Constraints and data defaults",
              "Inserting data into a table",
              "Inserting a single row",
              "Inserting multiple records at once",
              "Loading a CSV into a table",
              "Updating data in a table",
              "Updating individual records",
              "Updating multiple records",
              "Correlated updates",
              "Deleting data from a database",
              "Deleting all the records from a table",
              "Deleting specific records",
              "Deleting a table completely"
           ]
        },
        {
           "title":"\n          Putting it all together\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Bring together all of the skills you acquired in the previous chapters to work on a real-life project. From connecting to a database and populating it, to reading and querying it.\n  ",
           "parts":[
              "Census case study",
              "Setup the engine and metadata",
              "Create the table to the database",
              "Populating the database",
              "Reading the data from the CSV",
              "Load data from a list into the Table",
              "Querying the database",
              "Determine the average age by population",
              "Determine the percentage of population by gender and state",
              "Determine the difference by state from the 2000 and 2008 censuses",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python",
        "Intermediate Python"
     ],
     "tracks":[
        "Data Analyst with Python",
        "Data Manipulation with Python"
     ]
  },
  {
     "title":"Intermediate Python",
     "description":"Level up your data science skills by creating visualizations using Matplotlib and manipulating DataFrames with pandas.",
     "detailDescription":"Learning Python is crucial for any aspiring data science practitioner. Learn to visualize real data with Matplotlib's functions and get acquainted with data structures such as the dictionary and the pandas DataFrame. After covering key concepts such as boolean logic, control flow, and loops in Python, you'll be ready to blend together everything you've learned to solve a case study using hacker statistics.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Matplotlib\n        ",
           "index":"1",
           "description":"\n    Data visualization is a key skill for aspiring data scientists. Matplotlib makes it easy to create meaningful and insightful plots. In this chapter, you’ll learn how to build various types of plots, and customize them to be more visually appealing and interpretable.\n  ",
           "parts":[
              "Basic plots with Matplotlib",
              "Line plot (1)",
              "Line Plot (2): Interpretation",
              "Line plot (3)",
              "Scatter Plot (1)",
              "Scatter plot (2)",
              "Histogram",
              "Build a histogram (1)",
              "Build a histogram (2): bins",
              "Build a histogram (3): compare",
              "Choose the right plot (1)",
              "Choose the right plot (2)",
              "Customization",
              "Labels",
              "Ticks",
              "Sizes",
              "Colors",
              "Additional Customizations",
              "Interpretation"
           ]
        },
        {
           "title":"\n          Dictionaries & Pandas\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn about the dictionary, an alternative to the Python list, and the pandas DataFrame, the de facto standard to work with tabular data in Python. You will get hands-on practice with creating and manipulating datasets, and you’ll learn how to access the information you need from these data structures.\n  ",
           "parts":[
              "Dictionaries, Part 1",
              "Motivation for dictionaries",
              "Create dictionary",
              "Access dictionary",
              "Dictionaries, Part 2",
              "Dictionary Manipulation (1)",
              "Dictionary Manipulation (2)",
              "Dictionariception",
              "Pandas, Part 1",
              "Dictionary to DataFrame (1)",
              "Dictionary to DataFrame (2)",
              "CSV to DataFrame (1)",
              "CSV to DataFrame (2)",
              "Pandas, Part 2",
              "Square Brackets (1)",
              "Square Brackets (2)",
              "loc and iloc (1)",
              "loc and iloc (2)",
              "loc and iloc (3)"
           ]
        },
        {
           "title":"\n          Logic, Control Flow and Filtering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Boolean logic is the foundation of decision-making in Python programs. Learn about different comparison operators, how to combine them with Boolean operators, and how to use the Boolean outcomes in control structures. You'll also learn to filter data in pandas DataFrames using logic.\n  ",
           "parts":[
              "Comparison Operators",
              "Equality",
              "Greater and less than",
              "Compare arrays",
              "Boolean Operators",
              "and, or, not (1)",
              "and, or, not (2)",
              "Boolean operators with Numpy",
              "if, elif, else",
              "Warmup",
              "if",
              "Add else",
              "Customize further: elif",
              "Filtering pandas DataFrames",
              "Driving right (1)",
              "Driving right (2)",
              "Cars per capita (1)",
              "Cars per capita (2)"
           ]
        },
        {
           "title":"\n          Loops\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    There are several techniques you can use to repeatedly execute Python code. While loops are like repeated if statements, the for loop iterates over all kinds of data structures. Learn all about them in this chapter.\n  ",
           "parts":[
              "while loop",
              "while: warming up",
              "Basic while loop",
              "Add conditionals",
              "for loop",
              "Loop over a list",
              "Indexes and values (1)",
              "Indexes and values (2)",
              "Loop over list of lists",
              "Loop Data Structures Part 1",
              "Loop over dictionary",
              "Loop over Numpy array",
              "Loop Data Structures Part 2",
              "Loop over DataFrame (1)",
              "Loop over DataFrame (2)",
              "Add column (1)",
              "Add column (2)"
           ]
        },
        {
           "title":"\n          Case Study: Hacker Statistics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will allow you to apply all the concepts you've learned in this course. You will use hacker statistics to calculate your chances of winning a bet. Use random number generators, loops, and Matplotlib to gain a competitive edge!\n  ",
           "parts":[
              "Random Numbers",
              "Random float",
              "Roll the dice",
              "Determine your next move",
              "Random Walk",
              "The next step",
              "How low can you go?",
              "Visualize the walk",
              "Distribution",
              "Simulate multiple walks",
              "Visualize all walks",
              "Implement clumsiness",
              "Plot the distribution",
              "Calculate the odds"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Machine Learning for Everyone",
        "Data Analyst with Python",
        "Data Scientist with Python",
        "Python Programming"
     ]
  },
  {
     "title":"Statistical Thinking in Python (Part 1)",
     "description":"Build the foundation you need to think statistically and to speak the language of your data.",
     "detailDescription":"After all of the hard work of acquiring data and getting them into a form you can work with, you ultimately want to make clear, succinct conclusions from them. This crucial last step of a data analysis pipeline hinges on the principles of statistical inference. In this course, you will start building the foundation you need to think statistically, speak the language of your data, and understand what your data is telling you. The foundations of statistical thinking took decades to build, but can be grasped much faster today with the help of computers. With the power of Python-based tools, you will rapidly get up-to-speed and begin thinking statistically by the end of this course.",
     "time":"3 hours",
     "chapters":[
        {
           "title":"\n          Graphical exploratory data analysis\n        ",
           "index":"1",
           "description":"\n    Before diving into sophisticated statistical inference techniques, you should first explore your data by plotting them and computing simple summary statistics. This process, called exploratory data analysis, is a crucial first step in statistical analysis of data.\n  ",
           "parts":[
              "Introduction to Exploratory Data Analysis",
              "Tukey's comments on EDA",
              "Advantages of graphical EDA",
              "Plotting a histogram",
              "Plotting a histogram of iris data",
              "Axis labels!",
              "Adjusting the number of bins in a histogram",
              "Plot all of your data: Bee swarm plots",
              "Bee swarm plot",
              "Interpreting a bee swarm plot",
              "Plot all of your data: ECDFs",
              "Computing the ECDF",
              "Plotting the ECDF",
              "Comparison of ECDFs",
              "Onward toward the whole story!"
           ]
        },
        {
           "title":"\n          Quantitative exploratory data analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will compute useful summary statistics, which serve to concisely describe salient features of a dataset with a few numbers.\n  ",
           "parts":[
              "Introduction to summary statistics: The sample mean and median",
              "Means and medians",
              "Computing means",
              "Percentiles, outliers, and box plots",
              "Computing percentiles",
              "Comparing percentiles to ECDF",
              "Box-and-whisker plot",
              "Variance and standard deviation",
              "Computing the variance",
              "The standard deviation and the variance",
              "Covariance and the Pearson correlation coefficient",
              "Scatter plots",
              "Variance and covariance by looking",
              "Computing the covariance",
              "Computing the Pearson correlation coefficient"
           ]
        },
        {
           "title":"\n          Thinking probabilistically-- Discrete variables\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Statistical inference rests upon probability. Because we can very rarely say anything meaningful with absolute certainty from data, we use probabilistic language to make quantitative statements about data. In this chapter, you will learn how to think probabilistically about discrete quantities: those that can only take certain values, like integers.\n  ",
           "parts":[
              "Probabilistic logic and statistical inference",
              "What is the goal of statistical inference?",
              "Why do we use the language of probability?",
              "Random number generators and hacker statistics",
              "Generating random numbers using the np.random module",
              "The np.random module and Bernoulli trials",
              "How many defaults might we expect?",
              "Will the bank fail?",
              "Probability distributions and stories: The Binomial distribution",
              "Sampling out of the Binomial distribution",
              "Plotting the Binomial PMF",
              "Poisson processes and the Poisson distribution",
              "Relationship between Binomial and Poisson distributions",
              "How many no-hitters in a season?",
              "Was 2015 anomalous?"
           ]
        },
        {
           "title":"\n          Thinking probabilistically-- Continuous variables\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It’s time to move onto continuous variables, such as those that can take on any fractional value. Many of the principles are the same, but there are some subtleties. At the end of this final chapter, you will be speaking the probabilistic language you need to launch into the inference techniques covered in the sequel to this course.\n  ",
           "parts":[
              "Probability density functions",
              "Interpreting PDFs",
              "Interpreting CDFs",
              "Introduction to the Normal distribution",
              "The Normal PDF",
              "The Normal CDF",
              "The Normal distribution: Properties and warnings",
              "Gauss and the 10 Deutschmark banknote",
              "Are the Belmont Stakes results Normally distributed?",
              "What are the chances of a horse matching or beating Secretariat's record?",
              "The Exponential distribution",
              "Matching a story and a distribution",
              "Waiting for the next Secretariat",
              "If you have a story, you can simulate it!",
              "Distribution of no-hitters and cycles",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Machine Learning for Everyone",
        "Data Scientist with Python",
        "Statistics Fundamentals with Python"
     ]
  },
  {
     "title":"Python Data Science Toolbox (Part 1)",
     "description":"Learn the art of writing your own functions in Python, as well as key concepts like scoping and error handling.",
     "detailDescription":"It's time to push forward and develop your Python chops even further. There are tons of fantastic functions in Python and its library ecosystem. However, as a data scientist, you'll constantly need to write your own functions to solve problems that are dictated by your data. You will learn the art of function writing in this first Python Data Science Toolbox course. You'll come out of this course being able to write your very own custom functions, complete with multiple parameters and multiple return values, along with default arguments and variable-length arguments. You'll gain insight into scoping in Python and be able to write lambda functions and handle errors in your function writing practice. And you'll wrap up each chapter by using your new skills to write functions that analyze Twitter DataFrames.",
     "time":"3 hours",
     "chapters":[
        {
           "title":"\n          Writing your own functions\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn how to write simple functions, as well as functions that accept multiple arguments and return multiple values. You'll also have the opportunity to apply these new skills to questions commonly encountered by data scientists.\n  ",
           "parts":[
              "User-defined functions",
              "Strings in Python",
              "Recapping built-in functions",
              "Write a simple function",
              "Single-parameter functions",
              "Functions that return single values",
              "Multiple parameters and return values",
              "Functions with multiple parameters",
              "A brief introduction to tuples",
              "Functions that return multiple values",
              "Bringing it all together",
              "Bringing it all together (1)",
              "Bringing it all together (2)",
              "Congratulations!"
           ]
        },
        {
           "title":"\n          Default arguments, variable-length arguments and scope\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn to write functions with default arguments so that the user doesn't always need to specify them, and variable-length arguments so they can pass an arbitrary number of arguments on to your functions. You'll also learn about the essential concept of scope.\n  ",
           "parts":[
              "Scope and user-defined functions",
              "Pop quiz on understanding scope",
              "The keyword global",
              "Python's built-in scope",
              "Nested functions",
              "Nested Functions I",
              "Nested Functions II",
              "The keyword nonlocal and nested functions",
              "Default and flexible arguments",
              "Functions with one default argument",
              "Functions with multiple default arguments",
              "Functions with variable-length arguments (*args)",
              "Functions with variable-length keyword arguments (**kwargs)",
              "Bringing it all together",
              "Bringing it all together (1)",
              "Bringing it all together (2)"
           ]
        },
        {
           "title":"\n          Lambda functions and error-handling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn about lambda functions, which allow you to write functions quickly and on the fly. You'll also practice handling errors in your functions, which is an essential skill. Then, apply your new skills to answer data science questions.\n  ",
           "parts":[
              "Lambda functions",
              "Pop quiz on lambda functions",
              "Writing a lambda function you already know",
              "Map() and lambda functions",
              "Filter() and lambda functions",
              "Reduce() and lambda functions",
              "Introduction to error handling",
              "Pop quiz about errors",
              "Error handling with try-except",
              "Error handling by raising an error",
              "Bringing it all together",
              "Bringing it all together (1)",
              "Bringing it all together (2)",
              "Bringing it all together (3)",
              "Bringing it all together: testing your error handling skills",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Machine Learning for Everyone",
        "Data Scientist with Python",
        "Python Programmer",
        "Python Programming"
     ]
  },
  {
     "title":"Python Data Science Toolbox (Part 2)",
     "description":"Continue to build your modern Data Science skills by learning about iterators and list comprehensions.",
     "detailDescription":"In this second Python Data Science Toolbox course, you'll continue to build your Python data science skills. First, you'll learn about iterators, objects you have already encountered in the context of for loops. You'll then learn about list comprehensions, which are extremely handy tools for all data scientists working in Python. You'll end the course by working through a case study in which you'll apply all the techniques you learned in both parts of this course.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Using iterators in PythonLand\n        ",
           "index":"1",
           "description":"\n    You'll learn all about iterators and iterables, which you have already worked with when writing for loops. You'll learn some handy functions that will allow you to effectively work with iterators. And you’ll finish the chapter with a use case that is pertinent to the world of data science and dealing with large amounts of data—in this case, data from Twitter that you will load in chunks using iterators.\n  ",
           "parts":[
              "Introduction to iterators",
              "Iterators vs Iterables",
              "Iterating over iterables (1)",
              "Iterating over iterables (2)",
              "Iterators as function arguments",
              "Playing with iterators",
              "Using enumerate",
              "Using zip",
              "Using * and zip to 'unzip'",
              "Using iterators to load large files into memory",
              "Processing large amounts of Twitter data",
              "Extracting information for large amounts of Twitter data",
              "Congratulations!"
           ]
        },
        {
           "title":"\n          List comprehensions and generators\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll build on your knowledge of iterators and be introduced to list comprehensions, which allow you to create complicated lists—and lists of lists—in one line of code! List comprehensions can dramatically simplify your code and make it more efficient, and will become a vital part of your Python data science toolbox. You'll then learn about generators, which are extremely helpful when working with large sequences of data that you may not want to store in memory, but instead generate on the fly.\n  ",
           "parts":[
              "List  comprehensions",
              "Write a basic list comprehension",
              "List comprehension over iterables",
              "Writing list comprehensions",
              "Nested list comprehensions",
              "Advanced comprehensions",
              "Using conditionals in comprehensions (1)",
              "Using conditionals in comprehensions (2)",
              "Dict comprehensions",
              "Introduction to generator expressions",
              "List comprehensions vs generators",
              "Write your own generator expressions",
              "Changing the output in generator expressions",
              "Build a generator",
              "Wrapping up comprehensions and generators.",
              "List comprehensions for time-stamped data",
              "Conditional list comprehensions for time-stamped data"
           ]
        },
        {
           "title":"\n          Bringing it all together!\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will allow you to apply your newly acquired skills toward wrangling and extracting meaningful information from a real-world dataset—the World Bank's World Development Indicators. You'll have the chance to write your own functions and list comprehensions as you work with iterators and generators to solidify your Python data science chops.\n  ",
           "parts":[
              "Welcome to the case study!",
              "Dictionaries for data science",
              "Writing a function to help you",
              "Using a list comprehension",
              "Turning this all into a DataFrame",
              "Using Python generators for streaming data",
              "Processing data in chunks (1)",
              "Writing a generator to load data in chunks (2)",
              "Writing a generator to load data in chunks (3)",
              "Using pandas' read_csv iterator for streaming data",
              "Writing an iterator to load data in chunks (1)",
              "Writing an iterator to load data in chunks (2)",
              "Writing an iterator to load data in chunks (3)",
              "Writing an iterator to load data in chunks (4)",
              "Writing an iterator to load data in chunks (5)",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 1)"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Machine Learning for Everyone",
        "Data Scientist with Python",
        "Python Programmer",
        "Python Programming"
     ]
  },
  {
     "title":"Introduction to Importing Data in Python",
     "description":"Learn to import data into Python from various sources, such as Excel, SQL, SAS and right from the web.",
     "detailDescription":"As a data scientist, you will need to clean data, wrangle and munge it, visualize it, build predictive models, and interpret these models. Before you can do so, however, you will need to know how to get data into Python. In this course, you'll learn the many ways to import data into Python: from flat files such as .txt and .csv; from files native to other software such as Excel spreadsheets, Stata, SAS, and MATLAB files; and from relational databases such as SQLite and PostgreSQL.",
     "time":"3 hours",
     "chapters":[
        {
           "title":"\n          Introduction and flat files\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn how to import data into Python from all types of flat files, which are a simple and prevalent form of data storage. You've previously learned how to use NumPy and pandas—you will learn how to use these packages to import flat files and customize your imports.\n  ",
           "parts":[
              "Welcome to the  course!",
              "Exploring your working directory",
              "Importing entire text files",
              "Importing text files line by line",
              "The importance of  flat files in  data science",
              "Pop quiz: examples of flat files",
              "Pop quiz: what exactly are flat files?",
              "Why we like flat files and the Zen of Python",
              "Importing flat files  using NumPy",
              "Using NumPy to import flat files",
              "Customizing your NumPy import",
              "Importing different datatypes",
              "Working with mixed datatypes (1)",
              "Working with mixed datatypes (2)",
              "Importing flat files  using pandas",
              "Using pandas to import flat files as DataFrames (1)",
              "Using pandas to import flat files as DataFrames (2)",
              "Customizing your pandas import",
              "Final thoughts  on data import"
           ]
        },
        {
           "title":"\n          Importing data from other file types\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You've learned how to import flat files, but there are many other file types you will potentially have to work with as a data scientist. In this chapter, you'll learn how to import data into Python from a wide array of important file types. These include pickled files, Excel spreadsheets, SAS and Stata files, HDF5 files, a file type for storing large quantities of numerical data, and MATLAB files.\n  ",
           "parts":[
              "Introduction to  other file types",
              "Not so flat any more",
              "Loading a pickled file",
              "Listing sheets in Excel files",
              "Importing sheets from Excel files",
              "Customizing your spreadsheet import",
              "Importing  SAS/Stata files  using pandas",
              "How to import SAS7BDAT",
              "Importing SAS files",
              "Using read_stata to import Stata files",
              "Importing Stata files",
              "Importing  HDF5 files",
              "Using File to import HDF5 files",
              "Using h5py to import HDF5 files",
              "Extracting data from your HDF5 file",
              "Importing  MATLAB files",
              "Loading .mat files",
              "The structure of .mat in Python"
           ]
        },
        {
           "title":"\n          Working with relational databases in Python\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to extract meaningful data from relational databases, an essential skill for any data scientist. You will learn about relational models, how to create SQL queries, how to filter and order your SQL records, and how to perform advanced queries by joining database tables.\n  ",
           "parts":[
              "Introduction to  relational  databases",
              "Pop quiz: The relational model",
              "Creating a  database engine  in Python",
              "Creating a database engine",
              "What are the tables in the database?",
              "Querying relational databases in Python",
              "The Hello World of SQL Queries!",
              "Customizing the Hello World of SQL Queries",
              "Filtering your database records using SQL's WHERE",
              "Ordering your SQL records with ORDER BY",
              "Querying relational databases directly  with pandas",
              "Pandas and The Hello World of SQL Queries!",
              "Pandas for more complex querying",
              "Advanced querying: exploiting table relationships",
              "The power of SQL lies in relationships between tables: INNER JOIN",
              "Filtering your INNER JOIN",
              "Final Thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Analyst with Python",
        "Data Scientist with Python",
        "Importing & Cleaning Data with Python"
     ]
  },
  {
     "title":"pandas Foundations",
     "description":"Learn how to use the industry-standard pandas library to import, build, and manipulate DataFrames.",
     "detailDescription":"pandas DataFrames are the most widely used in-memory representation of complex data collections within Python. Whether in finance, a scientific field, or data science, familiarity with pandas is essential. This course teaches you to work with real-world datasets containing both string and numeric data, often structured around time series. You will learn powerful analysis, selection, and visualization techniques in this course.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Data ingestion & inspection\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will be introduced to pandas DataFrames. You will use pandas to import and inspect a variety of datasets, ranging from population data obtained from the World Bank to monthly stock data obtained via Yahoo Finance. You will also practice building DataFrames from scratch and become familiar with the intrinsic data visualization capabilities of pandas.\n  ",
           "parts":[
              "Review of pandas DataFrames",
              "Inspecting your data",
              "DataFrame data types",
              "NumPy and pandas working together",
              "Building DataFrames from scratch",
              "Zip lists to build a DataFrame",
              "Labeling your data",
              "Building DataFrames with broadcasting",
              "Importing & exporting data",
              "Reading a flat file",
              "Delimiters, headers, and extensions",
              "Plotting with pandas",
              "Plotting series using pandas",
              "Plotting DataFrames"
           ]
        },
        {
           "title":"\n          Exploratory data analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you’ve learned how to ingest and inspect your data, you will next learn how to explore it visually and quantitatively. This process, known as exploratory data analysis (EDA), is a crucial component of any data science project. pandas has powerful methods that help with statistical and visual EDA. In this chapter, you will learn how and when to apply these techniques.\n  ",
           "parts":[
              "Visual exploratory data analysis",
              "pandas line plots",
              "pandas scatter plots",
              "pandas box plots",
              "pandas hist, pdf and cdf",
              "Statistical exploratory data analysis",
              "Fuel efficiency",
              "Bachelor's degrees awarded to women",
              "Median vs mean",
              "Quantiles",
              "Standard deviation of temperature",
              "Separating populations",
              "Filtering and counting",
              "Separate and summarize",
              "Separate and plot"
           ]
        },
        {
           "title":"\n          Time series in pandas\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to manipulate and visualize time series data using pandas. You will become familiar with concepts such as upsampling, downsampling, and interpolation. You will practice using method chaining to efficiently filter your data and perform time series analyses. From stock prices to flight timings, time series data can be found in a wide variety of domains, and being able to effectively work with it is an invaluable skill.\n  ",
           "parts":[
              "Indexing time series",
              "Reading and slicing times",
              "Creating and using a DatetimeIndex",
              "Partial string indexing and slicing",
              "Reindexing the Index",
              "Resampling time series data",
              "Resampling and frequency",
              "Separating and resampling",
              "Rolling mean and frequency",
              "Resample and roll with it",
              "Manipulating time series data",
              "Method chaining and filtering",
              "Missing values and interpolation",
              "Time zones and conversion",
              "Time series  visualization",
              "Plotting time series, datetime indexing",
              "Plotting date ranges, partial indexing"
           ]
        },
        {
           "title":"\n          Case Study - Sunlight in Austin\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Working with real-world weather and climate data, this chapter will allow you to apply all of the skills you have acquired in this course. You will use pandas to manipulate the data into a usable form for analysis and systematically explore it using the techniques you’ve learned. \n  ",
           "parts":[
              "Reading and cleaning the data",
              "What method should we use to read the data?",
              "Reading in a data file",
              "Re-assigning column names",
              "Cleaning and tidying datetime data",
              "Cleaning the numeric columns",
              "Statistical exploratory data analysis",
              "Signal min, max, median",
              "Signal variance",
              "Sunny or cloudy",
              "Visual exploratory data analysis",
              "Weekly average temperature and visibility",
              "Daily hours of clear sky",
              "Heat or humidity",
              "Probability of high temperatures",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Statistical Thinking in Python (Part 2)",
     "description":"Learn to perform the two key tasks in statistical inference: parameter estimation and hypothesis testing.",
     "detailDescription":"After completing Statistical Thinking in Python (Part 1), you have the probabilistic mindset and foundational hacker stats skills to dive into data sets and extract useful information from them. In this course, you will do just that, expanding and honing your hacker stats toolbox to perform the two key tasks in statistical inference, parameter estimation and hypothesis testing. You will work with real data sets as you learn, culminating with analysis of measurements of the beaks of the Darwin's famous finches. You will emerge from this course with new knowledge and lots of practice under your belt, ready to attack your own inference problems out in the world.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Parameter estimation by optimization\n        ",
           "index":"1",
           "description":"\n    When doing statistical inference, we speak the language of probability. A probability distribution that describes your data has parameters. So, a major goal of statistical inference is to estimate the values of these parameters, which allows us to concisely and unambiguously describe our data and draw conclusions from it. In this chapter, you will learn how to find the optimal parameters, those that best describe your data.\n  ",
           "parts":[
              "Optimal parameters",
              "How often do we get no-hitters?",
              "Do the data follow our story?",
              "How is this parameter optimal?",
              "Linear regression by least squares",
              "EDA of literacy/fertility data",
              "Linear regression",
              "How is it optimal?",
              "The importance of EDA: Anscombe's quartet",
              "The importance of EDA",
              "Linear regression on appropriate Anscombe data",
              "Linear regression on all Anscombe data"
           ]
        },
        {
           "title":"\n          Bootstrap confidence intervals\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    To \"pull yourself up by your bootstraps\" is a classic idiom meaning that you achieve a difficult task by yourself with no help at all. In statistical inference, you want to know what would happen if you could repeat your data acquisition an infinite number of times. This task is impossible, but can we use only the data we actually have to get close to the same result as an infinitude of experiments? The answer is yes! The technique to do it is aptly called bootstrapping. This chapter will introduce you to this extraordinarily powerful tool.\n  ",
           "parts":[
              "Generating bootstrap replicates",
              "Getting the terminology down",
              "Bootstrapping by hand",
              "Visualizing bootstrap samples",
              "Bootstrap confidence intervals",
              "Generating many bootstrap replicates",
              "Bootstrap replicates of the mean and the SEM",
              "Confidence intervals of rainfall data",
              "Bootstrap replicates of other statistics",
              "Confidence interval on the rate of no-hitters",
              "Pairs bootstrap",
              "A function to do pairs bootstrap",
              "Pairs bootstrap of literacy/fertility data",
              "Plotting bootstrap regressions"
           ]
        },
        {
           "title":"\n          Introduction to hypothesis testing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You now know how to define and estimate parameters given a model. But the question remains: how reasonable is it to observe your data if a model is true? This question is addressed by hypothesis tests. They are the icing on the inference cake. After completing this chapter, you will be able to carefully construct and test hypotheses using hacker statistics.\n  ",
           "parts":[
              "Formulating and simulating a hypothesis",
              "Generating a permutation sample",
              "Visualizing permutation sampling",
              "Test statistics and p-values",
              "Test statistics",
              "What is a p-value?",
              "Generating permutation replicates",
              "Look before you leap: EDA before hypothesis testing",
              "Permutation test on frog data",
              "Bootstrap hypothesis tests",
              "A one-sample bootstrap hypothesis test",
              "A two-sample bootstrap hypothesis test for difference of means"
           ]
        },
        {
           "title":"\n          Hypothesis test examples\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    As you saw from the last chapter, hypothesis testing can be a bit tricky. You need to define the null hypothesis, figure out how to simulate it, and define clearly what it means to be \"more extreme\" in order to compute the p-value. Like any skill, practice makes perfect, and this chapter gives you some good practice with hypothesis tests.\n  ",
           "parts":[
              "A/B testing",
              "The vote for the Civil Rights Act in 1964",
              "What is equivalent?",
              "A time-on-website analog",
              "What should you have done first?",
              "Test of correlation",
              "Simulating a null hypothesis concerning correlation",
              "Hypothesis test on Pearson correlation",
              "Do neonicotinoid insecticides have unintended consequences?",
              "Bootstrap hypothesis test on bee sperm counts"
           ]
        },
        {
           "title":"\n          Putting it all together: a case study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Every year for the past 40-plus years, Peter and Rosemary Grant have gone to the Galápagos island of Daphne Major and collected data on Darwin's finches. Using your skills in statistical inference, you will spend this chapter with their data, and witness first hand, through data, evolution in action. It's an exhilarating way to end the course!\n  ",
           "parts":[
              "Finch beaks and the need for statistics",
              "EDA of beak depths of Darwin's finches",
              "ECDFs of beak depths",
              "Parameter estimates of beak depths",
              "Hypothesis test: Are beaks deeper in 2012?",
              "Variation in beak shapes",
              "EDA of beak length and depth",
              "Linear regressions",
              "Displaying the linear regression results",
              "Beak length to depth ratio",
              "How different is the ratio?",
              "Calculation of heritability",
              "EDA of heritability",
              "Correlation of offspring and parental data",
              "Pearson correlation of offspring and parental data",
              "Measuring heritability",
              "Is beak depth heritable at all in G. scandens?",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Statistical Thinking in Python (Part 1)"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Scientist with Python",
        "Statistics Fundamentals with Python"
     ]
  },
  {
     "title":"Merging DataFrames with pandas",
     "description":"This course is all about the act of combining, or merging, DataFrames, an essential part your Data Scientist's toolbox.",
     "detailDescription":"As a data scientist, you'll often find that the data you need is not in a single file. It may be spread across a number of text files, spreadsheets, or databases. You’ll want to be able to import the data you’re interested in as a collection of DataFrames and combine them to answer your central questions. This course is all about the act of combining—or merging—DataFrames, an essential part of any data scientist's toolbox. You'll hone your pandas skills by learning how to organize, reshape, and aggregate multiple datasets to answer your specific questions.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Preparing data\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn about different techniques you can use to import multiple files into DataFrames. Having imported your data into individual DataFrames, you'll then learn how to share information between DataFrames using their indexes. Understanding how indexes work is essential to merging DataFrames, which you’ll learn later in the course.\n  ",
           "parts":[
              "Reading multiple data files",
              "Reading DataFrames from multiple files",
              "Reading DataFrames from multiple files in a loop",
              "Combining DataFrames from multiple data files",
              "Reindexing DataFrames",
              "Sorting DataFrame with the Index & columns",
              "Reindexing DataFrame from a list",
              "Reindexing using another DataFrame Index",
              "Arithmetic with Series & DataFrames",
              "Adding unaligned DataFrames",
              "Broadcasting in arithmetic formulas",
              "Computing percentage growth of GDP",
              "Converting currency of stocks"
           ]
        },
        {
           "title":"\n          Concatenating data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You'll learn how to perform database-style operations to combine DataFrames. In particular, you'll learn about appending and concatenating DataFrames while working with a variety of real-world datasets.\n  ",
           "parts":[
              "Appending and concatenating Series",
              "Appending Series with nonunique Indices",
              "Appending pandas Series",
              "Concatenating pandas Series along row axis",
              "Appending and concatenating DataFrames",
              "Appending DataFrames with ignore_index",
              "Concatenating pandas DataFrames along column axis",
              "Reading multiple files to build a DataFrame",
              "Concatenation, keys, and MultiIndexes",
              "Concatenating vertically to get MultiIndexed rows",
              "Slicing MultiIndexed DataFrames",
              "Concatenating horizontally to get MultiIndexed columns",
              "Concatenating DataFrames from a dict",
              "Outer and inner joins",
              "Concatenating DataFrames with inner join",
              "Resampling & concatenating DataFrames with inner join"
           ]
        },
        {
           "title":"\n          Merging data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You'll learn all about merging pandas DataFrames. You'll explore different techniques for merging, and learn about left joins, right joins, inner joins, and outer joins, as well as when to use which. You'll also learn about ordered merging, which is useful when you want to merge DataFrames with columns that have natural orderings, like date-time columns.\n  ",
           "parts":[
              "Merging DataFrames",
              "Merging company DataFrames",
              "Merging on a specific column",
              "Merging on columns with non-matching labels",
              "Merging on multiple columns",
              "Joining DataFrames",
              "Joining by Index",
              "Choosing a joining strategy",
              "Left & right merging on multiple columns",
              "Merging DataFrames with outer join",
              "Ordered merges",
              "Using merge_ordered()",
              "Using merge_asof()"
           ]
        },
        {
           "title":"\n          Case Study - Summer Olympics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    To reinforce your new skills, you'll apply them to an in-depth case study using Olympic medal data. The analysis involves integrating your multi-DataFrame skills from this course and skills you've gained in previous pandas courses. This is a rich dataset that will allow you to fully leverage your pandas data manipulation skills.\n  ",
           "parts":[
              "Medals in the Summer Olympics",
              "Loading Olympic edition DataFrame",
              "Loading IOC codes DataFrame",
              "Building medals DataFrame",
              "Quantifying performance",
              "Counting medals by country/edition in a pivot table",
              "Computing fraction of medals per Olympic edition",
              "Computing percentage change in fraction of medals won",
              "Reshaping and plotting",
              "Building hosts DataFrame",
              "Reshaping for analysis",
              "Merging to compute influence",
              "Plotting influence of host country",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "pandas Foundations",
        "Manipulating DataFrames with pandas"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Analyst with Python",
        "Data Manipulation with Python",
        "Data Scientist with Python"
     ]
  },
  {
     "title":"Manipulating DataFrames with pandas",
     "description":"You will learn how to tidy, rearrange, and restructure your data using versatile pandas DataFrames.",
     "detailDescription":"In this course, you'll learn how to leverage pandas' extremely powerful data manipulation engine to get the most out of your data. You’ll learn how to drill into the data that really matters by extracting, filtering, and transforming data from DataFrames. The pandas library has many techniques that make this process efficient and intuitive. You will learn how to tidy, rearrange, and restructure your data by pivoting or melting and stacking or unstacking DataFrames. These are all fundamental next steps on the road to becoming a well-rounded data scientist, and you will have the chance to apply all the concepts you learn to real-world datasets.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Extracting and transforming data\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn how to index, slice, filter, and transform DataFrames using a variety of datasets, ranging from 2012 US election data for the state of Pennsylvania to Pittsburgh weather data.\n  ",
           "parts":[
              "Indexing DataFrames",
              "Index ordering",
              "Positional and labeled indexing",
              "Indexing and column rearrangement",
              "Slicing DataFrames",
              "Slicing rows",
              "Slicing columns",
              "Subselecting DataFrames with lists",
              "Filtering DataFrames",
              "Thresholding data",
              "Filtering columns using other columns",
              "Filtering using NaNs",
              "Transforming DataFrames",
              "Using apply() to transform a column",
              "Using .map() with a dictionary",
              "Using vectorized functions"
           ]
        },
        {
           "title":"\n          Advanced indexing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Having learned the fundamentals of working with DataFrames, you will now move on to more advanced indexing techniques. You will learn about MultiIndexes, or hierarchical indexes, and learn how to interact with and extract data from them.\n  ",
           "parts":[
              "Index objects and labeled data",
              "Index values and names",
              "Changing index of a DataFrame",
              "Changing index name labels",
              "Building an index, then a DataFrame",
              "Hierarchical Indexing",
              "Extracting data with a MultiIndex",
              "Setting & sorting a MultiIndex",
              "Using .loc[] with nonunique indexes",
              "Indexing multiple levels of a MultiIndex"
           ]
        },
        {
           "title":"\n          Rearranging and reshaping data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Here, you will learn how to reshape your DataFrames using techniques such as pivoting, melting, stacking, and unstacking. These are powerful techniques that allow you to tidy and rearrange your data into the optimal format for data analysis.\n  ",
           "parts":[
              "Pivoting DataFrames",
              "Pivoting and the index",
              "Pivoting a single variable",
              "Pivoting all variables",
              "Stacking & unstacking DataFrames",
              "Stacking & unstacking I",
              "Stacking & unstacking II",
              "Restoring the index order",
              "Melting DataFrames",
              "Adding names for readability",
              "Going from wide to long",
              "Obtaining key-value pairs with melt()",
              "Pivot tables",
              "Setting up a pivot table",
              "Using other aggregations in pivot tables",
              "Using margins in pivot tables"
           ]
        },
        {
           "title":"\n          Grouping data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to identify and split DataFrames by groups or categories for further aggregation or analysis. You'll also learn how to transform and filter your data, and how to detect outliers and impute missing values. Knowing how to effectively group data in pandas can be a seriously powerful addition to your data science toolbox.\n  ",
           "parts":[
              "Categoricals and groupby",
              "Advantages of categorical data types",
              "Grouping by multiple columns",
              "Grouping by another series",
              "Groupby and aggregation",
              "Computing multiple aggregates of multiple columns",
              "Aggregating on index levels/fields",
              "Grouping on a function of the index",
              "Groupby and transformation",
              "Detecting outliers with Z-Scores",
              "Filling missing data (imputation) by group",
              "Other transformations with .apply",
              "Groupby and filtering",
              "Grouping and filtering with .apply()",
              "Grouping and filtering with .filter()",
              "Filtering and grouping with .map()"
           ]
        },
        {
           "title":"\n          Bringing it all together\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We’ll bring together everything you have learned in this course while working with data recorded from the Summer Olympic games that goes as far back as 1896! This is a rich dataset that will allow you to fully apply the data manipulation techniques you have learned. You will pivot, unstack, group, slice, and reshape your data as you explore this dataset and uncover some truly fascinating insights.\n  ",
           "parts":[
              "Case study: Olympic medals",
              "Grouping and aggregating",
              "Using .value_counts() for ranking",
              "Using .pivot_table() to count medals by type",
              "Understanding the column labels",
              "Applying .drop_duplicates()",
              "Finding possible errors with .groupby()",
              "Locating suspicious data",
              "Constructing alternative country rankings",
              "Using .nunique() to rank by distinct sports",
              "Counting USA vs. USSR Cold War Olympic Sports",
              "Counting USA vs. USSR Cold War Olympic Medals",
              "Reshaping DataFrames for visualization",
              "Visualizing USA Medal Counts by Edition: Line Plot",
              "Visualizing USA Medal Counts by Edition: Area Plot",
              "Visualizing USA Medal Counts by Edition: Area Plot with Ordered Medals",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python",
        "Intermediate Python",
        "pandas Foundations"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Predictive Analytics in Python",
     "description":"In this course you'll learn to use and present logistic regression models for making predictions.",
     "detailDescription":"In this course, you will learn how to build a logistic regression model with meaningful variables. You will also learn how to use this model to make predictions and how to present it and its performance to business stakeholders.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Building Logistic Regression Models\n        ",
           "index":"1",
           "description":"\n    In this Chapter, you'll learn the basics of logistic regression: how can you predict a binary target with continuous variables and, how should you interpret this model and use it to make predictions for new examples?\n  ",
           "parts":[
              "Introduction and base table structure",
              "Structure of the base table",
              "Exploring the base table",
              "Exploring the predictive variables",
              "Logistic regression",
              "Interpretation of coefficients",
              "Building a logistic regression model",
              "Showing the coefficients and intercept",
              "Using the logistic regression model",
              "Making predictions",
              "Donor that is most likely to donate"
           ]
        },
        {
           "title":"\n          Forward stepwise variable selection for logistic regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll learn why variable selection is crucial for building a useful model. You'll also learn how to implement forward stepwise variable selection for logistic regression and how to decide on the number of variables to include in your final model.\n  ",
           "parts":[
              "Motivation for variable selection",
              "Which model is best?",
              "Calculating AUC",
              "Using different sets of variables",
              "Forward stepwise variable selection",
              "Selecting the next best variable",
              "Finding the order of variables",
              "Correlated variables",
              "Deciding on the number of variables",
              "Partitioning",
              "Evaluating a model on test and train",
              "Building the AUC curves",
              "Deciding the cut-off"
           ]
        },
        {
           "title":"\n          Explaining model performance to business\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you know how to build a good model, you should convince stakeholders to use it by creating appropriate graphs. You will learn how to construct and interpret the cumulative gains curve and lift graph.\n  ",
           "parts":[
              "The cumulative gains curve",
              "Interpreting the cumulative gains curve",
              "Constructing the cumulative gains curve",
              "A random model",
              "The lift curve",
              "Interpreting the lift curve",
              "Constructing the lift curve",
              "A perfect model",
              "Guiding business to better decisions",
              "Targeting using cumulative gains curve",
              "Business case using lift curve",
              "Business case using cumulative gains curve"
           ]
        },
        {
           "title":"\n          Interpreting and explaining models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In a business context, it is often important to explain the intuition behind the model you built. Indeed, if the model and its variables do not make sense, the model might not be used. In this chapter you'll learn how to explain the relationship between the variables in the model and the target by means of predictor insight graphs.\n  ",
           "parts":[
              "Predictor insight graphs",
              "Interpretation of predictor insight graphs",
              "Retrieving information from the predictor insight table",
              "Discretization of continuous variables",
              "Discretization of a certain variable",
              "Discretizing all variables",
              "Making clean cuts",
              "Preparing the predictor insight graph table",
              "Calculating average incidences",
              "Constructing the predictor insight graph table",
              "Grouping all predictor insight graph tables",
              "Plotting the predictor insight graph",
              "Plotting the incidences",
              "Plotting the group sizes",
              "Putting it all together",
              "Summary"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Advanced Deep Learning with Keras",
     "description":"Build multiple-input and multiple-output deep learning models using Keras.",
     "detailDescription":"This course shows you how to solve a variety of problems using the versatile Keras functional API. You will start with simple, multi-layer dense networks (also known as multi-layer perceptrons), and continue on to more complicated architectures. The course will cover how to build models with multiple inputs and a single output, as well as how to share weights between layers in a model. We will also cover advanced topics such as category embeddings and multiple-output networks. If you've ever wanted to train a network that does both classification and regression, then this course is for you!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The Keras Functional API\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll become familiar with the basics of the Keras functional API.  You'll build a simple functional network using functional building blocks, fit it to data, and make predictions.\n  ",
           "parts":[
              "Keras input and dense layers",
              "Input layers",
              "Dense layers",
              "Output layers",
              "Build and compile a model",
              "Build a model",
              "Compile a model",
              "Visualize a model",
              "Fit and evaluate a model",
              "Fit the model to the tournament basketball data",
              "Evaluate the model on a test set"
           ]
        },
        {
           "title":"\n          Two Input Networks Using Categorical Embeddings, Shared Layers, and Merge Layers\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will build two-input networks that use categorical embeddings to represent high-cardinality data, shared layers to specify re-usable building blocks, and merge layers to join multiple inputs to a single output. By the end of this chapter, you will have the foundational building blocks for designing neural networks with complex data flows.\n  ",
           "parts":[
              "Category embeddings",
              "Define team lookup",
              "Define team model",
              "Shared layers",
              "Defining two inputs",
              "Lookup both inputs in the same model",
              "Merge layers",
              "Output layer using shared layer",
              "Model using two inputs and one output",
              "Predict from your model",
              "Fit the model to the regular season training data",
              "Evaluate the model on the tournament test data"
           ]
        },
        {
           "title":"\n          Multiple Inputs: 3 Inputs (and Beyond!)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will extend your 2-input model to 3 inputs, and learn how to use Keras' summary and plot functions to understand the parameters and topology of your neural networks. By the end of the chapter, you will understand how to extend a 2-input model to 3 inputs and beyond.\n  ",
           "parts":[
              "Three-input models",
              "Make an input layer for home vs. away",
              "Make a model and compile it",
              "Fit the model and evaluate",
              "Summarizing and plotting models",
              "Model summaries",
              "Plotting models",
              "Stacking models",
              "Add the model predictions to the tournament data",
              "Create an input layer with multiple columns",
              "Fit the model",
              "Evaluate the model"
           ]
        },
        {
           "title":"\n          Multiple Outputs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will build neural networks with multiple outputs, which can be used to solve regression problems with multiple targets.  You will also build a model that solves a regression problem and a classification problem simultaneously.\n  ",
           "parts":[
              "Two-output models",
              "Simple two-output model",
              "Fit a model with two outputs",
              "Inspect the model (I)",
              "Evaluate the model",
              "Single model for classification and regression",
              "Classification and regression in one model",
              "Compile and fit the model",
              "Inspect the model (II)",
              "Evaluate on new data with two metrics",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Deep Learning in Python"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Deep Learning in Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Machine Learning with Tree-Based Models in Python",
     "description":"In this course, you'll learn how to use tree-based models and ensembles for regression and classification using scikit-learn.",
     "detailDescription":"Decision trees are supervised learning models used for problems involving classification and regression. Tree models present a high flexibility that comes at a price: on one hand, trees are able to capture complex non-linear relationships; on the other hand, they are prone to memorizing the noise present in a dataset. By aggregating the predictions of trees that are trained differently, ensemble methods take advantage of the flexibility of trees while reducing their tendency to memorize noise. Ensemble methods are used across a variety of fields and have a proven track record of winning many machine learning competitions. In this course, you'll learn how to use Python to train decision trees and tree-based models with the user-friendly scikit-learn machine learning library. You'll understand the advantages and shortcomings of trees and demonstrate how ensembling can alleviate these shortcomings, all while practicing on real-world datasets. Finally, you'll also understand how to tune the most influential hyperparameters in order to get the most out of your models.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Classification and Regression Trees\n        ",
           "index":"1",
           "description":"\n    Classification and Regression Trees (CART) are a set of supervised learning models used for problems involving classification and regression. In this chapter, you'll be introduced to the CART algorithm.\n  ",
           "parts":[
              "Decision tree for classification",
              "Train your first classification tree",
              "Evaluate the classification tree",
              "Logistic regression vs classification tree",
              "Classification tree Learning",
              "Growing a classification tree",
              "Using entropy as a criterion",
              "Entropy vs Gini index",
              "Decision tree for regression",
              "Train your first regression tree",
              "Evaluate the regression tree",
              "Linear regression vs regression tree"
           ]
        },
        {
           "title":"\n          The Bias-Variance Tradeoff\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The bias-variance tradeoff is one of the fundamental concepts in supervised machine learning. In this chapter, you'll understand how to diagnose the problems of overfitting and underfitting. You'll also be introduced to the concept of ensembling where the predictions of several models are aggregated to produce predictions that are more robust.\n  ",
           "parts":[
              "Generalization Error",
              "Complexity, bias and variance",
              "Overfitting and underfitting",
              "Diagnose bias and variance problems",
              "Instantiate the model",
              "Evaluate the 10-fold CV error",
              "Evaluate the training error",
              "High bias or high variance?",
              "Ensemble Learning",
              "Define the ensemble",
              "Evaluate individual classifiers",
              "Better performance with a Voting Classifier"
           ]
        },
        {
           "title":"\n          Bagging and Random Forests\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Bagging is an ensemble method involving training the same algorithm many times using different subsets sampled from the training data. In this chapter, you'll understand how bagging can be used to create a tree ensemble. You'll also learn how the random forests algorithm can lead to further ensemble diversity through randomization at the level of each split in the trees forming the ensemble.\n  ",
           "parts":[
              "Bagging",
              "Define the bagging classifier",
              "Evaluate Bagging performance",
              "Out of Bag Evaluation",
              "Prepare the ground",
              "OOB Score vs Test Set Score",
              "Random Forests (RF)",
              "Train an RF regressor",
              "Evaluate the RF regressor",
              "Visualizing features importances"
           ]
        },
        {
           "title":"\n          Boosting\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Boosting refers to an ensemble method in which several models are trained sequentially with each model learning from the errors of its predecessors. In this chapter, you'll be introduced to the two boosting methods of AdaBoost and Gradient Boosting.\n  ",
           "parts":[
              "Adaboost",
              "Define the AdaBoost classifier",
              "Train the AdaBoost classifier",
              "Evaluate the AdaBoost classifier",
              "Gradient Boosting (GB)",
              "Define the GB regressor",
              "Train the GB regressor",
              "Evaluate the GB regressor",
              "Stochastic Gradient Boosting (SGB)",
              "Regression with SGB",
              "Train the SGB regressor",
              "Evaluate the SGB regressor"
           ]
        },
        {
           "title":"\n          Model Tuning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The hyperparameters of a machine learning model are parameters that are not learned from data. They should be set prior to fitting the model to the training set. In this chapter, you'll learn how to tune the hyperparameters of a tree-based model using grid search cross validation.\n  ",
           "parts":[
              "Tuning a CART's Hyperparameters",
              "Tree hyperparameters",
              "Set the tree's hyperparameter grid",
              "Search for the optimal tree",
              "Evaluate the optimal tree",
              "Tuning a RF's Hyperparameters",
              "Random forests hyperparameters",
              "Set the hyperparameter grid of RF",
              "Search for the optimal forest",
              "Evaluate the optimal forest",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Machine Learning for Everyone",
        "Data Scientist with Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Marketing Analytics: Predicting Customer Churn in Python",
     "description":"Learn how to use Python to analyze customer churn and build a model to predict it.",
     "detailDescription":"Churn is when a customer stops doing business or ends a relationship with a company. It’s a common problem across a variety of industries, from telecommunications to cable TV to SaaS, and a company that can predict churn can take proactive action to retain valuable customers and get ahead of the competition. This course will provide you a roadmap to create your own customer churn models. You’ll learn how to explore and visualize your data, prepare it for modeling, make predictions using machine learning, and communicate important, actionable insights to stakeholders. By the end of the course, you’ll become comfortable using the pandas library for data analysis and the scikit-learn library for machine learning.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploratory Data Analysis\n        ",
           "index":"1",
           "description":"\n    Begin exploring the Telco Churn Dataset using pandas to compute summary statistics and Seaborn to create attractive visualizations.\n  ",
           "parts":[
              "Welcome to the course",
              "Defining customer churn",
              "Exploring customer churn",
              "Grouping and summarizing data",
              "Summary statistics for both classes",
              "Churn by State",
              "Exploring your data using visualizations",
              "Exploring feature distributions",
              "Customer service calls and churn"
           ]
        },
        {
           "title":"\n          Preprocessing for Churn Modeling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Having explored your data, it's now time to preprocess it and get it ready for machine learning. Learn the why, what, and how of preprocessing, including feature selection and feature engineering.\n  ",
           "parts":[
              "Data preprocessing",
              "Identifying features to convert",
              "Encoding binary features",
              "One hot encoding",
              "Feature scaling",
              "Feature selection and engineering",
              "Dropping unnecessary features",
              "Engineering a new column"
           ]
        },
        {
           "title":"\n          Churn Prediction\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    With your data preprocessed and ready for machine learning, it's time to predict churn! Learn how to build supervised learning machine models in Python using scikit-learn.\n  ",
           "parts":[
              "Making Predictions",
              "Predicting whether a new customer will churn",
              "Training another scikit-learn model",
              "Evaluating Model Performance",
              "Creating training and test sets",
              "Check each sets length",
              "Computing accuracy",
              "Model Metrics",
              "Confusion matrix",
              "Varying training set size",
              "Computing precision and recall",
              "Other model metrics",
              "ROC curve",
              "Area under the curve",
              "Precision-recall curve",
              "F1 score"
           ]
        },
        {
           "title":"\n          Model Tuning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to improve the performance of your models using hyperparameter tuning and gain a better understanding of the drivers of customer churn that you can take back to the business.\n  ",
           "parts":[
              "Tuning your model",
              "Tuning the number of features",
              "Tuning other hyperparameters",
              "Randomized search",
              "Feature importances",
              "Visualizing feature importances",
              "Improving the plot",
              "Interpreting feature importances",
              "Adding new features",
              "Does model performance improve?",
              "Computing other metrics",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[
        "Marketing Analytics with Python"
     ]
  },
  {
     "title":"Machine Learning for Finance in Python",
     "description":"Learn to model and predict stock data values using linear models, decision trees, random forests, and neural networks.",
     "detailDescription":"Time series data is all around us; some examples are the weather, human behavioral patterns as consumers and members of society, and financial data. In this course, you'll learn how to calculate technical indicators from historical stock data, and how to create features and targets out of the historical stock data. You'll understand how to prepare our features for linear models, xgboost models, and neural network models. We will then use linear models, decision trees, random forests, and neural networks to predict the future price of stocks in the US markets. You will also learn how to evaluate the performance of the various models we train in order to optimize them, so our predictions have enough accuracy to make a stock trading strategy profitable.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Preparing data and a linear model\n        ",
           "index":"1",
           "description":"\n    In this chapter, we will learn how machine learning can be used in finance.  We will also explore some stock data, and prepare it for machine learning algorithms.  Finally, we will fit our first machine learning model -- a linear model, in order to predict future price changes of stocks.\n  ",
           "parts":[
              "Machine learning for finance",
              "Explore the data with some EDA",
              "Correlations",
              "Data transforms, features, and targets",
              "Create moving average and RSI features",
              "Create features and targets",
              "Check the correlations",
              "Linear modeling",
              "Create train and test features",
              "Fit a linear model",
              "Evaluate our results"
           ]
        },
        {
           "title":"\n          Machine learning tree methods\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to use tree-based machine learning models to predict future values of a stock's price, as well as how to use forest-based machine learning methods for regression and feature selection.\n  ",
           "parts":[
              "Engineering more features",
              "Feature engineering from volume",
              "Create day-of-week features",
              "Examine correlations of the new features",
              "Decision trees",
              "Fit a decision tree",
              "Try different max depths",
              "Check our results",
              "Random forests",
              "Fit a random forest",
              "Tune random forest hyperparameters",
              "Evaluate performance",
              "Feature importances and gradient boosting",
              "Random forest feature importances",
              "A gradient boosting model",
              "Gradient boosting feature importances"
           ]
        },
        {
           "title":"\n          Neural networks and KNN\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We will learn how to normalize and scale data for use in KNN and neural network methods.  Then we will learn how to use KNN and neural network regression to predict the future values of a stock's price (or any other regression problem).\n  ",
           "parts":[
              "Scaling data and KNN Regression",
              "Standardizing data",
              "Optimize n_neighbors",
              "Evaluate KNN performance",
              "Neural Networks",
              "Build and fit a simple neural net",
              "Plot losses",
              "Measure performance",
              "Custom loss functions",
              "Custom loss function",
              "Fit neural net with custom loss function",
              "Visualize the results",
              "Overfitting and ensembling",
              "Combatting overfitting with dropout",
              "Ensembling models",
              "See how the ensemble performed"
           ]
        },
        {
           "title":"\n          Machine learning with modern portfolio theory\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to use modern portfolio theory (MPT) and the Sharpe ratio to plot and find optimal stock portfolios.  You'll also use machine learning to predict the best portfolios.  Finally, you'll evaluate performance of the ML-predicted portfolios.\n  ",
           "parts":[
              "Modern portfolio theory (MPT); efficient frontiers",
              "Join stock DataFrames and calculate returns",
              "Calculate covariances for volatility",
              "Calculate portfolios",
              "Plot efficient frontier",
              "Sharpe ratios; features and targets",
              "Get best Sharpe ratios",
              "Calculate EWMAs",
              "Make features and targets",
              "Plot efficient frontier with best Sharpe ratio",
              "Machine learning for MPT",
              "Make predictions with a random forest",
              "Get predictions and first evaluation",
              "Evaluate returns",
              "Plot returns",
              "Closing remarks and advice"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Preprocessing for Machine Learning in Python",
     "description":"In this course you'll learn how to get your cleaned data ready for modeling.",
     "detailDescription":"This course covers the basics of how and when to perform data preprocessing. This essential step in any machine learning project is when you get your data ready for modeling. Between importing and cleaning your data and fitting your machine learning model is when preprocessing comes into play. You'll learn how to standardize your data so that it's in the right form for your model, create new features to best leverage the information in your dataset, and select the best features to improve your model fit. Finally, you'll have some practice preprocessing by getting a dataset on UFO sightings ready for modeling.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Data Preprocessing\n        ",
           "index":"1",
           "description":"\n    In this chapter you'll learn exactly what it means to preprocess data. You'll take the first steps in any preprocessing journey, including exploring data types and dealing with missing data.\n  ",
           "parts":[
              "What is data preprocessing?",
              "Missing data - columns",
              "Missing data - rows",
              "Working with data types",
              "Exploring data types",
              "Converting a column type",
              "Class distribution",
              "Class imbalance",
              "Stratified sampling"
           ]
        },
        {
           "title":"\n          Standardizing Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter is all about standardizing data. Often a model will make some assumptions about the distribution or scale of your features. Standardization is a way to make your data fit these assumptions and improve the algorithm's performance.\n  ",
           "parts":[
              "Standardizing Data",
              "When to standardize",
              "Modeling without normalizing",
              "Log normalization",
              "Checking the variance",
              "Log normalization in Python",
              "Scaling data for feature comparison",
              "Scaling data - investigating columns",
              "Scaling data - standardizing columns",
              "Standardized data and modeling",
              "KNN on non-scaled data",
              "KNN on scaled data"
           ]
        },
        {
           "title":"\n          Feature Engineering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this section you'll learn about feature engineering. You'll explore different ways to create new, more useful, features from the ones already in your dataset. You'll see how to encode, aggregate, and extract information from both numerical and textual features.\n  ",
           "parts":[
              "Feature engineering",
              "Feature engineering knowledge test",
              "Identifying areas for feature engineering",
              "Encoding categorical variables",
              "Encoding categorical variables - binary",
              "Encoding categorical variables - one-hot",
              "Engineering numerical features",
              "Engineering numerical features - taking an average",
              "Engineering numerical features - datetime",
              "Text classification",
              "Engineering features from strings - extraction",
              "Engineering features from strings - tf/idf",
              "Text classification using tf/idf vectors"
           ]
        },
        {
           "title":"\n          Selecting features for modeling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter goes over a few different techniques for selecting the most important features from your dataset. You'll learn how to drop redundant features, work with text vectors, and reduce the number of features in your dataset using principal component analysis (PCA).\n  ",
           "parts":[
              "Feature selection",
              "When to use feature selection",
              "Identifying areas for feature selection",
              "Removing redundant features",
              "Selecting relevant features",
              "Checking for correlated features",
              "Selecting features using text vectors",
              "Exploring text vectors, part 1",
              "Exploring text vectors, part 2",
              "Training Naive Bayes with feature selection",
              "Dimensionality reduction",
              "Using PCA",
              "Training a model with PCA"
           ]
        },
        {
           "title":"\n          Putting it all together\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you've learned all about preprocessing you'll try these techniques out on a dataset that records information on UFO sightings.\n  ",
           "parts":[
              "UFOs and preprocessing",
              "Checking column types",
              "Dropping missing data",
              "Categorical variables and standardization",
              "Extracting numbers from strings",
              "Identifying features for standardization",
              "Engineering new features",
              "Encoding categorical variables",
              "Features from dates",
              "Text vectorization",
              "Feature selection and modeling",
              "Selecting the ideal dataset",
              "Modeling the UFO dataset, part 1",
              "Modeling the UFO dataset, part 2",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Cleaning Data in Python",
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Feature Engineering with PySpark",
     "description":"Learn the gritty details that data scientists are spending 70-80% of their time on; data wrangling and feature engineering.",
     "detailDescription":"The real world is messy and your job is to make sense of it. Toy datasets like MTCars and Iris are the result of careful curation and cleaning, even so the data needs to be transformed for it to be useful for powerful machine learning algorithms to extract meaning, forecast, classify or cluster. This course will cover the gritty details that data scientists are spending 70-80% of their time on; data wrangling and feature engineering. With size of datasets now becoming ever larger, let's use PySpark to cut this Big Data problem down to size!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploratory Data Analysis\n        ",
           "index":"1",
           "description":"\n    Get to know a bit about your problem before you dive in! Then learn how to statistically and visually inspect your dataset!\n  ",
           "parts":[
              "Where to Begin",
              "Where to begin?",
              "Check Version",
              "Load in the data",
              "Defining A Problem",
              "What are we predicting?",
              "Verifying Data Load",
              "Verifying DataTypes",
              "Visually Inspecting Data / EDA",
              "Using Corr()",
              "Using Visualizations: distplot",
              "Using Visualizations: lmplot"
           ]
        },
        {
           "title":"\n          Wrangling with Spark Functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Real data is rarely clean and ready for analysis. In this chapter learn to remove unneeded information, handle missing values and add additional data to your analysis.\n  ",
           "parts":[
              "Dropping data",
              "Dropping a list of columns",
              "Using text filters to remove records",
              "Filtering numeric fields conditionally",
              "Adjusting Data",
              "Custom Percentage Scaling",
              "Scaling your scalers",
              "Correcting Right Skew Data",
              "Working with Missing Data",
              "Visualizing Missing Data",
              "Imputing Missing Data",
              "Calculate Missing Percents",
              "Getting More Data",
              "A Dangerous Join",
              "Spark SQL Join",
              "Checking for Bad Joins"
           ]
        },
        {
           "title":"\n          Feature Engineering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter learn how to create new features for your machine learning model to learn from. We'll look at generating them by combining fields, extracting values from messy columns or encoding them for better results.\n  ",
           "parts":[
              "Feature Generation",
              "Differences",
              "Ratios",
              "Deeper Features",
              "Time Features",
              "Time Components",
              "Joining On Time Components",
              "Date Math",
              "Extracting Features",
              "Extracting Text to New Features",
              "Splitting & Exploding",
              "Pivot & Join",
              "Binarizing, Bucketing  & Encoding",
              "Binarizing Day of Week",
              "Bucketing",
              "One Hot Encoding"
           ]
        },
        {
           "title":"\n          Building a Model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we'll learn how  to choose which type of model we want. Then we will learn how to apply our data to the model and evaluate it. Lastly,  we'll learn how to interpret the results and save the model for later!\n  ",
           "parts":[
              "Choosing the Algorithm",
              "Which MLlib Module?",
              "Creating Time Splits",
              "Adjusting Time Features",
              "Feature Engineering Assumptions for RFR",
              "Feature Engineering For Random Forests",
              "Dropping Columns with Low Observations",
              "Naively Handling Missing and Categorical Values",
              "Building a Model",
              "Building a Regression Model",
              "Evaluating & Comparing Algorithms",
              "Understanding Metrics",
              "Interpreting, Saving & Loading",
              "Interpreting Results",
              "Saving & Loading Models",
              "Final Thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn",
        "Introduction to PySpark"
     ],
     "tracks":[
        "Big Data with PySpark"
     ]
  },
  {
     "title":"Introduction to MongoDB in Python",
     "description":"Learn to manipulate and analyze flexibly structured data with MongoDB.",
     "detailDescription":"MongoDB is a tool to explore data structured as you see fit. As a NoSQL database, it doesn't follow the strict relational format imposed by SQL. By providing capabilities that typically require adding layers to SQL, it collapses complexity. With dynamic schema, you can handle vastly different data together and consolidate analytics. The flexibility of MongoDB empowers you to keep improving and fix issues as your requirements evolve. In this course, you will learn the MongoDB language and apply it to search and analytics. Working with unprocessed data from the official nobelprize.org API, you will explore and answer questions about Nobel Laureates and prizes.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Flexibly Structured Data\n        ",
           "index":"1",
           "description":"\n    This chapter is about getting a bird's-eye view of the Nobel Prize data's structure. You will relate MongoDB documents, collections, and databases to JSON and Python types. You'll then use filters, operators, and dot notation to explore substructure.\n  ",
           "parts":[
              "Intro to MongoDB and the Nobel Prize dataset",
              "Count documents in a collection",
              "Listing databases and collections",
              "List fields of a document",
              "Finding documents",
              "\"born\" approximation",
              "Composing filters",
              "We've got options",
              "Dot notation: reach into substructure",
              "Choosing tools",
              "Starting our ascent",
              "Our 'born' approximation, and a special laureate"
           ]
        },
        {
           "title":"\n          Working with Distinct Values and Sets\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now you have a sense of the data's structure. This chapter is about dipping your toes into the pools of values for various fields. You'll collect distinct values, test for membership in sets, and match values to patterns.\n  ",
           "parts":[
              "Survey Distinct Values",
              "Categorical data validation",
              "Never from there, but sometimes there at last",
              "Countries of affiliation",
              "Distinct Values Given Filters",
              "Born here, went there",
              "Triple plays (mostly) all around",
              "Filter Arrays using Distinct Values",
              "Sharing in physics after World War II",
              "Meanwhile, in other categories...",
              "Organizations and prizes over time",
              "Distinct As You Like It",
              "Glenn, George, and others in the G.B. crew",
              "Germany, then and now",
              "The prized transistor"
           ]
        },
        {
           "title":"\n          Get Only What You Need, and Fast\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You can now query collections with ease and collect documents to examine and analyze with Python. But this process is sometimes slow and onerous for large collections and documents. This chapter is about various ways to speed up and simplify that process.\n  ",
           "parts":[
              "Projection",
              "Shares of the 1903 Prize in Physics",
              "Rounding up the G.S. crew",
              "Doing our share of data validation",
              "Sorting",
              "What the sort?",
              "Sorting together: MongoDB + Python",
              "Gap years",
              "What are indexes?",
              "High-share categories",
              "Recently single?",
              "Born and affiliated",
              "Limits",
              "Setting a new limit?",
              "The first five prizes with quarter shares",
              "Pages of particle-prized people"
           ]
        },
        {
           "title":"\n          Aggregation Pipelines: Let the Server Do It For You\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You've used projection, sorting, indexing, and limits to speed up data fetching. But there are still annoying performance bottlenecks in your analysis pipelines. You still need to fetch a ton of data. Thus, network bandwidth and downstream processing and memory capacity still impact performance. This chapter is about using MongoDB to perform aggregations for you on the server.\n  ",
           "parts":[
              "Intro to Aggregation",
              "Sequencing stages",
              "Aggregating a few individuals' country data",
              "Passing the aggregation baton to Python",
              "Aggregation Operators and Grouping",
              "Field Paths and Sets",
              "Organizing prizes",
              "Gap years, aggregated",
              "Zoom into Array Fields",
              "Embedding aggregation expressions",
              "Here and elsewhere",
              "Countries of birth by prize category",
              "Something Extra: $addFields to Aid Analysis",
              "\"...it's the life in your years\"",
              "How many prizes were awarded to immigrants?",
              "Refinement: filter out \"unaffiliated\" people",
              "Wrap-Up"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)",
        "Data Types for Data Science in Python"
     ],
     "tracks":[
        "Data Engineer with Python"
     ]
  },
  {
     "title":"Introduction to Portfolio Risk Management in Python",
     "description":"Evaluate portfolio risk and returns, construct market-cap weighted equity portfolios and learn how to forecast and hedge market risk via scenario generation.",
     "detailDescription":"This course will teach you how to evaluate basic portfolio risk and returns like a quantitative analyst on Wall Street. This is the most critical step towards being able to fully automate your portfolio construction and management processes. Discover what factors are driving your portfolio returns, construct market-cap weighted equity portfolios, and learn how to forecast and hedge market risk via scenario generation.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Univariate Investment Risk and Returns\n        ",
           "index":"1",
           "description":"\n    Learn about the fundamentals of investment risk and financial return distributions.\n  ",
           "parts":[
              "Financial returns",
              "Financial timeseries data",
              "Calculating financial returns",
              "Return distributions",
              "Mean, variance, and normal distribution",
              "First moment: Mu",
              "Second moment: Variance",
              "Annualizing variance",
              "Skewness and Kurtosis",
              "Third moment: Skewness",
              "Fourth moment: Kurtosis",
              "Statistical tests for normality"
           ]
        },
        {
           "title":"\n          Portfolio Investing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Level up your understanding of investing by constructing portfolios of assets to enhance your risk-adjusted returns.\n  ",
           "parts":[
              "Portfolio composition and backtesting",
              "Calculating portfolio returns",
              "Equal weighted portfolios",
              "Market-cap weighted portfolios",
              "Correlation and co-variance",
              "The correlation matrix",
              "The co-variance matrix",
              "Portfolio standard deviation",
              "Markowitz portfolios",
              "The efficient frontier",
              "Sharpe ratios",
              "The MSR portfolio",
              "The GMV portfolio"
           ]
        },
        {
           "title":"\n          Factor Investing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn about the main factors that influence the returns of your portfolios and how to quantify your portfolio's exposure to these factors.\n  ",
           "parts":[
              "The Capital Asset Pricing model",
              "Excess returns",
              "Calculating beta using co-variance",
              "Calculating beta with CAPM",
              "Adjusted R-squared",
              "Alpha and multi-factor models",
              "The Fama French 3-factor model",
              "p-values and coefficients",
              "Economic intuition in factor modeling",
              "The efficient market and alpha",
              "Expanding the 3-factor model",
              "The 5-factor model",
              "Alpha vs R-squared"
           ]
        },
        {
           "title":"\n          Value at Risk\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn two different methods to estimate the probability of sustaining losses and the expected values of those losses for a given asset or portfolio of assets. \n  ",
           "parts":[
              "Estimating tail risk",
              "Historical drawdown",
              "Historical value at risk",
              "Historical expected shortfall",
              "VaR extensions",
              "Changing VaR and CVaR quantiles",
              "Parametric VaR",
              "Scaling risk estimates",
              "Random walks",
              "A random walk simulation",
              "Monte Carlo simulations",
              "Monte Carlo VaR",
              "Understanding risk"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Financial Concepts in Python",
        "Manipulating Time Series Data in Python"
     ],
     "tracks":[
        "Applied Finance in Python"
     ]
  },
  {
     "title":"Introduction to Financial Concepts in Python",
     "description":"Using Python and NumPy, learn the most fundamental financial concepts.",
     "detailDescription":"Understanding the basic principles of finance is essential for making important financial decisions ranging from taking out a student loan to constructing an investment portfolio. Combining basic financial knowledge with Python will allow you to construct some very powerful tools. You'll come out of this course understanding the time value of money, how to compare potential projects and how to make rational, data-driven financial decisions.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The Time Value of Money\n        ",
           "index":"1",
           "description":"\n    Learn about fundamental financial concepts like the time value of money, growth and rate of return, discount factors, depreciation, and inflation.\n  ",
           "parts":[
              "Fundamental Financial Concepts",
              "Growth and Rate of Return",
              "Compound Interest",
              "Discount Factors and Depreciation",
              "Present and Future Value",
              "Present Value",
              "Future Value",
              "Adjusting Future Values for Inflation",
              "Net Present Value and Cash Flows",
              "Discounting Cash Flows",
              "Initial Project Costs",
              "Diminishing Cash Flows"
           ]
        },
        {
           "title":"\n           Making Data-Driven Financial Decisions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will act as the CEO of a company, making important data-driven financial decisions about projects and financing using measures such as IRR and NPV.\n  ",
           "parts":[
              "A Tale of Two Project Proposals",
              "Project Proposals and Cash Flows Projections",
              "Internal Rate of Return",
              "Make a Decision Based on IRR",
              "The Weighted Average Cost of Capital",
              "Debt and Equity Financing",
              "Calculating WACC",
              "Comparing Project NPV with IRR",
              "Comparing Two Projects of Different Life Spans",
              "Two Project With Different Lifespans",
              "Calculating IRR and NPV With Different Project Lifespans",
              "Using the Equivalent Annual Annuity Approach",
              "Making a Data-Driven Decision on Projects of Different Lifespans"
           ]
        },
        {
           "title":"\n          Simulating a Mortgage Loan\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You just got married, and you're looking for a new home in Hoboken, New Jersey. You will build a mortgage payment simulator to estimate your mortgage payments and analyze different possible economic scenarios.\n  ",
           "parts":[
              "Mortgage Basics",
              "Taking Out a Mortgage Loan",
              "Calculating the Monthly Mortgage Payment",
              "Amortization, Interest and Principal",
              "Calculating Interest and Principal Payments",
              "Simulating Periodic Payments (I)",
              "Simulating Periodic Payments (II)",
              "Home Ownership, Home Prices and Recessions",
              "Cumulative Payments and Home Equity",
              "Rising Housing Prices",
              "Falling Housing Prices and Underwater Mortgages"
           ]
        },
        {
           "title":"\n          Budgeting Application\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You just got a new job as a data scientist in San Francisco, and you're looking for an apartment. In this chapter, you'll be building your own budgeting application to plan out your financial future.\n  ",
           "parts":[
              "Budgeting Project Proposal",
              "Salary and Taxes",
              "Monthly Expenses and Savings",
              "Forecast Salary Growth and Cost of Living",
              "Forecast Growing Expenses Due to Inflation",
              "Net Worth, Saving, and Investing",
              "Calculate Your Net Worth",
              "So You Want to Be a Millionaire?",
              "Investing a Percentage of Your Income (I)",
              "Investing a Percentage of Your Income (II)",
              "The Power of Time and Compound Interest",
              "Investing Over Time",
              "Inflation-Adjusted Net Worth",
              "Financial Concepts in Your Daily Life"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Finance Fundamentals in Python"
     ]
  },
  {
     "title":"Machine Learning for Time Series Data in Python",
     "description":"This course focuses on feature engineering and machine learning for time series data.",
     "detailDescription":"Time series data is ubiquitous. Whether it be stock market fluctuations, sensor data recording climate change, or activity in the brain, any signal that changes over time can be described as a time series. Machine learning has emerged as a powerful method for leveraging complexity in data in order to generate predictions and insights into the problem one is trying to solve. This course is an intersection between these two worlds of machine learning and time series data, and covers feature engineering, spectograms, and other advanced techniques in order to classify heartbeat sounds and predict stock prices.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Time Series and Machine Learning Primer\n        ",
           "index":"1",
           "description":"\n    This chapter is an introduction to the basics of machine learning, time series data, and the intersection between the two.\n  ",
           "parts":[
              "Timeseries kinds and applications",
              "Identifying a time series",
              "Plotting a time series (I)",
              "Plotting a time series (II)",
              "Machine learning basics",
              "Fitting a simple model: classification",
              "Predicting using a classification model",
              "Fitting a simple model: regression",
              "Predicting using a regression model",
              "Machine learning and time series data",
              "Inspecting the classification data",
              "Inspecting the regression data"
           ]
        },
        {
           "title":"\n          Time Series as Inputs to a Model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The easiest way to incorporate time series into your machine learning pipeline is to use them as features in a model. This chapter covers common features that are extracted from time series in order to do machine learning.\n  ",
           "parts":[
              "Classifying a time series",
              "Many repetitions of sounds",
              "Invariance in time",
              "Build a classification model",
              "Improving features for classification",
              "Calculating the envelope of sound",
              "Calculating features from the envelope",
              "Derivative features: The tempogram",
              "The spectrogram",
              "Spectrograms of heartbeat audio",
              "Engineering spectral features",
              "Combining many features in a classifier"
           ]
        },
        {
           "title":"\n          Predicting Time Series Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    If you want to predict patterns from data over time, there are special considerations to take in how you choose and construct your model. This chapter covers how to gain insights into the data before fitting your model, as well as best-practices in using predictive modeling for time series data.\n  ",
           "parts":[
              "Predicting data over time",
              "Introducing the dataset",
              "Fitting a simple regression model",
              "Visualizing predicted values",
              "Advanced time series prediction",
              "Visualizing messy data",
              "Imputing missing values",
              "Transforming raw data",
              "Handling outliers",
              "Creating features over time",
              "Engineering multiple rolling features at once",
              "Percentiles and partial functions",
              "Using \"date\" information"
           ]
        },
        {
           "title":"\n          Validating and Inspecting Time Series Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Once you've got a model for predicting time series data, you need to decide if it's a good or a bad model. This chapter coves the basics of generating predictions with models in order to validate them against \"test\" data.\n  ",
           "parts":[
              "Creating features from the past",
              "Creating time-shifted features",
              "Special case: Auto-regressive models",
              "Visualize regression coefficients",
              "Auto-regression with a smoother time series",
              "Cross-validating time series data",
              "Cross-validation with shuffling",
              "Cross-validation without shuffling",
              "Time-based cross-validation",
              "Stationarity and stability",
              "Stationarity",
              "Bootstrapping a confidence interval",
              "Calculating variability in model coefficients",
              "Visualizing model score variability over time",
              "Accounting for non-stationarity",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating Time Series Data in Python",
        "Visualizing Time Series Data in Python",
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Scientist with Python",
        "Time Series with Python"
     ]
  },
  {
     "title":"Customer Analytics and A-B Testing in Python",
     "description":"Learn how to use Python to create, run, and analyze A/B tests to make proactive business decisions.",
     "detailDescription":"The most successful companies today are the ones that know their customers so well that they can anticipate their needs. Customer analytics and in particular A/B Testing are crucial parts of leveraging quantitative know-how to help make business decisions that generate value. This course covers the ins and outs of how to use Python to analyze customer behavior and business trends as well as how to create, run, and analyze A/B tests to make proactive, data-driven business decisions.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Key Performance Indicators: Measuring Business Success\n        ",
           "index":"1",
           "description":"\n    This chapter provides a brief introduction to the content that will be covered throughout the course before transitioning into a discussion of Key Performance Indicators or KPIs. You'll learn how to identify and define meaningful KPIs through a combination of critical thinking and leveraging Python tools. These techniques are all presented in a highly practical and generalizable way. Ultimately these topics serve as the core foundation for the A/B testing discussion that follows.\n  ",
           "parts":[
              "Course introduction and overview",
              "Understanding the key components of an A/B test",
              "Defining meaningful KPIs",
              "Identifying and understanding KPIs",
              "Loading & examining our data",
              "Merging on different sets of fields",
              "Exploratory analysis of KPIs",
              "Practicing aggregations",
              "Grouping & aggregating",
              "Calculating KPIs - a practical example",
              "Calculating KPIs",
              "Average purchase price by cohort"
           ]
        },
        {
           "title":"\n          Exploring and Visualizing Customer Behavior\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter teaches you how to visualize, manipulate, and explore KPIs as they change over time. Through a variety of examples, you'll learn how to work with datetime objects to calculate metrics per unit time. Then we move to the techniques for how to graph different segments of data, and apply various smoothing functions  to reveal hidden trends. Finally we walk through a complete example of how to pinpoint issues through exploratory data analysis of customer data. Throughout this chapter various functions are introduced and explained in a highly generalizable way.\n  ",
           "parts":[
              "Working with time series data in pandas",
              "Parsing dates",
              "Creating time series graphs with matplotlib",
              "Plotting time series data",
              "Pivoting our data",
              "Examining the different cohorts",
              "Understanding and visualizing trends",
              "Seasonality and moving averages",
              "Exponential rolling average & over/under smoothing",
              "Events and releases",
              "Visualizing user spending",
              "Looking more closely at revenue"
           ]
        },
        {
           "title":"\n          The Design and Application of A-B Testing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will dive fully into A/B testing. You will learn the mathematics and knowledge needed to design and successfully plan an A/B test from determining an experimental unit to finding how large a sample size is needed. Accompanying this will be an introduction to the functions and code needed to calculate the various quantities associated with a statistical test of this type.\n  ",
           "parts":[
              "Introduction to A/B testing",
              "Good applications of A/B testing",
              "General properties of an A/B Test",
              "A/B test generalizability",
              "Initial A/B test design",
              "Experimental units: Revenue per user day",
              "Preparing to run an A/B test",
              "Conversion rate sensitivities",
              "Sensitivity",
              "Standard error",
              "Calculating sample size",
              "Exploring the power calculation",
              "Calculating the sample size"
           ]
        },
        {
           "title":"\n          Analyzing A/B Testing Results\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    After running an A/B test, you must analyze the data and then effectively communicate the results. This chapter begins by interleaving the theory of statistical significance and confidence intervals with the tools you need to calculate them yourself from the data. Next we discuss  how to effectively visualize and communicate these results. This chapter is the culmination of all the knowledge built over the entire course.\n  ",
           "parts":[
              "Analyzing the A/B test results",
              "Confirming our test results",
              "Thinking critically about p-values",
              "Understanding statistical significance",
              "Intuition behind statistical significance",
              "Checking for statistical significance",
              "Understanding confidence intervals",
              "Calculating confidence intervals",
              "Interpreting your test results",
              "Plotting the distribution",
              "Plotting the difference distribution",
              "Finale"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 1)",
        "Manipulating DataFrames with pandas"
     ],
     "tracks":[
        "Marketing Analytics with Python"
     ]
  },
  {
     "title":"Introduction to Linear Modeling in Python",
     "description":"Explore the concepts and applications of linear models with python and build models to describe, predict, and extract insight from data patterns.",
     "detailDescription":"One of the primary goals of any scientist is to find patterns in data and build models to describe, predict, and extract insight from those patterns. The most fundamental of these patterns is a linear relationship between two variables. This course provides an introduction to exploring, quantifying, and modeling linear relationships in data, by demonstrating techniques such as least-squares, linear regression, estimatation, and bootstrap resampling. Here you will apply the most powerful modeling tools in the python data science ecosystem, including scipy, statsmodels, and scikit-learn, to build and evaluate linear models. By exploring the concepts and applications of linear models with python, this course serves as both a practical introduction to modeling, and as a foundation for learning more advanced modeling techniques and tools in statistics and machine learning.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploring Linear Trends\n        ",
           "index":"1",
           "description":"\n    We start the course with an initial exploration of linear relationships, including some motivating examples of how linear models are used, and demonstrations of data visualization methods from matplotlib. We then use descriptive statistics to quantify the shape of our data and use correlation to quantify the strength of linear relationships between two variables.\n  ",
           "parts":[
              "Introduction to Modeling Data",
              "Reasons for Modeling: Interpolation",
              "Reasons for Modeling: Extrapolation",
              "Reasons for Modeling: Estimating Relationships",
              "Visualizing Linear Relationships",
              "Plotting the Data",
              "Plotting the Model on the Data",
              "Visually Estimating the Slope & Intercept",
              "Quantifying Linear Relationships",
              "Mean, Deviation, & Standard Deviation",
              "Covariance vs Correlation",
              "Correlation Strength"
           ]
        },
        {
           "title":"\n          Building Linear Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Here we look at the parts that go into building a linear model. Using the concept of a Taylor Series, we focus on the parameters slope and intercept, how they define the model, and how to interpret the them in several applied contexts. We apply a variety of python modules to find the model that best fits the data, by computing the optimal values of slope and intercept, using least-squares, numpy, statsmodels, and scikit-learn.\n  ",
           "parts":[
              "What makes a model linear",
              "Terms in a Model",
              "Model Components",
              "Model Parameters",
              "Interpreting Slope and Intercept",
              "Linear Proportionality",
              "Slope and Rates-of-Change",
              "Intercept and Starting Points",
              "Model Optimization",
              "Residual Sum of the Squares",
              "Minimizing the Residuals",
              "Visualizing the RSS Minima",
              "Least-Squares Optimization",
              "Least-Squares with `numpy`",
              "Optimization with Scipy",
              "Least-Squares with `statsmodels`"
           ]
        },
        {
           "title":"\n          Making Model Predictions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Next we will apply models to real data and make predictions. We will explore some of the most common pit-falls and limitations of predictions, and we evaluate and compare models by quantifying and contrasting several measures of goodness-of-fit, including RMSE and R-squared.\n  ",
           "parts":[
              "Modeling Real Data",
              "Linear Model in Anthropology",
              "Linear Model in Oceanography",
              "Linear Model in Cosmology",
              "The Limits of Prediction",
              "Interpolation: Inbetween Times",
              "Extrapolation: Going Over the Edge",
              "Goodness-of-Fit",
              "RMSE Step-by-step",
              "R-Squared",
              "Standard Error",
              "Variation Around the Trend",
              "Variation in Two Parts"
           ]
        },
        {
           "title":"\n          Estimating Model Parameters\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In our final chapter, we introduce concepts from inferential statistics, and use them to explore how maximum likelihood estimation and bootstrap resampling can be used to estimate linear model parameters. We then apply these methods to make probabilistic statements about our confidence in the model parameters.\n  ",
           "parts":[
              "Inferential Statistics Concepts",
              "Sample Statistics versus Population",
              "Variation in Sample Statistics",
              "Visualizing Variation of a Statistic",
              "Model Estimation and Likelihood",
              "Estimation of Population Parameters",
              "Maximizing Likelihood, Part 1",
              "Maximizing Likelihood, Part 2",
              "Model Uncertainty and Sample Distributions",
              "Bootstrap and Standard Error",
              "Estimating Speed and Confidence",
              "Visualize the Bootstrap",
              "Model Errors and Randomness",
              "Test Statistics and Effect Size",
              "Null Hypothesis",
              "Visualizing Test Statistics",
              "Visualizing the P-Value",
              "Course Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Statistical Thinking in Python (Part 2)"
     ],
     "tracks":[
        "Statistics Fundamentals with Python"
     ]
  },
  {
     "title":"Human Resources Analytics: Predicting Employee Churn in Python",
     "description":"In this course you'll learn how to apply machine learning in the HR domain.",
     "detailDescription":"Among all of the business domains, HR is still the least disrupted. However, the latest developments in data collection and analysis tools and technologies allow for data driven decision-making in all dimensions, including HR. This course will provide a solid basis for dealing with employee data and developing a predictive model to analyze employee turnover.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to HR Analytics\n        ",
           "index":"1",
           "description":"\n    In this chapter you will learn about the problems addressed by HR analytics, as well as will explore a sample HR dataset that will further be analyzed. You will describe and visualize some of the key variables, transform and manipulate the dataset to make it ready for analytics.\n  ",
           "parts":[
              "Introduction and overview",
              "Finding categorical variables",
              "Observing categoricals",
              "Transforming categorical variables",
              "Encoding categories",
              "Getting dummies",
              "Dummy trap",
              "Descriptive Statistics",
              "Correlations in the employee data",
              "Percentage of employees who churn"
           ]
        },
        {
           "title":"\n          Predicting employee turnover\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces one of the most popular classification techniques: the Decision Tree. You will use it to develop an algorithm that predicts employee turnover.\n  ",
           "parts":[
              "Splitting the data",
              "Separating Target and Features",
              "Spliting employee data",
              "Introduction to Decision Tree classification",
              "Computing Gini index",
              "Splitting the tree",
              "Predicting employee churn using decision trees",
              "Fitting the tree to employee data",
              "Checking the accuracy of prediction",
              "Interpretation of the decision tree",
              "Exporting the tree",
              "Interpretation of results"
           ]
        },
        {
           "title":"\n          Evaluating the turnover prediction model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Here, you will learn how to evaluate a model and understand how \"good\" it is. You will compare different trees to choose the best among them.\n  ",
           "parts":[
              "Tuning employee turnover classifier",
              "Pruning the tree",
              "Limiting the sample size",
              "Evaluating the model",
              "Interpreting accuracy metrics",
              "Calculating accuracy metrics: precision",
              "Calculating accuracy metrics: recall",
              "Targeting both leavers and stayers",
              "Calculating the ROC/AUC score",
              "Class Imbalance",
              "Balancing classes",
              "Comparison of Employee attrition models"
           ]
        },
        {
           "title":"\n          Choosing the best turnover prediction model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you will learn how to use cross-validation to avoid overfitting the training data. You will also learn how to know which features are impactful, and which are negligible. Finally, you will use these newly acquired skills to build a better performing Decision Tree!\n  ",
           "parts":[
              "Hyperparameter tuning",
              "Cross-validation using sklearn",
              "Setting up GridSearch parameters",
              "Implementing GridSearch",
              "Important features for predicting attrition",
              "Interpreting importance",
              "Sorting important features",
              "Selecting important features",
              "Develop and test the best model",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Linear Classifiers in Python",
     "description":"In this course you will learn the details of linear classifiers like logistic regression and SVM.",
     "detailDescription":"In this course you'll learn all about using linear classifiers, specifically logistic regression and support vector machines, with scikit-learn. Once you've learned how to apply these methods, you'll dive into the ideas behind them and find out what really makes them tick. At the end of this course you'll know how to train, test, and tune these linear classifiers in Python. You'll also have a conceptual foundation for understanding many other machine learning algorithms.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Applying logistic regression and SVM\n        ",
           "index":"1",
           "description":"\n    In this chapter you will learn the basics of applying logistic regression and support vector machines (SVMs) to classification problems. You'll use the scikit-learn library to fit classification models to real data.\n  ",
           "parts":[
              "scikit-learn refresher",
              "KNN classification",
              "Comparing models",
              "Overfitting",
              "Applying logistic regression and SVM",
              "Running LogisticRegression and SVC",
              "Sentiment analysis for movie reviews",
              "Linear classifiers",
              "Which decision boundary is linear?",
              "Visualizing decision boundaries"
           ]
        },
        {
           "title":"\n          Loss functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will discover the conceptual framework behind logistic regression and SVMs. This will let you delve deeper into the inner workings of these models.\n  ",
           "parts":[
              "Linear classifiers: the coefficients",
              "How models make predictions",
              "Changing the model coefficients",
              "What is a loss function?",
              "The 0-1 loss",
              "Minimizing a loss function",
              "Loss function diagrams",
              "Classification loss functions",
              "Comparing the logistic and hinge losses",
              "Implementing logistic regression"
           ]
        },
        {
           "title":"\n          Logistic regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will delve into the details of logistic regression. You'll learn all about regularization and how to interpret model output.\n  ",
           "parts":[
              "Logistic regression and regularization",
              "Regularized logistic regression",
              "Logistic regression and feature selection",
              "Identifying the most positive and negative words",
              "Logistic regression and probabilities",
              "Getting class probabilities",
              "Regularization and probabilities",
              "Visualizing easy and difficult examples",
              "Multi-class logistic regression",
              "Counting the coefficients",
              "Fitting multi-class logistic regression",
              "Visualizing multi-class logistic regression",
              "One-vs-rest SVM"
           ]
        },
        {
           "title":"\n          Support Vector Machines\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn all about the details of support vector machines. You'll learn about tuning hyperparameters for these models and using kernels to fit non-linear decision boundaries.\n  ",
           "parts":[
              "Support vectors",
              "Support vector definition",
              "Effect of removing examples",
              "Kernel SVMs",
              "GridSearchCV warm-up",
              "Jointly tuning gamma and C with GridSearchCV",
              "Comparing logistic regression and SVM (and beyond)",
              "An advantage of SVMs",
              "An advantage of logistic regression",
              "Using SGDClassifier",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Fundamentals with Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Visualizing Time Series Data in Python",
     "description":"Visualize seasonality, trends and other patterns in your time series data.",
     "detailDescription":"Time series data is omnipresent in the field of Data Science. Whether it is analyzing business trends, forecasting company revenue or exploring customer behavior, every data scientist is likely to encounter time series data at some point during their work. To get you started on working with time series data, this course will provide practical knowledge on visualizing time series data using Python.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction\n        ",
           "index":"1",
           "description":"\n    You will learn how to leverage basic plottings tools in Python, and how to annotate and personalize your time series plots. By the end of this chapter, you will be able to take any static dataset and produce compelling plots of your data.\n  ",
           "parts":[
              "Welcome to the course!",
              "Load your time series data",
              "Test whether your data is of the correct type",
              "Plot your first time series",
              "Your first plot!",
              "Specify plot styles",
              "Display and label plots",
              "Customize your time series plot",
              "Subset time series data",
              "Add vertical and horizontal markers",
              "Add shaded regions to your plot"
           ]
        },
        {
           "title":"\n          Summary Statistics and Diagnostics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will gain a deeper understanding of your time series data by computing summary statistics and plotting aggregated views of your data. \n  ",
           "parts":[
              "Clean your time series data",
              "Find missing values",
              "Handle missing values",
              "Plot aggregates of your data",
              "Display rolling averages",
              "Display aggregated values",
              "Summarize the values in your time series data",
              "Compute numerical summaries",
              "Boxplots and Histograms",
              "Density plots"
           ]
        },
        {
           "title":"\n          Seasonality, Trend and Noise\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will go beyond summary statistics by learning about autocorrelation and partial autocorrelation plots. You will also learn how to automatically detect seasonality, trend and noise in your time series data.\n  ",
           "parts":[
              "Autocorrelation and Partial autocorrelation",
              "Autocorrelation in time series data",
              "Interpret autocorrelation plots",
              "Partial autocorrelation in time series data",
              "Interpret partial autocorrelation plots",
              "Seasonality, trend and noise in time series data",
              "Time series decomposition",
              "Plot individual components",
              "A quick review",
              "Visualize the airline dataset",
              "Analyze the airline dataset",
              "Time series decomposition of the airline dataset"
           ]
        },
        {
           "title":"\n          Work with Multiple Time Series\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the field of Data Science, it is common to be involved in projects where multiple time series need to be studied simultaneously. In this chapter, we will show you how to plot multiple time series at once, and how to discover and describe relationships between multiple time series.\n  ",
           "parts":[
              "Working with more than one time series",
              "Load multiple time series",
              "Visualize multiple time series",
              "Statistical summaries of multiple time series",
              "Plot multiple time series",
              "Define the color palette of your plots",
              "Add summary statistics to your time series plot",
              "Plot your time series on individual plots",
              "Find relationships between multiple time series",
              "Compute correlations between time series",
              "Visualize correlation matrices",
              "Clustered heatmaps"
           ]
        },
        {
           "title":"\n          Case Study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will give you a chance to practice all the concepts covered in the course. You will visualize the unemployment rate in the US from 2000 to 2010.\n  ",
           "parts":[
              "Apply your knowledge to a new dataset",
              "Explore the Jobs dataset",
              "Describe time series data with boxplots",
              "Beyond summary statistics",
              "Plot all the time series in your dataset",
              "Annotate significant events in time series data",
              "Plot monthly and yearly trends",
              "Decompose time series data",
              "Apply time series decomposition to your dataset",
              "Visualize the seasonality of multiple time series",
              "Compute correlations between time series",
              "Correlations between multiple time series",
              "Interpret correlations",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data Visualization with Matplotlib",
        "Manipulating Time Series Data in Python"
     ],
     "tracks":[
        "Time Series with Python"
     ]
  },
  {
     "title":"Python for R Users",
     "description":"This course is for R users who want to get up to speed with Python!",
     "detailDescription":"Python and R have seen immense growth in popularity in the \"Machine Learning Age\". They both are high-level languages that are easy to learn and write. The language you use will depend on your background and field of study and work. R is a language made by and for statisticians, whereas Python is a more general purpose programming language. Regardless of the background, there will be times when a particular algorithm is implemented in one language and not the other, a feature is better documented, or simply, the tutorial you found online uses Python instead of R. In either case, this would require the R user to work in Python to get his/her work done, or try to understand how something is implemented in Python for it to be translated into R. This course helps you cross the R-Python language barrier.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          The Basics\n        ",
           "index":"1",
           "description":"\n    Learn about some of the most important data types (integers, floats, strings, and booleans) and data structures (lists, dictionaries, numpy arrays, and pandas DataFrames) in Python and how they compare to the ones in R. \n  ",
           "parts":[
              "Introduction",
              "Assignment and data types",
              "Arithmetic with strings",
              "Containers",
              "Lists",
              "Dictionaries",
              "Functions, Methods, and Libraries",
              "Methods",
              "NumPy arrays",
              "Pandas DataFrames"
           ]
        },
        {
           "title":"\n          Control flow, Loops, and Functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter covers control flow statements (if-else if-else), for loops and shows you how to write your own functions in Python!\n  ",
           "parts":[
              "Control flow and loops",
              "Control flow",
              "Loops",
              "Functions",
              "Individual binge drinking function",
              "General binge drinking function",
              "Lambda functions",
              "Comprehensions",
              "Mapping functions",
              "List comprehension",
              "Dictionary comprehension"
           ]
        },
        {
           "title":"\n          Pandas\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn more about one of the most important Python libraries, Pandas. In addition to DataFrames, pandas provides several data manipulation functions and methods. \n  ",
           "parts":[
              "Selecting data in pandas",
              "Selecting columns",
              "Selecting rows",
              "Selecting rows and columns",
              "Data types",
              "Integers and floats",
              "Strings",
              "Category",
              "Dates (I)",
              "Dates (II)",
              "Advanced Pandas",
              "Missing values",
              "Groupby",
              "Tidy data"
           ]
        },
        {
           "title":"\n          Plotting\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will learn about the rich ecosystem of visualization libraries in Python. This chapter covers matplotlib, the core visualization library in Python along with the pandas and seaborn libraries. \n  ",
           "parts":[
              "Plotting directly using pandas",
              "Univariate plots in pandas",
              "Bivariate plots in pandas",
              "Seaborn",
              "Univariate plots in seaborn",
              "Bivariate plots in seaborn",
              "Facet plots in seaborn",
              "Matplotlib",
              "Univariate and bivariate plots in matplotlib",
              "Subfigures in matplotlib",
              "Working with axes",
              "Polishing up a figure"
           ]
        },
        {
           "title":"\n          Capstone\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    As a final capstone, you will apply your Python skills on the NYC Flights 2013 dataset.\n  ",
           "parts":[
              "NYC flights data",
              "Load multiple data files",
              "Explore",
              "Visualize",
              "Manipulating data",
              "Recode dates",
              "Groupby aggregates",
              "Plots",
              "Dummy variables",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Writing Functions in R"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Supervised Learning with scikit-learn",
     "description":"Learn how to build and tune predictive models and evaluate how well they'll perform on unseen data.",
     "detailDescription":"Machine learning is the field that teaches machines and computers to learn from existing data to make predictions on new data: Will a tumor be benign or malignant? Which of your customers will take their business elsewhere? Is a particular email spam? In this course, you'll learn how to use Python to perform supervised learning, an essential component of machine learning. You'll learn how to build predictive models, tune their parameters, and determine how well they will perform with unseen data—all while using real world datasets. You'll be using scikit-learn, one of the most popular and user-friendly machine learning libraries for Python.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Classification\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will be introduced to classification problems and learn how to solve them using supervised learning techniques. And you’ll apply what you learn to a political dataset, where you classify the party affiliation of United States congressmen based on their voting records.\n  ",
           "parts":[
              "Supervised learning",
              "Which of these is a classification problem?",
              "Exploratory data analysis",
              "Numerical EDA",
              "Visual EDA",
              "The classification challenge",
              "k-Nearest Neighbors: Fit",
              "k-Nearest Neighbors: Predict",
              "Measuring model performance",
              "The digits recognition dataset",
              "Train/Test Split + Fit/Predict/Accuracy",
              "Overfitting and underfitting"
           ]
        },
        {
           "title":"\n          Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapter, you used image and political datasets to predict binary and multiclass outcomes. But what if your problem requires a continuous outcome? Regression is best suited to solving such problems. You will learn about fundamental concepts in regression and apply them to predict the life expectancy in a given country using Gapminder data.\n  ",
           "parts":[
              "Introduction to regression",
              "Which of the following is a regression problem?",
              "Importing data for supervised learning",
              "Exploring the Gapminder data",
              "The basics of linear regression",
              "Fit & predict for regression",
              "Train/test split for regression",
              "Cross-validation",
              "5-fold cross-validation",
              "K-Fold CV comparison",
              "Regularized regression",
              "Regularization I: Lasso",
              "Regularization II: Ridge"
           ]
        },
        {
           "title":"\n          Fine-tuning your model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Having trained your model, your next task is to evaluate its performance. In this chapter, you will learn about some of the other metrics available in scikit-learn that will allow you to assess your model's performance in a more nuanced manner. Next, learn to optimize your classification and regression models using hyperparameter tuning.\n  ",
           "parts":[
              "How good is your model?",
              "Metrics for classification",
              "Logistic regression and the ROC curve",
              "Building a logistic regression model",
              "Plotting an ROC curve",
              "Precision-recall Curve",
              "Area under the ROC curve",
              "AUC computation",
              "Hyperparameter tuning",
              "Hyperparameter tuning with GridSearchCV",
              "Hyperparameter tuning with RandomizedSearchCV",
              "Hold-out set for final evaluation",
              "Hold-out set reasoning",
              "Hold-out set in practice I: Classification",
              "Hold-out set in practice II: Regression"
           ]
        },
        {
           "title":"\n          Preprocessing and pipelines\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces pipelines, and how scikit-learn allows for transformers and estimators to be chained together and used as a single unit. Preprocessing techniques will be introduced as a way to enhance model performance, and pipelines will tie together concepts from previous chapters.\n  ",
           "parts":[
              "Preprocessing data",
              "Exploring categorical features",
              "Creating dummy variables",
              "Regression with categorical features",
              "Handling missing data",
              "Dropping missing data",
              "Imputing missing data in a ML Pipeline I",
              "Imputing missing data in a ML Pipeline II",
              "Centering and scaling",
              "Centering and scaling your data",
              "Centering and scaling in a pipeline",
              "Bringing it all together I: Pipeline for classification",
              "Bringing it all together II: Pipeline for regression",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Statistical Thinking in Python (Part 1)"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Machine Learning for Everyone",
        "Data Scientist with Python",
        "Machine Learning Fundamentals with Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Introduction to Deep Learning in Python",
     "description":"Learn the fundamentals of neural networks and how to build deep learning models using Keras 2.0.",
     "detailDescription":"Deep learning is the machine learning technique behind the most exciting capabilities in diverse areas like robotics, natural language processing, image recognition, and artificial intelligence, including the famous AlphaGo. In this course, you'll gain hands-on, practical knowledge of how to use deep learning with Keras 2.0, the latest version of a cutting-edge library for deep learning in Python.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basics of deep learning and neural networks\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll become familiar with the fundamental concepts and terminology used in deep learning, and understand why deep learning techniques are so powerful today. You'll build simple neural networks and generate predictions with them.\n  ",
           "parts":[
              "Introduction to  deep learning",
              "Comparing neural network models to classical regression models",
              "Forward  propagation",
              "Coding the forward propagation algorithm",
              "Activation  functions",
              "The Rectified Linear Activation Function",
              "Applying the network to many observations/rows of data",
              "Deeper networks",
              "Forward propagation in a deeper network",
              "Multi-layer neural networks",
              "Representations are learned",
              "Levels of representation"
           ]
        },
        {
           "title":"\n          Optimizing a neural network with backward propagation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to optimize the predictions generated by your neural networks. You'll use a method called backward propagation, which is one of the most important techniques in deep learning. Understanding how it works will give you a strong foundation to build on in the second half of the course.\n  ",
           "parts":[
              "The need  for optimization",
              "Calculating model errors",
              "Understanding how weights change model accuracy",
              "Coding how weight changes affect accuracy",
              "Scaling up to multiple data points",
              "Gradient descent",
              "Calculating slopes",
              "Improving model weights",
              "Making multiple updates to weights",
              "Backpropagation",
              "The relationship between forward and backward propagation",
              "Thinking about backward propagation",
              "Backpropagation in practice",
              "A round of backpropagation"
           ]
        },
        {
           "title":"\n          Building deep learning models with keras\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll use the Keras library to build deep learning models for both regression and classification. You'll learn about the Specify-Compile-Fit workflow that you can use to make predictions, and by the end of the chapter, you'll have all the tools necessary to build deep neural networks.\n  ",
           "parts":[
              "Creating a  keras model",
              "Understanding your data",
              "Specifying a model",
              "Compiling and  fitting a model",
              "Compiling the model",
              "Fitting the model",
              "Classification  models",
              "Understanding your classification data",
              "Last steps in classification models",
              "Using models",
              "Making predictions"
           ]
        },
        {
           "title":"\n          Fine-tuning keras models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to optimize your deep learning models in Keras. Start by learning how to validate your models, then understand the concept of model capacity, and finally, experiment with wider and deeper networks. \n  ",
           "parts":[
              "Understanding  model  optimization",
              "Diagnosing optimization problems",
              "Changing optimization parameters",
              "Model validation",
              "Evaluating model accuracy on validation dataset",
              "Early stopping: Optimizing the optimization",
              "Experimenting with wider networks",
              "Adding layers to a network",
              "Thinking  about model  capacity",
              "Experimenting with model structures",
              "Stepping up  to images",
              "Building your own digit recognition model",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Machine Learning for Everyone",
        "Deep Learning in Python",
        "Machine Learning Fundamentals with Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Unsupervised Learning in Python",
     "description":"Learn how to cluster, transform, visualize, and extract insights from unlabeled datasets using scikit-learn and scipy.",
     "detailDescription":"Say you have a collection of customers with a variety of characteristics such as age, location, and financial history, and you wish to discover patterns and sort them into clusters. Or perhaps you have a set of texts, such as wikipedia pages, and you wish to segment them into categories based on their content. This is the world of unsupervised learning, called as such because you are not guiding, or supervising, the pattern discovery by some prediction task, but instead uncovering hidden structure from unlabeled data. Unsupervised learning encompasses a variety of techniques in machine learning, from clustering to dimension reduction to matrix factorization. In this course, you'll learn the fundamentals of unsupervised learning and implement the essential algorithms using scikit-learn and scipy. You will learn how to cluster, transform, visualize, and extract insights from unlabeled datasets, and end the course by building a recommender system to recommend popular musical artists.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Clustering for dataset exploration\n        ",
           "index":"1",
           "description":"\n    Learn how to discover the underlying groups (or \"clusters\") in a dataset.  By the end of this chapter, you'll be clustering companies using their stock market prices, and distinguishing different species by clustering their measurements.\n  ",
           "parts":[
              "Unsupervised Learning",
              "How many clusters?",
              "Clustering 2D points",
              "Inspect your clustering",
              "Evaluating a clustering",
              "How many clusters of grain?",
              "Evaluating the grain clustering",
              "Transforming features for better clusterings",
              "Scaling fish data for clustering",
              "Clustering the fish data",
              "Clustering stocks using KMeans",
              "Which stocks move together?"
           ]
        },
        {
           "title":"\n          Visualization with hierarchical clustering and t-SNE\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn about two unsupervised learning techniques for data visualization, hierarchical clustering and t-SNE.  Hierarchical clustering merges the data samples into ever-coarser clusters, yielding a tree visualization of the resulting cluster hierarchy.  t-SNE maps the data samples into 2d space so that the proximity of the samples to one another can be visualized.\n  ",
           "parts":[
              "Visualizing hierarchies",
              "How many merges?",
              "Hierarchical clustering of the grain data",
              "Hierarchies of stocks",
              "Cluster labels in hierarchical clustering",
              "Which clusters are closest?",
              "Different linkage, different hierarchical clustering!",
              "Intermediate clusterings",
              "Extracting the cluster labels",
              "t-SNE for 2-dimensional maps",
              "t-SNE visualization of grain dataset",
              "A t-SNE map of the stock market"
           ]
        },
        {
           "title":"\n          Decorrelating your data and dimension reduction\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Dimension reduction summarizes a dataset using its common occuring patterns.  In this chapter, you'll learn about the most fundamental of dimension reduction techniques, \"Principal Component Analysis\" (\"PCA\").  PCA is often used before supervised learning to improve model performance and generalization.  It can also be useful for unsupervised learning.  For example, you'll employ a variant of PCA will allow you to cluster Wikipedia articles by their content!\n  ",
           "parts":[
              "Visualizing the PCA transformation",
              "Correlated data in nature",
              "Decorrelating the grain measurements with PCA",
              "Principal components",
              "Intrinsic dimension",
              "The first principal component",
              "Variance of the PCA features",
              "Intrinsic dimension of the fish data",
              "Dimension reduction with PCA",
              "Dimension reduction of the fish measurements",
              "A tf-idf word-frequency array",
              "Clustering Wikipedia part I",
              "Clustering Wikipedia part II"
           ]
        },
        {
           "title":"\n          Discovering interpretable features\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn about a dimension reduction technique called \"Non-negative matrix factorization\" (\"NMF\") that expresses samples as combinations of interpretable parts.  For example, it expresses documents as combinations of topics, and images in terms of commonly occurring visual patterns.  You'll also learn to use NMF to build recommender systems that can find you similar articles to read, or musical artists that match your listening history!\n  ",
           "parts":[
              "Non-negative matrix factorization (NMF)",
              "Non-negative data",
              "NMF applied to Wikipedia articles",
              "NMF features of the Wikipedia articles",
              "NMF reconstructs samples",
              "NMF learns interpretable parts",
              "NMF learns topics of documents",
              "Explore the LED digits dataset",
              "NMF learns the parts of images",
              "PCA doesn't learn parts",
              "Building recommender systems using NMF",
              "Which articles are similar to 'Cristiano Ronaldo'?",
              "Recommend musical artists part I",
              "Recommend musical artists part II",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Statistical Thinking in Python (Part 1)"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Machine Learning for Everyone",
        "Data Scientist with Python",
        "Machine Learning Fundamentals with Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Case Study: School Budgeting with Machine Learning in Python",
     "description":"Learn how to build a model to automatically classify items in a school budget.",
     "detailDescription":"Data science isn't just for predicting ad-clicks-it's also useful for social impact! This course is a case study from a machine learning competition on DrivenData. You'll explore a problem related to school district budgeting. By building a model to automatically classify items in a school's budget, it makes it easier and faster for schools to compare their spending with other schools. In this course, you'll begin by building a baseline model that is a simple, first-pass approach. In particular, you'll do some natural language processing to prepare the budgets for modeling. Next, you'll have the opportunity to try your own techniques and see how they compare to participants from the competition. Finally, you'll see how the winner was able to combine a number of expert techniques to build the most accurate model.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploring the raw data\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll be introduced to the problem you'll be solving in this course. How do you accurately classify line-items in a school budget based on what that money is being used for? You will explore the raw text and numeric values in the dataset, both quantitatively and visually. And you'll learn how to measure success when trying to predict class labels for each row of the dataset.\n  ",
           "parts":[
              "Introducing the challenge",
              "What category of problem is this?",
              "What is the goal of the algorithm?",
              "Exploring the data",
              "Loading the data",
              "Summarizing the data",
              "Looking  at the  datatypes",
              "Exploring datatypes in pandas",
              "Encode the labels as categorical variables",
              "Counting unique labels",
              "How do  we  measure  success?",
              "Penalizing highly confident wrong answers",
              "Computing log loss with NumPy"
           ]
        },
        {
           "title":"\n          Creating a simple first model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll build a first-pass model. You'll use numeric data only to train the model. Spoiler alert - throwing out all of the text data is bad for performance! But you'll learn how to format your predictions. Then, you'll be introduced to natural language processing (NLP) in order to start working with the large amounts of text in the data.\n  ",
           "parts":[
              "It's  time to build a  model",
              "Setting up a train-test split in scikit-learn",
              "Training a model",
              "Making predictions",
              "Use your model to predict values on holdout data",
              "Writing out your results to a csv for submission",
              "A  very brief  introduction  to NLP",
              "Tokenizing text",
              "Testing your NLP credentials with n-grams",
              "Representing  text  numerically",
              "Creating a bag-of-words in scikit-learn",
              "Combining text columns for tokenization",
              "What's in a token?"
           ]
        },
        {
           "title":"\n          Improving your model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Here, you'll improve on your benchmark model using pipelines. Because the budget consists of both text and numeric data, you'll learn to how build pipielines that process multiple types of data. You'll also explore how the flexibility of the pipeline workflow makes testing different approaches efficient, even in complicated problems like this one!\n  ",
           "parts":[
              "Pipelines, feature & text preprocessing",
              "Instantiate pipeline",
              "Preprocessing numeric features",
              "Text features and feature unions",
              "Preprocessing text features",
              "Multiple types of processing: FunctionTransformer",
              "Multiple types of processing: FeatureUnion",
              "Choosing  a classification  model",
              "Using FunctionTransformer on the main dataset",
              "Add a model to the pipeline",
              "Try a different class of model",
              "Can you adjust the model or parameters to improve accuracy?"
           ]
        },
        {
           "title":"\n          Learning from the experts\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn the tricks used by the competition winner, and implement them yourself using scikit-learn. Enjoy!\n  ",
           "parts":[
              "Learning from the expert: processing",
              "How many tokens?",
              "Deciding what's a word",
              "N-gram range in scikit-learn",
              "Learning  from the expert: a stats trick",
              "Which models of the data include interaction terms?",
              "Implement interaction modeling in scikit-learn",
              "Learning  from the expert:  the winning model",
              "Why is hashing a useful trick?",
              "Implementing the hashing trick in scikit-learn",
              "Build the winning model",
              "What tactics got the winner the best score?",
              "Next steps and the social impact of your work"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Scientist with Python",
        "Machine Learning Fundamentals with Python"
     ]
  },
  {
     "title":"Data Types for Data Science in Python",
     "description":"Consolidate and extend your knowledge of Python data types such as lists, dictionaries, and tuples, leveraging them to solve Data Science problems.",
     "detailDescription":"Have you got your basic Python programming chops down for Data Science but are yearning for more? Then this is the course for you. Herein, you'll consolidate and practice your knowledge of lists, dictionaries, tuples, sets, and date times. You'll see their relevance in working with lots of real data and how to leverage several of them in concert to solve multistep problems, including an extended case study using Chicago metropolitan area transit data. You'll also learn how to use many of the objects in the Python Collections module, which will allow you to store and manipulate your data for a variety of Data Scientific purposes. After taking this course, you'll be ready to tackle many Data Science challenges Pythonically.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Fundamental data types\n        ",
           "index":"1",
           "description":"\n    This chapter will introduce you to the fundamental Python data types - lists, sets, and tuples.  These data containers are critical as they provide the basis for storing and looping over ordered data. To make things interesting, you'll apply what you learn about these types to answer questions about the New York Baby Names dataset!\n  ",
           "parts":[
              "Introduction and lists",
              "Manipulating lists for fun and profit",
              "Looping over lists",
              "Meet the Tuples",
              "Data type usage",
              "Using and unpacking tuples",
              "Making tuples by accident",
              "Sets for unordered and unique data",
              "Finding all the data and the overlapping data between sets",
              "Determining set differences"
           ]
        },
        {
           "title":"\n          Dictionaries - the root of Python\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    At the root of all things Python is a dictionary. Herein, you'll learn how to use them to safely handle data that can viewed in a variety of ways to answer even more questions about the New York Baby Names dataset. You'll explore how to loop through data in a dictionary, access nested data, add new data, and come to appreciate all of the wonderful capabilities of Python dictionaries.\n  ",
           "parts":[
              "Using dictionaries",
              "Creating and looping through dictionaries",
              "Safely finding by key",
              "Dealing with nested data",
              "Altering dictionaries",
              "Adding and extending dictionaries",
              "Popping and deleting from dictionaries",
              "Pythonically using dictionaries",
              "Working with dictionaries more pythonically",
              "Checking dictionaries for data",
              "Working with CSV files",
              "Reading from a file using CSV reader",
              "Creating a dictionary from a file"
           ]
        },
        {
           "title":"\n          Meet the collections module\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The collections module is part of Python's standard library and holds some more advanced data containers. You'll learn how to use the Counter, defaultdict, OrderedDict and namedtuple in the context of answering questions about the Chicago transit dataset.\n  ",
           "parts":[
              "Counting made easy",
              "Using Counter on lists",
              "Finding most common elements",
              "Dictionaries of unknown structure - Defaultdict",
              "Creating dictionaries of an unknown structure",
              "Safely appending to a key's value list",
              "Maintaining Dictionary Order with OrderedDict",
              "Working with OrderedDictionaries",
              "Powerful Ordered popping",
              "What do you mean I don't have any class? Namedtuple",
              "Creating namedtuples for storing data",
              "Leveraging attributes on namedtuples"
           ]
        },
        {
           "title":"\n          Handling Dates and Times\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Handling times can seem daunting at time, but here, you'll dig in and learn how to create datetime objects, print them, look to the past and to the future. Additionally, you'll learn about some third party modules that can make all of this easier. You'll continue to use the Chicago Transit dataset to answer questions about transit times.\n  ",
           "parts":[
              "There and Back Again a DateTime Journey",
              "Strings to DateTimes",
              "Converting to a String",
              "Working with Datetime Components and current time",
              "Pieces of Time",
              "Creating DateTime Objects... Now",
              "Timezones",
              "Time Travel (Adding and Subtracting Time)",
              "Finding a time in the future and from the past",
              "Finding differences in DateTimes",
              "HELP! Libraries to make it easier",
              "Localizing time with pendulum",
              "Humanizing Differences with Pendulum"
           ]
        },
        {
           "title":"\n          Answering Data Science Questions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Time for a case study to reinforce all of your learning so far! You'll use all the containers and data types you've learned about to answer several real world questions about a dataset containing information about crime in Chicago. Have fun!\n  ",
           "parts":[
              "Counting within Date Ranges",
              "Reading your data with CSV Reader and Establishing your Data Containers",
              "Find the Months with the Highest Number of Crimes",
              "Transforming your Data Containers to Month and Location",
              "Find the Most Common Crimes by Location Type by Month in 2016",
              "Dictionaries with Time Windows for Keys",
              "Reading your Data with DictReader and Establishing your Data Containers",
              "Determine the Arrests by District by Year",
              "Unique Crimes by City Block",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[
        "Python Programmer"
     ]
  },
  {
     "title":"Intermediate Network Analysis in Python",
     "description":"Analyze time series graphs, use bipartite graphs, and gain the skills to tackle advanced problems in network analytics.",
     "detailDescription":"Have you taken DataCamp's Introduction to Network Analysis in Python course and are yearning to learn more sophisticated techniques to analyze your networks, whether they be social, transportation, or biological? Then this is the course for you! Herein, you'll build on your knowledge and skills to tackle more advanced problems in network analytics! You'll gain the conceptual and practical skills to analyze evolving time series of networks, learn about bipartite graphs, and how to use bipartite graphs in product recommendation systems. You'll also learn about graph projections, why they're so useful in Data Science, and figure out the best ways to store and load graph data from files. You'll consolidate all of this knowledge in a final chapter case study, in which you'll analyze a forum dataset and come out of this course a Pythonista Network Analyst ninja!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Bipartite graphs & product recommendation systems\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn about bipartite graphs and how they are used in recommendation systems. You will explore the GitHub dataset from the previous course, this time analyzing the underlying bipartite graph that was used to create the graph that you used earlier. Finally, you will get a chance to build the basic components of a recommendation system using the GitHub data!\n  ",
           "parts":[
              "Definitions & basic recap",
              "Exploratory data analysis",
              "Plotting using nxviz",
              "Bipartite graphs",
              "The bipartite keyword",
              "Degree centrality distribution of user nodes",
              "Degree centrality distribution of project nodes",
              "Bipartite graphs and recommendation systems",
              "Shared nodes in other partition",
              "User similarity metric",
              "Find similar users",
              "Recommend repositories"
           ]
        },
        {
           "title":"\n          Graph projections\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will use a famous American Revolution dataset to dive deeper into exploration of bipartite graphs. Here, you will learn how to create the unipartite projection of a bipartite graph, a very useful method for simplifying a complex network for further analysis. Additionally, you will learn how to use matrices to manipulate and analyze graphs - with many computing routines optimized for matrices, you'll be able to analyze many large graphs quickly and efficiently! \n  ",
           "parts":[
              "Concept of  projection",
              "Reading graphs",
              "Computing projection",
              "Plot degree centrality on projection",
              "Bipartite graphs as matrices",
              "Properties of bipartite adjacency matrices.",
              "Compute adjacency matrix",
              "Find shared membership: Transposition",
              "Representing network data with pandas",
              "Make nodelist",
              "Make edgelist"
           ]
        },
        {
           "title":"\n          Comparing graphs & time-dynamic graphs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will delve into the fundamental ways that you can analyze graphs that change over time. You will explore a dataset describing messaging frequency between students, and learn how to visualize important evolving graph statistics.\n  ",
           "parts":[
              "Introduction to graph differences",
              "List of graphs",
              "Graph differences over time",
              "Plot number of edge changes over time",
              "Evolving graph statistics",
              "Number of edges over time",
              "Degree centrality over time",
              "Zooming in & zooming out: Overall graph  summary",
              "Find nodes with top degree centralities",
              "Visualizing connectivity"
           ]
        },
        {
           "title":"\n          Tying it up!\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will apply everything you've learned in the previous three chapters to a forum posting dataset. You will analyze the temporal changes in forum user connectivity patterns, and make visualizations of evolving graph statistics over time. \n  ",
           "parts":[
              "Introduction to  the dataset",
              "Create a graph from the pandas DataFrame",
              "Visualize the degree centrality distribution of the students projection",
              "Visualize the degree centrality distribution of the forums projection",
              "Time based  filtering",
              "Time filter on edges",
              "Visualize filtered graph using nxviz",
              "Time series  analysis",
              "Plot number of posts being made over time",
              "Extract the mean degree centrality day-by-day on the students partition",
              "Find the most popular forums day-by-day: I",
              "Find the most popular forums day-by-day: II",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Network Analysis in Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Natural Language Processing in Python",
     "description":"Learn fundamental natural language processing techniques using Python and how to apply them to extract insights from real-world text data.",
     "detailDescription":"In this course, you'll learn natural language processing (NLP) basics, such as how to identify and separate words, how to extract topics in a text, and how to build your own fake news classifier. You'll also learn how to use basic libraries such as NLTK, alongside libraries which utilize deep learning to solve common NLP problems. This course will give you the foundation to process and parse text as you move forward in your Python learning.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Regular expressions & word tokenization\n        ",
           "index":"1",
           "description":"\n    This chapter will introduce some basic NLP concepts, such as word tokenization and regular expressions to help parse text. You'll also learn how to handle non-English text and more difficult tokenization you might find.\n  ",
           "parts":[
              "Introduction to regular expressions",
              "Which pattern?",
              "Practicing regular expressions: re.split() and re.findall()",
              "Introduction to tokenization",
              "Word tokenization with NLTK",
              "More regex with re.search()",
              "Advanced tokenization with NLTK and regex",
              "Choosing a tokenizer",
              "Regex with NLTK tokenization",
              "Non-ascii tokenization",
              "Charting word length with NLTK",
              "Charting practice"
           ]
        },
        {
           "title":"\n          Simple topic identification\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will introduce you to topic identification, which you can apply to any text you encounter in the wild. Using basic NLP models, you will identify topics from texts based on term frequencies. You'll experiment and compare two simple methods: bag-of-words and Tf-idf using NLTK, and a new library Gensim.\n  ",
           "parts":[
              "Word counts with bag-of-words",
              "Bag-of-words picker",
              "Building a Counter with bag-of-words",
              "Simple text preprocessing",
              "Text preprocessing steps",
              "Text preprocessing practice",
              "Introduction to gensim",
              "What are word vectors?",
              "Creating and querying a corpus with gensim",
              "Gensim bag-of-words",
              "Tf-idf with gensim",
              "What is tf-idf?",
              "Tf-idf with Wikipedia"
           ]
        },
        {
           "title":"\n          Named-entity recognition\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will introduce a slightly more advanced topic: named-entity recognition. You'll learn how to identify the who, what, and where of your texts using pre-trained models on English and non-English text. You'll also learn how to use some new libraries, polyglot and spaCy, to add to your NLP toolbox.\n  ",
           "parts":[
              "Named Entity Recognition",
              "NER with NLTK",
              "Charting practice",
              "Stanford library with NLTK",
              "Introduction to SpaCy",
              "Comparing NLTK with spaCy NER",
              "spaCy NER Categories",
              "Multilingual NER with polyglot",
              "French NER with polyglot I",
              "French NER with polyglot II",
              "Spanish NER with polyglot"
           ]
        },
        {
           "title":"\n          Building a \"fake news\" classifier\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You'll apply the basics of what you've learned along with some supervised machine learning to build a \"fake news\" detector. You'll begin by learning the basics of supervised machine learning, and then move forward by choosing a few important features and testing ideas to identify and classify fake news articles.\n  ",
           "parts":[
              "Classifying fake news using supervised learning with NLP",
              "Which possible features?",
              "Training and testing",
              "Building word count vectors with scikit-learn",
              "CountVectorizer for text classification",
              "TfidfVectorizer for text classification",
              "Inspecting the vectors",
              "Training and testing a classification model with scikit-learn",
              "Text classification models",
              "Training and testing the \"fake news\" model with CountVectorizer",
              "Training and testing the \"fake news\" model with TfidfVectorizer",
              "Simple NLP, complex problems",
              "Improving the model",
              "Improving your model",
              "Inspecting your model"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Scientist with Python",
        "Natural Language Processing in Python"
     ]
  },
  {
     "title":"Building Chatbots in Python",
     "description":"Learn the fundamentals of how to build conversational bots using rule-based systems as well as machine learning.",
     "detailDescription":"Messaging and voice-controlled devices are the next big platforms, and conversational computing has a big role to play in creating engaging augmented and virtual reality experiences. This course will get you started on the path toward building such applications. There are a number of unique challenges to building these kinds of programs, like how do I turn human language into instructions for machines? In this course, you'll tackle this first with rule-based systems and then with machine learning. Some chat systems are designed to be useful, while others are just good fun. You will build one of each and put everything together to make a helpful, friendly chatbot. Once you complete the course, you’ll also learn how to connect your chatbot to Facebook Messenger!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Chatbots 101\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn how to build your first chatbot. After gaining a bit of historical context, you'll set up a basic structure for receiving text and responding to users, and then learn how to add the basic elements of personality. You'll then build rule-based systems for parsing text.\n  ",
           "parts":[
              "Introduction to Conversational Software",
              "EchoBot I",
              "EchoBot II",
              "Creating a personality",
              "Chitchat",
              "Adding variety",
              "ELIZA I: asking questions",
              "Text Munging with regular expressions",
              "ELIZA II: Extracting key phrases",
              "ELIZA III: Pronouns",
              "ELIZA IV: Putting it all together"
           ]
        },
        {
           "title":"\n          Understanding natural language\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Here, you'll use machine learning to turn natural language into structured data using spaCy, scikit-learn, and rasa NLU. You'll start with a refresher on the theoretical foundations and then move onto building models using the ATIS dataset, which contains thousands of sentences from real people interacting with a flight booking system.\n  ",
           "parts":[
              "Understanding Intents and Entities",
              "Intent classification with regex I",
              "Intent classification with regex II",
              "Entity extraction with regex",
              "Word vectors",
              "word vectors with spaCy",
              "Intents and classification",
              "Intent classification with sklearn",
              "Entity extraction",
              "Using spaCy's entity recognizer",
              "Assigning roles using spaCy's parser",
              "Robust language understanding with rasa NLU",
              "Rasa NLU",
              "Data-efficient entity recognition"
           ]
        },
        {
           "title":"\n          Building a virtual assistant\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll build a personal assistant to help you plan a trip. It will be able to respond to questions like \"are there any cheap hotels in the north of town?\" by looking inside a hotel’s database for matching results.\n  ",
           "parts":[
              "Virtual Assistants and accessing data",
              "SQL basics",
              "SQL statements in Python",
              "Exploring a DB with natural language",
              "Creating queries from parameters",
              "Using your custom function to find hotels",
              "Creating SQL from natural language",
              "Incremental slot filling and negation",
              "Refining your search",
              "Basic negation",
              "Filtering with excluded slots"
           ]
        },
        {
           "title":"\n          Dialogue\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Everything you've built so far has statelessly mapped intents to actions and responses. It's amazing how far you can get with that! But to build more sophisticated bots you will always want to add some statefulness. That's what you'll do here, as you build a chatbot that helps users order coffee.\n  ",
           "parts":[
              "Why statefulness is key",
              "Form filling",
              "Asking contextual questions",
              "Dealing with rejection",
              "Asking questions & queuing answers",
              "Pending actions I",
              "Pending actions II",
              "Pending state transitions",
              "Putting it all together I",
              "Putting it all together II",
              "Frontiers of dialogue research",
              "Generating text with neural networks",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Natural Language Processing in Python"
     ],
     "tracks":[
        "Natural Language Processing in Python"
     ]
  },
  {
     "title":"Extreme Gradient Boosting with XGBoost",
     "description":"Learn the fundamentals of gradient boosting and build state-of-the-art machine learning models using XGBoost to solve classification and regression problems.",
     "detailDescription":"Do you know the basics of supervised learning and want to use state-of-the-art models on real-world datasets? Gradient boosting is currently one of the most popular techniques for efficient modeling of tabular datasets of all sizes. XGboost is a very fast, scalable implementation of gradient boosting, with models using XGBoost regularly winning online data science competitions and being used at scale across different industries. In this course, you'll learn how to use this powerful library alongside pandas and scikit-learn to build and tune supervised learning models. You'll work with real-world datasets to solve classification and regression problems.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Classification with XGBoost\n        ",
           "index":"1",
           "description":"\n    This chapter will introduce you to the fundamental idea behind XGBoost—boosted learners. Once you understand how XGBoost works, you'll apply it to solve a common classification problem found in industry: predicting whether a customer will stop being a customer at some point in the future.\n  ",
           "parts":[
              "Welcome to the course!",
              "Which of these is a classification problem?",
              "Which of these is a binary classification problem?",
              "Introducing XGBoost",
              "XGBoost: Fit/Predict",
              "What is a decision tree?",
              "Decision trees",
              "What is Boosting?",
              "Measuring accuracy",
              "Measuring AUC",
              "When should I use XGBoost?",
              "Using XGBoost"
           ]
        },
        {
           "title":"\n          Regression with XGBoost\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    After a brief review of supervised regression, you'll apply XGBoost to the regression task of predicting house prices in Ames, Iowa. You'll learn about the two kinds of base learners that XGboost can use as its weak learners, and review how to evaluate the quality of your regression models.\n  ",
           "parts":[
              "Regression review",
              "Which of these is a regression problem?",
              "Objective (loss) functions and base learners",
              "Decision trees as base learners",
              "Linear base learners",
              "Evaluating model quality",
              "Regularization and base learners in XGBoost",
              "Using regularization in XGBoost",
              "Visualizing individual XGBoost trees",
              "Visualizing feature importances: What features are most important in my dataset"
           ]
        },
        {
           "title":"\n          Fine-tuning your XGBoost model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will teach you how to make your XGBoost models as performant as possible. You'll learn about the variety of parameters that can be adjusted to alter the behavior of XGBoost and how to tune them efficiently so that you can supercharge the performance of your models.\n  ",
           "parts":[
              "Why tune your model?",
              "When is tuning your model a bad idea?",
              "Tuning the number of boosting rounds",
              "Automated boosting round selection using early_stopping",
              "Overview of XGBoost's hyperparameters",
              "Tuning eta",
              "Tuning max_depth",
              "Tuning colsample_bytree",
              "Review of grid search and random search",
              "Grid search with XGBoost",
              "Random search with XGBoost",
              "Limits of grid search and random search",
              "When should you use grid search and random search?"
           ]
        },
        {
           "title":"\n          Using XGBoost in pipelines\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Take your XGBoost skills to the next level by incorporating your models into two end-to-end machine learning pipelines. You'll learn how to tune the most important XGBoost hyperparameters efficiently within a pipeline, and get an introduction to some more advanced preprocessing techniques.\n  ",
           "parts":[
              "Review of pipelines using sklearn",
              "Exploratory data analysis",
              "Encoding categorical columns I: LabelEncoder",
              "Encoding categorical columns II: OneHotEncoder",
              "Encoding categorical columns III: DictVectorizer",
              "Preprocessing within a pipeline",
              "Incorporating XGBoost into pipelines",
              "Cross-validating your XGBoost model",
              "Kidney disease case study I: Categorical Imputer",
              "Kidney disease case study II: Feature Union",
              "Kidney disease case study III: Full pipeline",
              "Tuning XGBoost hyperparameters",
              "Bringing it all together",
              "Final Thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn",
        "Case Study: School Budgeting with Machine Learning in Python"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Importing and Managing Financial Data in Python",
     "description":"In this course, you'll learn how to import and manage financial data in Python using various tools and sources.",
     "detailDescription":"If you want to apply your new 'Python for Data Science' skills to real-world financial data, then this course will give you some very valuable tools. First, you will learn how to get data out of Excel into pandas and back. Then, you will learn how to pull stock prices from various online APIs like Google or Yahoo! Finance, macro data from the Federal Reserve, and exchange rates from OANDA. Finally, you will learn how to calculate returns for various time horizons, analyze stock performance by sector for IPOs, and calculate and summarize correlations.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Importing stock listing data from Excel\n        ",
           "index":"1",
           "description":"\n    \nIn this chapter, you will learn how to import, clean and combine data from Excel workbook sheets into a pandas DataFrame. You will also practice grouping data, summarizing information for categories, and visualizing the result using subplots and heatmaps.\nYou will use data on companies listed on the stock exchanges NASDAQ, NYSE, and AMEX with information on company name, stock symbol, last market capitalization and price, sector or industry group, and IPO year. In Chapter 2, you will build on this data to download and analyze stock price history for some of these companies.\n  ",
           "parts":[
              "Reading, inspecting, and cleaning data from CSV",
              "Import stock listing info from the NASDAQ",
              "How to fix the data import?",
              "Read data using .read_csv() with adequate parsing arguments",
              "Read data from Excel worksheets",
              "Load listing info from a single sheet",
              "Load listing data from two sheets",
              "Combine data from multiple worksheets",
              "Load all listing data and iterate over key-value dictionary pairs",
              "How many companies are listed on the NYSE and NASDAQ?",
              "Automate the loading and combining of data from multiple Excel worksheets"
           ]
        },
        {
           "title":"\n          Importing financial data from the web\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces online data access to Google Finance and the Federal Reserve Data Service through the `pandas` `DataReader`. You will pull data, perform basic manipulations, combine data series, and visualize the results.\n  ",
           "parts":[
              "The DataReader: Access financial data online",
              "Get stock data for a single company",
              "Visualize a stock price trend",
              "Economic data from the Federal Reserve",
              "Visualize the long-term gold price trend",
              "Compare labor market participation and unemployment rates",
              "Compare bond and stock performance",
              "Select stocks and get data from Google Finance",
              "Select the top 5 listed consumer companies",
              "Get the ticker of the largest consumer services company",
              "Get the largest consumer company listed after 1998",
              "Get several stocks & manage a MultiIndex",
              "Get data for the 3 largest financial companies"
           ]
        },
        {
           "title":"\n          Summarizing your data and visualizing the result\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    \nIn this chapter, you will learn how to capture key characteristics of individual variables in simple metrics. As a result, it will be easier to understand the distribution of the variables in your data set: Which values are central to, or typical of your data? Is your data widely dispersed, or rather narrowly distributed around some mid point? Are there outliers? What does the overall distribution look like?\n  ",
           "parts":[
              "Summarize your data with descriptive stats",
              "List the poorest and richest countries worldwide",
              "Global incomes: Central tendency",
              "Describe the distribution of your data with quantiles",
              "Global incomes: Dispersion",
              "Deciles of the global income distribution",
              "Getting all the statistics",
              "Visualize the distribution of your data",
              "Visualizing international income distribution",
              "Growth rates in Brazil, China, and the US",
              "Highlighting values in the distribution",
              "Summarize categorical variables",
              "Companies by sector on all exchanges",
              "Technology IPOs by year on all exchanges"
           ]
        },
        {
           "title":"\n          \nAggregating and describing your data by category\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    \nThis chapter introduces the ability to group data by one or more categorical variables, and to calculate and visualize summary statistics for each caategory. In the process, you will learn to compare company statistics for different sectors and IPO vintages, analyze the global income distribution over time, and learn how to create various statistical charts from the seaborn library.\n  ",
           "parts":[
              "Aggregate your data by category",
              "Median market capitalization by sector",
              "Median market capitalization by IPO year",
              "All summary statistics by sector",
              "More ways to aggregate your data",
              "Company value by exchange and sector",
              "Calculate several metrics by sector and exchange",
              "Summary statistics by category with seaborn",
              "Plot IPO timeline for all exchanges using countplot()",
              "Global median per capita income over time",
              "Calculate several metrics by sector and IPO year",
              "Distributions by category with seaborn",
              "Inflation trends in China, India, and the US",
              "Distribution of inflation rates in China, India, and the US",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[
        "Finance Fundamentals in Python"
     ]
  },
  {
     "title":"Manipulating Time Series Data in Python",
     "description":"In this course you'll learn the basics of working with time series data.",
     "detailDescription":"In this course you'll learn the basics of manipulating time series data. Time series data are data that are indexed by a sequence of dates or times. You'll learn how to use methods built into Pandas to work with this index. You'll also learn how resample time series to change the frequency. This course will also show you how to calculate rolling and cumulative values for times series. Finally, you'll use all your new skills to build a value-weighted stock index from actual stock data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Working with Time Series in Pandas\n        ",
           "index":"1",
           "description":"\n    \nThis chapter lays the foundations to leverage the powerful time series functionality made available by how Pandas represents dates, in particular by the DateTimeIndex. You will learn how to create and manipulate date information and time series, and how to do calculations with time-aware DataFrames to shift your data in time or create period-specific returns.\n  ",
           "parts":[
              "How to use dates & times  with pandas",
              "Your first time series",
              "Indexing & resampling time series",
              "Create a time series of air quality data",
              "Compare annual stock price trends",
              "Set and change time series frequency",
              "Lags, changes, and returns for stock price series",
              "Shifting stock prices across time",
              "Calculating stock price changes",
              "Plotting  multi-period returns"
           ]
        },
        {
           "title":"\n          Basic Time Series Metrics & Resampling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    \nThis chapter dives deeper into the essential time series functionality made available through the pandas DataTimeIndex. It introduces resampling and how to compare different time series by normalizing their start points.\n  ",
           "parts":[
              "Compare time series growth rates",
              "Compare the performance of several asset classes",
              "Comparing stock prices with a benchmark",
              "Plot performance difference vs benchmark index",
              "Changing the time series frequency: resampling",
              "Convert monthly to weekly data",
              "Create weekly from monthly unemployment data",
              "Upsampling & interpolation with .resample()",
              "Use interpolation to create weekly employment data",
              "Interpolate debt/GDP and compare to unemployment",
              "Downsampling & aggregation",
              "Compare weekly, monthly and annual ozone trends for NYC & LA",
              "Compare monthly average stock prices for Facebook and Google",
              "Compare quarterly GDP growth rate and stock returns",
              "Visualize monthly mean, median and standard deviation of S&P500 returns"
           ]
        },
        {
           "title":"\n          Window Functions: Rolling & Expanding Metrics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    \nThis chapter will show you how to use window function to calculate time series metrics for both rolling and expanding windows.\n  ",
           "parts":[
              "Rolling window functions with pandas",
              "Rolling average air quality since 2010 for new york city",
              "Rolling 360-day median & std. deviation for nyc ozone data since 2000",
              "Rolling quantiles for daily air quality in nyc",
              "Expanding window functions with pandas",
              "Cumulative sum vs .diff()",
              "Cumulative return on $1,000 invested in google vs apple I",
              "Cumulative return on $1,000 invested in google vs apple II",
              "Case study:  S&P500 price simulation",
              "Random walk I",
              "Random walk II",
              "Random walk III",
              "Relationships between time series: correlation",
              "Annual return correlations among several stocks"
           ]
        },
        {
           "title":"\n          \nPutting it all together: Building a value-weighted index\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    \nThis chapter combines the previous concepts by teaching you how to create a value-weighted index. This index uses market-cap data contained in the stock exchange listings to calculate weights and 2016 stock price information. Index performance is then compared against benchmarks to evaluate the performance of the index you created.\n  ",
           "parts":[
              "Select index components & import  data",
              "Explore and clean company listing information",
              "Select and inspect index components",
              "Import index component price information",
              "Build a market-cap weighted index",
              "Calculate number of shares outstanding",
              "Create time series of market value",
              "Calculate & plot the composite index",
              "Evaluate index performance",
              "Calculate the contribution of each stock to the index",
              "Compare index performance against benchmark I",
              "Compare index performance against benchmark II",
              "Index correlation & exporting to Excel",
              "Visualize your index constituent correlations",
              "Save your analysis to multiple excel worksheets",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[
        "Finance Fundamentals in Python",
        "Time Series with Python"
     ]
  },
  {
     "title":"Time Series Analysis in Python",
     "description":"In this course you'll learn the basics of analyzing time series data.",
     "detailDescription":"From stock prices to climate data, time series data are found in a wide variety of domains, and being able to effectively work with such data is an increasingly important skill for data scientists. This course will introduce you to time series analysis in Python. After learning about what a time series is, you'll learn about several time series models ranging from autoregressive and moving average models to cointegration models. Along the way, you'll learn how to estimate, forecast, and simulate these models using statistical libraries in Python. You'll see numerous examples of how these models are used, with a particular emphasis on applications in finance.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Correlation and Autocorrelation\n        ",
           "index":"1",
           "description":"\n    In this chapter you'll be introduced to the ideas of correlation and autocorrelation for time series. Correlation describes the relationship between two time series and autocorrelation describes the relationship of a time series with its past values.\n  ",
           "parts":[
              "Introduction to Course",
              "A \"Thin\" Application of Time Series",
              "Merging Time Series With Different Dates",
              "Correlation of Two Time Series",
              "Correlation of Stocks and Bonds",
              "Flying Saucers Aren't Correlated to Flying Markets",
              "Simple Linear Regression",
              "Looking at a Regression's R-Squared",
              "Match Correlation with Regression Output",
              "Autocorrelation",
              "A Popular Strategy Using Autocorrelation",
              "Are Interest Rates Autocorrelated?"
           ]
        },
        {
           "title":"\n          Some Simple Time Series\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll learn about some simple time series models. These include white noise and a random walk.\n  ",
           "parts":[
              "Autocorrelation Function",
              "Taxing Exercise: Compute the ACF",
              "Are We Confident This Stock is Mean Reverting?",
              "White Noise",
              "Can't Forecast White Noise",
              "Random Walk",
              "Generate a Random Walk",
              "Get the Drift",
              "Are Stock Prices a Random Walk?",
              "How About Stock Returns?",
              "Stationarity",
              "Is it Stationary?",
              "Seasonal Adjustment During Tax Season"
           ]
        },
        {
           "title":"\n          Autoregressive (AR) Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll learn about autoregressive, or AR, models for time series. These models use past values of the series to predict the current value.\n  ",
           "parts":[
              "Describe AR Model",
              "Simulate AR(1) Time Series",
              "Compare the ACF for Several AR Time Series",
              "Match AR Model with ACF",
              "Estimating and Forecasting AR Model",
              "Estimating an AR Model",
              "Forecasting with an AR Model",
              "Let's Forecast Interest Rates",
              "Compare AR Model with Random Walk",
              "Choosing the Right Model",
              "Estimate Order of Model: PACF",
              "Estimate Order of Model: Information Criteria"
           ]
        },
        {
           "title":"\n          Moving Average (MA) and ARMA Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll learn about another kind of model, the moving average, or MA, model. You will also see how to combine AR and MA models into a powerful ARMA model.\n  ",
           "parts":[
              "Describe Model",
              "Simulate MA(1) Time Series",
              "Compute the ACF for Several MA Time Series",
              "Match ACF with MA Model",
              "Estimation and Forecasting an MA Model",
              "Estimating an MA Model",
              "Forecasting with MA Model",
              "ARMA  models",
              "High Frequency Stock Prices",
              "More Data Cleaning: Missing Data",
              "Applying an MA Model",
              "Equivalence of AR(1) and MA(infinity)"
           ]
        },
        {
           "title":"\n          Putting It All Together\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will show you how to model two series jointly using cointegration models. Then you'll wrap up with a case study where you look at a time series of temperature data from New York City.\n  ",
           "parts":[
              "Cointegration Models",
              "A Dog on a Leash? (Part 1)",
              "A Dog on a Leash? (Part 2)",
              "Are Bitcoin and Ethereum Cointegrated?",
              "Case Study: Climate Change",
              "Is Temperature a Random Walk (with Drift)?",
              "Getting \"Warmed\" Up: Look at Autocorrelations",
              "Which ARMA Model is Best?",
              "Don't Throw Out That Winter Coat Yet",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating Time Series Data in Python"
     ],
     "tracks":[
        "Time Series with Python"
     ]
  },
  {
     "title":"Parallel Programming with Dask in Python",
     "description":"Learn how to take the Python workflows you currently have and easily scale them up to large datasets without the need for distributed computing environments.",
     "detailDescription":"Python is now well established as a major platform for data analysis and data science. For many data scientists, the largest limitation of Python is that all data must fit into the resident memory of the available workstation. Further, traditionally, Python has only been able to utilize one CPU. Data scientists constantly ask, \"How can I read and process large amounts of data?\" and \"How can I make use of more computational processing resources?\" This course will introduce you to Dask, a flexible parallel computing library for analytic computing. With Dask, you will be able to take the Python workflows you currently have and easily scale them up to large datasets on your workstation without the need to migrate to a distributed computing environment.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Working with Big Data\n        ",
           "index":"1",
           "description":"\n    In this chapter you'll learn how to leverage traditional Python techniques for reading and processing large datasets stored in either a single file or in multiple files. Finally, you'll learn how the Dask library can be used to execute a pipeline of Python functions in parallel with the added goal of being able to process large amounts of data on modest computational resources.\nFor this course, the data set sizes have been reduced so that the exercises can be completed rapidly. Many of these data sets were originally several Gigabytes in size.\n  ",
           "parts":[
              "Understanding Computer Storage & Big Data",
              "How big is my DataFrame?",
              "NumPy transformations",
              "Thinking about Data in Chunks",
              "Filtering WDI data in chunks",
              "Concatenating & plotting WDI data",
              "Managing Data with Generators",
              "Computing percentage of delayed flights",
              "Generating & plotting delayed flights",
              "Delaying Computation with Dask",
              "Building a pipeline with delayed",
              "Computing pipelined results"
           ]
        },
        {
           "title":"\n          Working with Dask Arrays\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we'll explore how we can use `dask.array` to read multiple data sources and perform computations with them as a single data array. We'll learn some advanced uses of NumPy arrays when dealing with high dimensional data that also work on Dask arrays. Finally, we'll examine climate patterns in the US from monthly weather data in the US.\n  ",
           "parts":[
              "Chunking Arrays in Dask",
              "Inspecting a Dask array",
              "Chunking a NumPy array",
              "Timing Dask array computations",
              "Computing with Multidimensional Arrays",
              "Predicting result of broadcasting",
              "Subtracting & broadcasting",
              "Computing aggregations",
              "Analyzing Weather Data",
              "Reading the data",
              "Stacking data & reading climatology",
              "Transforming, aggregating, and plotting"
           ]
        },
        {
           "title":"\n          Working with Dask DataFrames\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The Dask DataFrame is built upon the Pandas DataFrame. Dask provides the ability to scale your Pandas workflows to large data sets stored in either a single file or separated across multiple files. In this chapter you'll learn how to build a pipeline of delayed computation with Dask DataFrame, and you'll use these skills to study how much NYC taxi riders tip their drivers.\n  ",
           "parts":[
              "Using Dask DataFrames",
              "Inspecting a large DataFrame",
              "Building a pipeline of delayed tasks",
              "Grouping & aggregating by year",
              "Timing Dask DataFrame Operations",
              "Preparing the pipeline",
              "Comparing Dask & pandas execution times",
              "Analyzing NYC Taxi Rides",
              "Reading & cleaning files",
              "Filtering & grouping data",
              "Computing & plotting"
           ]
        },
        {
           "title":"\n          Working with Dask Bags for Unstructured Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Datasets that have not already been standardized and provided as CSV files can be challenging to work with. In this chapter you'll use the Dask Bag to read raw text files and perform simple text processing workflows over large datasets in parallel. Conceptually, the Dask Bag is a parallel list that can store any Python datatype with convenient functions that map over all of the elements.\n  ",
           "parts":[
              "Building Dask Bags & Globbing",
              "Inspecting Dask Bags",
              "Reading & counting",
              "Taking one element",
              "Functional Approaches using Dask Bags",
              "What is the preferred way to convert to uppercase?",
              "Splitting by word & count",
              "Filtering on a phrase",
              "Analyzing Congressional Legislation",
              "Loading & mapping from JSON",
              "Filtering vetoed bills",
              "Computing the average bill's lifespan"
           ]
        },
        {
           "title":"\n          Case Study: Analyzing Flight Delays\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you've learned how to utilize Dask to read and process large data sets in parallel, you'll put these skills together to search for correlations between flight delays and reported weather events at selected airports. You'll read files in multiple directories containing flight statistics for selected airports from the Bureau of Transportation Statistics and merge them with daily weather data from wunderground.com into a single Dask DataFrame.\n  ",
           "parts":[
              "Preparing Flight Delay Data",
              "Delaying reading & cleaning",
              "Reading all flight data",
              "Preparing Weather Data",
              "Deferring reading weather data",
              "Building a weather DataFrame",
              "Which city gets the most snow?",
              "Merging & Persisting DataFrames",
              "Persisting merged DataFrame",
              "Finding sources of weather delays",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "pandas Foundations",
        "Manipulating DataFrames with pandas"
     ],
     "tracks":[
        "Python Programmer"
     ]
  },
  {
     "title":"Introduction to PySpark",
     "description":"Learn to implement distributed data management and machine learning in Spark using the PySpark package.",
     "detailDescription":"In this course, you'll learn how to use Spark from Python! Spark is a tool for doing parallel computation with large datasets and it integrates well with Python. PySpark is the Python package that makes the magic happen. You'll use this package to work with data about flights from Portland and Seattle. You'll learn to wrangle this data and build a whole machine learning pipeline to predict whether or not flights will be delayed. Get ready to put some Spark in your Python code and dive into the world of high-performance machine learning!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Getting to know PySpark\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn how Spark manages data and how can you read and write tables from Python.\n  ",
           "parts":[
              "What is Spark, anyway?",
              "Using Spark in Python",
              "Examining The SparkContext",
              "Using DataFrames",
              "Creating a SparkSession",
              "Viewing tables",
              "Are you query-ious?",
              "Pandafy a Spark DataFrame",
              "Put some Spark in your data",
              "Dropping the middle man"
           ]
        },
        {
           "title":"\n          Manipulating data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn about the pyspark.sql module, which provides optimized data queries to your Spark session.\n  ",
           "parts":[
              "Creating columns",
              "SQL in a nutshell",
              "SQL in a nutshell (2)",
              "Filtering Data",
              "Selecting",
              "Selecting II",
              "Aggregating",
              "Aggregating II",
              "Grouping and Aggregating I",
              "Grouping and Aggregating II",
              "Joining",
              "Joining II"
           ]
        },
        {
           "title":"\n          Getting started with machine learning pipelines\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    PySpark has built-in, cutting-edge machine learning routines, along with utilities to create full machine learning pipelines. You'll learn about them in this chapter.\n  ",
           "parts":[
              "Machine Learning Pipelines",
              "Join the DataFrames",
              "Data types",
              "String to integer",
              "Create a new column",
              "Making  a Boolean",
              "Strings and factors",
              "Carrier",
              "Destination",
              "Assemble a vector",
              "Create the pipeline",
              "Test vs Train",
              "Transform the data",
              "Split the data"
           ]
        },
        {
           "title":"\n          Model tuning and selection\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this last chapter, you'll apply what you've learned to create a model that predicts which flights will be delayed.\n  ",
           "parts":[
              "What is logistic regression?",
              "Create the modeler",
              "Cross validation",
              "Create the evaluator",
              "Make a grid",
              "Make the validator",
              "Fit the model(s)",
              "Evaluating binary classifiers",
              "Evaluate the model"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Big Data with PySpark",
        "Data Engineer with Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Case Studies in Statistical Thinking",
     "description":"Take vital steps towards mastery as you apply your statistical thinking skills to real-world data sets and extract actionable insights from them.",
     "detailDescription":"Mastery requires practice. Having completed Statistical Thinking I and II, you developed your probabilistic mindset and the hacker stats skills to extract actionable insights from your data. Your foundation is in place, and now it is time practice your craft. In this course, you will apply your statistical thinking skills, exploratory data analysis, parameter estimation, and hypothesis testing, to two new real-world data sets. First, you will explore data from the 2013 and 2015 FINA World Aquatics Championships, where you will quantify the relative speeds and variability among swimmers. You will then perform a statistical analysis to assess the \"current controversy\" of the 2013 Worlds in which swimmers claimed that a slight current in the pool was affecting result. Second, you will study the frequency and magnitudes of earthquakes around the world. Finally, you will analyze the changes in seismicity in the US state of Oklahoma after the practice of high pressure waste water injection at oil extraction sites became commonplace in the last decade. As you work with these data sets, you will take vital steps toward mastery as you cement your existing knowledge and broaden your abilities to use statistics and Python to make sense of your data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Fish sleep and bacteria growth: A review of Statistical Thinking I and II\n        ",
           "index":"1",
           "description":"\n    To begin, you'll use two data sets from Caltech researchers to rehash the key points of Statistical Thinking I and II to prepare you for the following case studies!\n  ",
           "parts":[
              "Activity of zebrafish and melatonin",
              "EDA: Plot ECDFs of active bout length",
              "Interpreting ECDFs and the story",
              "Bootstrap confidence intervals",
              "Parameter estimation: active bout length",
              "Permutation and bootstrap hypothesis tests",
              "Permutation test: wild type versus heterozygote",
              "Bootstrap hypothesis test",
              "Linear regressions and pairs bootstrap",
              "Assessing the growth rate",
              "Plotting the growth curve"
           ]
        },
        {
           "title":"\n          Analysis of results of the 2015 FINA World Swimming Championships\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will practice your EDA, parameter estimation, and hypothesis testing skills on the results of the 2015 FINA World Swimming Championships.\n  ",
           "parts":[
              "Introduction to swimming data",
              "Graphical EDA of men's 200 free heats",
              "200 m free time with confidence interval",
              "Do swimmers go faster in the finals?",
              "EDA: finals versus semifinals",
              "Parameter estimates of difference between finals and semifinals",
              "How to do the permutation test",
              "Generating permutation samples",
              "Hypothesis test: Do women swim the same way in semis and finals?",
              "How does the performance of swimmers decline over long events?",
              "EDA: Plot all your data",
              "Linear regression of average split time",
              "Hypothesis test: are they slowing down?"
           ]
        },
        {
           "title":"\n          The \"Current Controversy\" of the 2013 World Championships\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Some swimmers said that they felt it was easier to swim in one direction versus another in the 2013 World Championships. Some analysts have posited that there was a swirling current in the pool. In this chapter, you'll investigate this claim!\nReferences - Quartz Media, Washington Post, SwimSwam (and also here), and Cornett, et al.\n  ",
           "parts":[
              "Introduction to the current controversy",
              "A metric for improvement",
              "ECDF of improvement from low to high lanes",
              "Estimation of mean improvement",
              "How should we test the hypothesis?",
              "Hypothesis test: Does lane assignment affect performance?",
              "Did the 2015 event have this problem?",
              "The zigzag effect",
              "Which splits should we consider?",
              "EDA: mean differences between odd and even splits",
              "How does the current effect depend on lane position?",
              "Hypothesis test: can this be by chance?",
              "Recap of swimming analysis"
           ]
        },
        {
           "title":"\n          Statistical seismology and the Parkfield region\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Herein, you'll use your statistical thinking skills to study the frequency and magnitudes of earthquakes. Along the way, you'll learn some basic statistical seismology, including the Gutenberg-Richter law. This exercise exposes two key ideas about data science: 1) As a data scientist, you wander into all sorts of domain specific analyses, which is very exciting. You constantly get to learn. 2) You are sometimes faced with limited data, which is also the case for many of these earthquake studies. You can still make good progress!\n  ",
           "parts":[
              "Introduction to statistical seismology and the Parkfield experiment",
              "Parkfield earthquake magnitudes",
              "Computing the b-value",
              "The b-value for Parkfield",
              "Timing of major earthquakes and the Parkfield sequence",
              "Interearthquake time estimates for Parkfield",
              "When will the next big Parkfield quake be?",
              "How are the Parkfield interearthquake times distributed?",
              "Computing the value of a formal ECDF",
              "Computing the K-S statistic",
              "Drawing K-S replicates",
              "The K-S test for Exponentiality"
           ]
        },
        {
           "title":"\n          Earthquakes and oil mining in Oklahoma\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Of course, earthquakes have a big impact on society, and recently are connected to human activity. In this final chapter, you'll investigate the effect that increased injection of saline wastewater due to oil mining in Oklahoma has had on the seismicity of the region.\n  ",
           "parts":[
              "Variations in earthquake frequency and seismicity",
              "EDA: Plotting earthquakes over time",
              "Estimates of the mean interearthquake times",
              "Hypothesis test: did earthquake frequency change?",
              "How to display your analysis",
              "Earthquake magnitudes in Oklahoma",
              "EDA: Comparing magnitudes before and after 2010",
              "Quantification of the b-values",
              "How should we do a hypothesis test on differences of the b-value?",
              "Hypothesis test: are the b-values different?",
              "What can you conclude from this analysis?",
              "Closing comments"
           ]
        }
     ],
     "prerequistes":[
        "Statistical Thinking in Python (Part 1)",
        "Statistical Thinking in Python (Part 2)"
     ],
     "tracks":[
        "Statistics Fundamentals with Python"
     ]
  },
  {
     "title":"Introduction to Python for Finance",
     "description":"This course introduces Python for financial analysis.",
     "detailDescription":"The financial industry is increasingly adopting Python for general-purpose programming and quantitative analysis, ranging from understanding trading dynamics to risk management systems. This course focuses specifically on introducing Python for financial analysis. Using practical examples, you will learn the fundamentals of Python data structures such as lists and arrays and learn powerful ways to store and manipulate financial data to identify trends.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Welcome to Python\n        ",
           "index":"1",
           "description":"\n    This chapter is an introduction to basics in Python, including how to name variables and various data types in Python.\n  ",
           "parts":[
              "Welcome to Python for Finance!",
              "Why might you use Python in finance?",
              "Run code vs. submit answer",
              "Comments and variables",
              "Printing output",
              "Finding the average revenue",
              "Data types",
              "Creating variables",
              "Determining types",
              "Booleans in Python",
              "Combining data types"
           ]
        },
        {
           "title":"\n          Lists\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces lists in Python and how they can be used to work with data.\n  ",
           "parts":[
              "Lists",
              "Creating lists in Python",
              "Indexing list items",
              "Slicing multiple list elements",
              "Nested lists",
              "Stock up a nested list",
              "Subset a nested list",
              "List methods and functions",
              "Exploring list methods and functions",
              "Using list methods to add data",
              "Finding stock with maximum price"
           ]
        },
        {
           "title":"\n          Arrays in Python\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces packages in Python, specifically the NumPy package and how it can be efficiently used to manipulate arrays.\n  ",
           "parts":[
              "Arrays",
              "Create an array",
              "Elementwise operations on arrays",
              "Subsetting elements from an array",
              "2D arrays and functions",
              "Creating a 2D array",
              "Subsetting 2D arrays",
              "Calculating array stats",
              "Generating a sequence of numbers",
              "Using arrays for analysis",
              "Who's above average?",
              "Who's in health care?"
           ]
        },
        {
           "title":"\n          Visualization in Python\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will be introduced to the Matplotlib package for creating line plots, scatter plots, and histograms.\n  ",
           "parts":[
              "Visualization in Python",
              "Importing matplotlib and pyplot",
              "Adding axis labels and titles",
              "Multiple lines on the same plot",
              "Scatterplots",
              "Histograms",
              "What are applications of histograms in finance?",
              "Is data normally distributed?",
              "Comparing two histograms",
              "Adding a legend"
           ]
        },
        {
           "title":"\n          S&P 100 Case Study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will get a chance to apply all the techniques you learned in the course on the S&P 100 data.\n  ",
           "parts":[
              "Introducing the dataset",
              "Lists",
              "Arrays and NumPy",
              "A closer look at the sectors",
              "Filtering arrays",
              "Summarizing sector data",
              "Plot P/E ratios",
              "Visualizing trends",
              "Histogram of P/E ratios",
              "Identify the outlier",
              "Name the outlier"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Finance Fundamentals in Python"
     ]
  },
  {
     "title":"Analyzing Police Activity with pandas",
     "description":"Explore the Stanford Open Policing Project dataset and analyze the impact of gender on police behavior using pandas.",
     "detailDescription":"Now that you have learned the foundations of pandas, this course will give you the chance to apply that knowledge by answering interesting questions about a real dataset! You will explore the Stanford Open Policing Project dataset and analyze the impact of gender on police behavior. During the course, you will gain more practice cleaning messy data, creating visualizations, combining and reshaping datasets, and manipulating time series data. Analyzing Police Activity with pandas will give you valuable experience analyzing a dataset from start to finish, preparing you for your data science career!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Preparing the data for analysis\n        ",
           "index":"1",
           "description":"\n    Before beginning your analysis, it is critical that you first examine and clean the dataset, to make working with it a more efficient process. In this chapter, you will practice fixing data types, handling missing values, and dropping columns and rows while learning about the Stanford Open Policing Project dataset.\n  ",
           "parts":[
              "Stanford Open Policing Project dataset",
              "Examining the dataset",
              "Dropping columns",
              "Dropping rows",
              "Using proper data types",
              "Finding an incorrect data type",
              "Fixing a data type",
              "Creating a DatetimeIndex",
              "Combining object columns",
              "Setting the index"
           ]
        },
        {
           "title":"\n          Exploring the relationship between gender and policing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Does the gender of a driver have an impact on police behavior during a traffic stop? In this chapter, you will explore that question while practicing filtering, grouping, method chaining, Boolean math, string methods, and more!\n  ",
           "parts":[
              "Do the genders commit different violations?",
              "Examining traffic violations",
              "Comparing violations by gender",
              "Does gender affect who gets a ticket for speeding?",
              "Filtering by multiple conditions",
              "Comparing speeding outcomes by gender",
              "Does gender affect whose vehicle is searched?",
              "Calculating the search rate",
              "Comparing search rates by gender",
              "Adding a second factor to the analysis",
              "Does gender affect who is frisked during a search?",
              "Counting protective frisks",
              "Comparing frisk rates by gender"
           ]
        },
        {
           "title":"\n          Visual exploratory data analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Are you more likely to get arrested at a certain time of day? Are drug-related stops on the rise? In this chapter, you will answer these and other questions by analyzing the dataset visually, since plots can help you to understand trends in a way that examining the raw data cannot.\n  ",
           "parts":[
              "Does time of day affect arrest rate?",
              "Calculating the hourly arrest rate",
              "Plotting the hourly arrest rate",
              "Are drug-related stops on the rise?",
              "Plotting drug-related stops",
              "Comparing drug and search rates",
              "What violations are caught in each district?",
              "Tallying violations by district",
              "Plotting violations by district",
              "How long might you be stopped for a violation?",
              "Converting stop durations to numbers",
              "Plotting stop length"
           ]
        },
        {
           "title":"\n          Analyzing the effect of weather on policing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will use a second dataset to explore the impact of weather conditions on police behavior during traffic stops. You will practice merging and reshaping datasets, assessing whether a data source is trustworthy, working with categorical data, and other advanced skills.\n  ",
           "parts":[
              "Exploring the weather dataset",
              "Plotting the temperature",
              "Plotting the temperature difference",
              "Categorizing the weather",
              "Counting bad weather conditions",
              "Rating the weather conditions",
              "Changing the data type to category",
              "Merging datasets",
              "Preparing the DataFrames",
              "Merging the DataFrames",
              "Does weather affect the arrest rate?",
              "Comparing arrest rates by weather rating",
              "Selecting from a multi-indexed Series",
              "Reshaping the arrest rate data",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "Merging DataFrames with pandas"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Analyst with Python",
        "Data Manipulation with Python",
        "Data Scientist with Python"
     ]
  },
  {
     "title":"Intermediate Data Visualization with Seaborn",
     "description":"Use Seaborn's sophisticated visualization tools to make beautiful, informative visualizations with ease.",
     "detailDescription":"Do you want to make beautiful, informative visualizations with ease? If so, then you must learn seaborn! Seaborn is a visualization library that is an essential part of the python data science toolkit. In this course, you will learn how to use seaborn's sophisticated visualization tools to analyze multiple real world datasets including the American Housing Survey, college tuition data, and guests from the popular television series, The Daily Show. Following this course, you will be able to use seaborn functions to visualize your data in several different formats and customize seaborn plots for your unique needs.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Seaborn Introduction\n        ",
           "index":"1",
           "description":"\n    Introduction to the Seaborn library and where it fits in the Python visualization landscape.\n  ",
           "parts":[
              "Introduction to Seaborn",
              "Seaborn foundation",
              "Reading a csv file",
              "Comparing a histogram and distplot",
              "Using the distribution plot",
              "Plot a histogram",
              "Rug plot and kde shading",
              "Interpreting the results",
              "Regression Plots in Seaborn",
              "Create a regression plot",
              "Plotting multiple variables",
              "Facetting multiple regressions"
           ]
        },
        {
           "title":"\n          Customizing Seaborn Plots\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Overview of functions for customizing the display of Seaborn plots.\n  ",
           "parts":[
              "Using Seaborn Styles",
              "Setting the default style",
              "Comparing styles",
              "Removing spines",
              "Colors in Seaborn",
              "Matplotlib color codes",
              "Using default palettes",
              "Color Palettes",
              "Creating Custom Palettes",
              "Customizing with matplotlib",
              "Using matplotlib axes",
              "Additional plot customizations",
              "Adding annotations",
              "Multiple plots"
           ]
        },
        {
           "title":"\n          Additional Plot Types\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Overview of more complex plot types included in Seaborn.\n  ",
           "parts":[
              "Categorical Plot Types",
              "stripplot() and swarmplot()",
              "boxplots, violinplots and lvplots",
              "barplots, pointplots and countplots",
              "Regression Plots",
              "Regression and residual plots",
              "Regression plot parameters",
              "Binning data",
              "Matrix plots",
              "Creating heatmaps",
              "Customizing heatmaps"
           ]
        },
        {
           "title":"\n          Creating Plots on Data Aware Grids\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Using Seaborn to draw multiple plots in a single figure.\n  ",
           "parts":[
              "Using FacetGrid, factorplot and lmplot",
              "Building a FacetGrid",
              "Using a factorplot",
              "Using a lmplot",
              "Using PairGrid and pairplot",
              "Building a PairGrid",
              "Using a pairplot",
              "Additional pairplots",
              "Using JointGrid and jointplot",
              "Building a JointGrid and jointplot",
              "Jointplots and regression",
              "Complex jointplots",
              "Selecting Seaborn Plots"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[
        "Data Scientist with Python"
     ]
  },
  {
     "title":"Introduction to Data Visualization in Python",
     "description":"Learn complex data visualization techniques using Matplotlib and seaborn.",
     "detailDescription":"This course extends your existing Python skills to provide a stronger foundation in data visualization in Python. You’ll get a broader coverage of the Matplotlib library and an overview of seaborn, a package for statistical graphics. Topics covered include customizing graphics, plotting two-dimensional arrays (like pseudocolor plots, contour plots, and images), statistical graphics (like visualizing distributions and regressions), and working with time series and image data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Customizing plots\n        ",
           "index":"1",
           "description":"\n    Following a review of basic plotting with Matplotlib, this chapter delves into customizing plots using Matplotlib. This includes overlaying plots, making subplots, controlling axes, adding legends and annotations, and using different plot styles.\n  ",
           "parts":[
              "Plotting  multiple graphs",
              "Multiple plots on single axis",
              "Using axes()",
              "Using subplot() (1)",
              "Using subplot() (2)",
              "Customizing axes",
              "Using xlim(), ylim()",
              "Using axis()",
              "Legends,  annotations,  and styles",
              "Using legend()",
              "Using annotate()",
              "Modifying styles"
           ]
        },
        {
           "title":"\n          Plotting 2D arrays\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter showcases various techniques for visualizing two-dimensional arrays. This includes the use, presentation, and orientation of grids for representing two-variable functions followed by discussions of pseudocolor plots, contour plots, color maps, two-dimensional histograms, and images.\n  ",
           "parts":[
              "Working with  2D arrays",
              "Generating meshes",
              "Array orientation",
              "Visualizing  bivariate functions",
              "Contour & filled contour plots",
              "Modifying colormaps",
              "Visualizing  bivariate  distributions",
              "Using hist2d()",
              "Using hexbin()",
              "Working  with images",
              "Loading, examining images",
              "Pseudocolor plot from image data",
              "Extent and aspect",
              "Rescaling pixel intensities"
           ]
        },
        {
           "title":"\n          Statistical plots with Seaborn\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This is a high-level tour of the seaborn plotting library for producing statistical graphics in Python. We’ll cover seaborn tools for computing and visualizing linear regressions, as well as tools for visualizing univariate distributions (like strip, swarm, and violin plots) and multivariate distributions (like joint plots, pair plots, and heatmaps). We’ll also discuss grouping categories in plots.\n  ",
           "parts":[
              "Visualizing  regressions",
              "Simple linear regressions",
              "Plotting residuals of a regression",
              "Higher-order regressions",
              "Grouping linear regressions by hue",
              "Grouping linear regressions by row or column",
              "Visualizing  univariate  distributions",
              "Constructing strip plots",
              "Constructing swarm plots",
              "Constructing violin plots",
              "Visualizing  multivariate  distributions",
              "Plotting joint distributions (1)",
              "Plotting joint distributions (2)",
              "Plotting distributions pairwise (1)",
              "Plotting distributions pairwise (2)",
              "Visualizing correlations with a heatmap"
           ]
        },
        {
           "title":"\n          Analyzing time series and images\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter ties together the skills gained so far through examining time series data and images. You’ll customize plots of stock data, generate histograms of image pixel intensities, and enhance image contrast through histogram equalization.\n  ",
           "parts":[
              "Visualizing  time series",
              "Multiple time series on common axes",
              "Multiple time series slices (1)",
              "Multiple time series slices (2)",
              "Plotting an inset view",
              "Time series  with  moving windows",
              "Plotting moving averages",
              "Plotting moving standard deviations",
              "Interpreting moving statistics",
              "Histogram  equalization  in images",
              "Extracting a histogram from a grayscale image",
              "Cumulative Distribution Function from an image histogram",
              "Equalizing an image histogram",
              "Extracting histograms from a color image",
              "Extracting bivariate histograms from a color image",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Network Analysis in Python",
     "description":"This course will equip you with the skills to analyze, visualize, and make sense of networks using the NetworkX library.",
     "detailDescription":"From online social networks such as Facebook and Twitter to transportation networks such as bike sharing systems, networks are everywhere—and knowing how to analyze them will open up a new world of possibilities for you as a data scientist. This course will equip you with the skills to analyze, visualize, and make sense of networks. You'll apply the concepts you learn to real-world network data using the powerful NetworkX library. With the knowledge gained in this course, you'll develop your network thinking skills and be able to look at your data with a fresh perspective.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to networks\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll be introduced to fundamental concepts in network analytics while exploring a real-world Twitter network dataset. You'll also learn about NetworkX, a library that allows you to manipulate, analyze, and model graph data. You'll learn about the different types of graphs and how to rationally visualize them.\n  ",
           "parts":[
              "Introduction  to Networks",
              "What is a network?",
              "Basics of NetworkX API, using Twitter network",
              "Basic drawing of a network using NetworkX",
              "Queries on a graph",
              "Types of graphs",
              "Checking the un/directed status of a graph",
              "Specifying a weight on edges",
              "Checking whether there are self-loops in the graph",
              "Network  visualization",
              "Visualizing using Matrix plots",
              "Visualizing using Circos plots",
              "Visualizing using Arc plots"
           ]
        },
        {
           "title":"\n          Important nodes\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You'll learn about ways to identify nodes that are important in a network. In doing so, you'll be introduced to more advanced concepts in network analysis as well as the basics of path-finding algorithms. The chapter concludes with a deep dive into the Twitter network dataset which will reinforce the concepts you've learned, such as degree centrality and betweenness centrality.\n  ",
           "parts":[
              "Degree centrality",
              "Compute number of neighbors for each node",
              "Compute degree distribution",
              "Degree centrality distribution",
              "Graph algorithms",
              "Shortest Path I",
              "Shortest Path II",
              "Shortest Path III",
              "Betweenness  centrality",
              "NetworkX betweenness centrality on a social network",
              "Deep dive - Twitter network",
              "Deep dive - Twitter network part II"
           ]
        },
        {
           "title":"\n          Structures\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter is all about finding interesting structures within network data. You'll learn about essential concepts such as cliques, communities, and subgraphs, which will leverage all of the skills you acquired in Chapter 2. By the end of this chapter, you'll be ready to apply the concepts you've learned to a real-world case study.\n  ",
           "parts":[
              "Communities  & cliques",
              "Identifying triangle relationships",
              "Finding nodes involved in triangles",
              "Finding open triangles",
              "Maximal cliques",
              "Finding all maximal cliques of size \"n\"",
              "Subgraphs",
              "Subgraphs I",
              "Subgraphs II"
           ]
        },
        {
           "title":"\n          Bringing it all together\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter of the course, you'll consolidate everything you've learned through an in-depth case study of GitHub collaborator network data. This is a great example of real-world social network data, and your newly acquired skills will be fully tested. By the end of this chapter, you'll have developed your very own recommendation system to connect GitHub users who should collaborate together. \n  ",
           "parts":[
              "Case study!",
              "Characterizing the network (I)",
              "Characterizing the network (II)",
              "Characterizing the network (III)",
              "Case study part II: Visualization",
              "MatrixPlot",
              "ArcPlot",
              "CircosPlot",
              "Case study part III:  Cliques",
              "Finding cliques (I)",
              "Finding cliques (II)",
              "Case Study Part IV:  Final Tasks",
              "Finding important collaborators",
              "Characterizing editing communities",
              "Recommending co-editors who have yet to edit together",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)"
     ],
     "tracks":[
        "Data Science for Everyone"
     ]
  },
  {
     "title":"Image Processing with Keras in Python",
     "description":"Learn powerful techniques for image analysis in Python using deep learning and convolutional neural networks in Keras.",
     "detailDescription":"Deep learning methods use data to train neural network algorithms to do a variety of machine learning tasks, such as classification of different classes of objects. Convolutional neural networks are deep learning algorithms that are particularly powerful for analysis of images. This course will teach you how to construct, train and evaluate convolutional neural networks. You will also learn how to improve their ability to learn from data, and how to interpret the results of the training.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Image Processing With Neural Networks\n        ",
           "index":"1",
           "description":"\n    Convolutional neural networks use the data that is represented in images to learn. In this chapter, we will probe data in images, and we will learn how to use Keras to train a neural network to classify objects that appear in images. \n  ",
           "parts":[
              "Introducing convolutional neural networks",
              "Images as data: visualizations",
              "Images as data: changing images",
              "Classifying images",
              "Using one-hot encoding to represent images",
              "Evaluating a classifier",
              "Classification with Keras",
              "Build a neural network",
              "Compile a neural network",
              "Fitting a neural network model to clothing data",
              "Cross-validation for neural network evaluation"
           ]
        },
        {
           "title":"\n          Using Convolutions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Convolutions are the fundamental building blocks of convolutional neural networks. In this chapter, you will be introducted to convolutions and learn how they operate on image data. You will also see how you incorporate convolutions into Keras neural networks. \n  ",
           "parts":[
              "Convolutions",
              "One dimensional convolutions",
              "Image convolutions",
              "Defining image convolution kernels",
              "Implementing image convolutions in Keras",
              "Convolutional network for image classification",
              "Training a CNN to classify clothing types",
              "Evaluating a CNN with test data",
              "Tweaking your convolutions",
              "Add padding to a CNN",
              "Add strides to a convolutional network",
              "Calculate the size of convolutional layer output"
           ]
        },
        {
           "title":"\n          Going Deeper\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Convolutional neural networks gain a lot of power when they are constructed with multiple layers (deep networks). In this chapter, you will learn how to stack multiple convolutional layers into a deep network. You will also learn how to keep track of the number of parameters, as the network grows, and how to control this number.\n  ",
           "parts":[
              "Going deeper",
              "Creating a deep learning network",
              "Train a deep CNN to classify clothing images",
              "What is special about a deep network?",
              "How many parameters?",
              "How many parameters in a CNN?",
              "How many parameters in a deep CNN?",
              "Pooling operations",
              "Write your own pooling operation",
              "Keras pooling layers",
              "Train a deep CNN with pooling to classify images"
           ]
        },
        {
           "title":"\n          Understanding and Improving Deep Convolutional Networks\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    There are many ways to improve training by neural networks. In this chapter, we will focus on our ability to track how well a network is doing, and explore approaches towards improving convolutional neural networks.\n  ",
           "parts":[
              "Tracking learning",
              "Plot the learning curves",
              "Using stored weights to predict in a test set",
              "Regularization",
              "Adding dropout to your network",
              "Add batch normalization to your network",
              "Interpreting the model",
              "Extracting a kernel from a trained network",
              "Shape of the weights",
              "Visualizing kernel responses",
              "Next steps"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Deep Learning in Python"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Image Processing with Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Biomedical Image Analysis in Python",
     "description":"Learn the fundamentals of exploring, manipulating, and measuring biomedical image data.",
     "detailDescription":"The field of biomedical imaging has exploded in recent years - but for the uninitiated, even loading data can be a challenge! In this introductory course, you'll learn the fundamentals of image analysis using NumPy, SciPy, and Matplotlib. You'll navigate through a whole-body CT scan, segment a cardiac MRI time series, and determine whether Alzheimer’s disease changes brain structure. Even if you have never worked with images before, you will finish the course with a solid toolkit for entering this dynamic field.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploration\n        ",
           "index":"1",
           "description":"\n    Prepare to conquer the Nth dimension! To begin the course, you'll learn how to load, build and navigate N-dimensional images using a CT image of the human chest. You'll also leverage the useful ImageIO package and hone your NumPy and matplotlib skills.\n  ",
           "parts":[
              "Image data",
              "Load images",
              "Metadata",
              "Plot images",
              "N-dimensional images",
              "Stack images",
              "Load volumes",
              "Field of view",
              "Advanced plotting",
              "Generate subplots",
              "Slice 3D images",
              "Plot other views"
           ]
        },
        {
           "title":"\n          Masks and Filters\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Cut image processing to the bone by transforming x-ray images. You'll learn how to exploit intensity patterns to select sub-regions of an array, and you'll use convolutional filters to detect interesting features. You'll also use SciPy's ndimage module, which contains a treasure trove of image processing tools.\n  ",
           "parts":[
              "Image intensities",
              "Intensity",
              "Histograms",
              "Masks",
              "Create a mask",
              "Apply a mask",
              "Tune a mask",
              "Filters",
              "Filter convolutions",
              "Filter functions",
              "Smoothing",
              "Feature detection",
              "Detect edges (1)",
              "Detect edges (2)"
           ]
        },
        {
           "title":"\n          Measurement\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll get to the heart of image analysis: object measurement. Using a 4D cardiac time series, you'll determine if a patient is likely to have heart disease. Along the way, you'll learn the fundamentals of image segmentation, object labeling, and morphological measurement.\n  ",
           "parts":[
              "Objects and labels",
              "Segment the heart",
              "Select objects",
              "Extract objects",
              "Measuring intensity",
              "Measure variance",
              "Separate histograms",
              "Measuring morphology",
              "Calculate volume",
              "Calculate distance",
              "Pinpoint center of mass",
              "Measuring in time",
              "Summarize the time series",
              "Measure ejection fraction"
           ]
        },
        {
           "title":"\n          Image Comparison\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    For the final chapter, you'll need to use your brain... and hundreds of others! Drawing data from more than 400 open-access MR images, you'll learn the basics of registration, resampling, and image comparison. Then, you'll use the extracted measurements to evaluate the effect of Alzheimer's Disease on brain structure.\n  ",
           "parts":[
              "Spatial transformations",
              "Translations",
              "Rotations",
              "Affine transform",
              "Resampling and interpolation",
              "Resampling",
              "Interpolation",
              "Comparing images",
              "Mean absolute error",
              "Intersection of the union",
              "Normalizing measurements",
              "Identifying potential confounds",
              "Testing group differences",
              "Normalizing metrics"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[
        "Image Processing with Python"
     ]
  },
  {
     "title":"Building Recommendation Engines with PySpark",
     "description":"Learn tools and techniques to leverage your own big data to facilitate positive experiences for your users.",
     "detailDescription":"This course will show you how to build recommendation engines using Alternating Least Squares in PySpark. Using the popular MovieLens dataset and the Million Songs dataset, this course will take you step by step through the intuition of the Alternating Least Squares algorithm as well as the code to train, test and implement ALS models on various types of customer data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Recommendations Are Everywhere\n        ",
           "index":"1",
           "description":"\n    This chapter will show you how powerful recommendations engines can be, and provide important distinctions between collaborative-filtering engines and content-based engines as well as the different types of implicit and explicit data that recommendation engines can use. You will also learn a very powerful way to uncover hidden features (latent features) that you may not even know exist in customer datasets.\n  ",
           "parts":[
              "Why learn how to build recommendation engines?",
              "See the power of a recommendation engine",
              "Power of recommendation engines",
              "Recommendation Engine Types and Data Types",
              "Collaborative vs Content-Based Filtering",
              "Collaborative vs Content-Based Filtering Part II",
              "Implicit vs Explicit Data",
              "Ratings data types",
              "Uses for Recommendation Engines",
              "Alternate uses of recommendation engines.",
              "Confirm understanding of latent features"
           ]
        },
        {
           "title":"\n          How does ALS work?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will review basic concepts of matrix multiplication and matrix factorization, and dive into how the Alternating Least Squares algorithm works  and what arguments and hyperparameters it uses to return the best recommendations possible. You will also learn important techniques for properly preparing your data for ALS in Spark.\n  ",
           "parts":[
              "Overview of matrix multiplication",
              "Matrix Multiplication",
              "Matrix Multiplication Part II",
              "Overview of Matrix Factorization",
              "Matrix Factorization",
              "Non-Negative Matrix Factorization",
              "How ALS Alternates to Generate Predictions",
              "Estimating Recommendations",
              "RMSE As ALS Alternates",
              "Data Preparation for Spark ALS",
              "Correct format and distinct users",
              "Assigning  integer id's to movies",
              "ALS Parameters and Hyperparameters",
              "Build Out An ALS Model",
              "Build RMSE Evaluator",
              "Get RMSE"
           ]
        },
        {
           "title":"\n          Recommending Movies\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will be introduced to the MovieLens dataset. You will walk through how to assess it's use for ALS, build out a full cross-validated ALS model on it, and learn how to evaluate it's performance. This will be the foundation for all subsequent ALS models you build using Pyspark.\n  ",
           "parts":[
              "Introduction to the MovieLens dataset",
              "Viewing the MovieLens Data",
              "Calculate sparsity",
              "The GroupBy and Filter Methods",
              "MovieLens Summary Statistics",
              "View Schema",
              "ALS model buildout on MovieLens Data",
              "Create test/train splits and build your ALS model",
              "Tell Spark how to tune your ALS model",
              "Build your cross validation pipeline",
              "Best Model and Best Model Parameters",
              "Model Performance Evaluation",
              "Generate predictions and calculate RMSE",
              "Interpreting the RMSE",
              "Do Recommendations Make Sense"
           ]
        },
        {
           "title":"\n          What if you don't have customer ratings?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In most real-life situations, you won't not have \"perfect\" customer data available to build an ALS model. This chapter will teach you how to use your customer behavior data to \"infer\" customer ratings and use those inferred ratings to build an ALS recommendation engine. Using the Million Songs Dataset as well as another version of the MovieLens dataset, this chapter will show you how to use the data available to you to build a recommendation engine using ALS and evaluate it's performance.\n  ",
           "parts":[
              "Introduction to the Million Songs Dataset",
              "Confirm understanding of implicit rating concepts",
              "MSD summary statistics",
              "Grouped summary statistics",
              "Add Zeros",
              "Evaluating Implicit Ratings Models",
              "Specify ALS Hyperparameters",
              "Build Implicit Models",
              "Running a Cross-Validated Implicit ALS Model",
              "Extracting Parameters",
              "Overview of binary, implicit ratings",
              "Binary Model Performance",
              "Recommendations From Binary Data",
              "Course Recap"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to PySpark",
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Big Data with PySpark"
     ]
  },
  {
     "title":"Advanced NLP with spaCy",
     "description":"Learn how to use spaCy to build advanced natural language understanding systems, using both rule-based and machine learning approaches.",
     "detailDescription":"If you're working with a lot of text, you'll eventually want to know more about it. For example, what's it about? What do the words mean in context? Who is doing what to whom? What companies and products are mentioned? Which texts are similar to each other? In this course, you'll learn how to use spaCy, a fast-growing industry standard library for NLP in Python, to build advanced natural language understanding systems, using both rule-based and machine learning approaches.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Finding words, phrases, names and concepts\n        ",
           "index":"1",
           "description":"\n    This chapter will introduce you to the basics of text processing with spaCy. You'll learn about the data structures, how to work with statistical models, and how to use them to predict linguistic features in your text.\n  ",
           "parts":[
              "Introduction to spaCy",
              "Getting Started",
              "Documents, spans and tokens",
              "Lexical attributes",
              "Statistical models",
              "Model packages",
              "Loading models",
              "Predicting linguistic annotations",
              "Predicting named entities in context",
              "Rule-based matching",
              "Using the Matcher",
              "Writing match patterns"
           ]
        },
        {
           "title":"\n          Large-scale data analysis with spaCy\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll use your new skills to extract specific information from large volumes of text. You'll learn how to make the most of spaCy's data structures, and how to effectively combine statistical and rule-based approaches for text analysis.\n  ",
           "parts":[
              "Data Structures (1)",
              "Strings to hashes",
              "Vocab, hashes and lexemes",
              "Data Structures (2)",
              "Creating a Doc",
              "Docs, spans and entities from scratch",
              "Data structures best practices",
              "Word vectors and similarity",
              "Inspecting word vectors",
              "Comparing similarities",
              "Combining models and rules",
              "Debugging patterns (1)",
              "Debugging patterns (2)",
              "Efficient phrase matching",
              "Extracting countries and relationships"
           ]
        },
        {
           "title":"\n          Processing Pipelines\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will show you to everything you need to know about spaCy's processing pipeline. You'll learn what goes on under the hood when you process a text, how to write your own components and add them to the pipeline, and how to use custom attributes to add your own meta data to the documents, spans and tokens.\n  ",
           "parts":[
              "Processing pipelines",
              "What happens when you call nlp?",
              "Inspecting the pipeline",
              "Custom pipeline components",
              "Use cases for custom components",
              "Simple components",
              "Complex components",
              "Extension attributes",
              "Setting extension attributes (1)",
              "Setting extension attributes (2)",
              "Entities and extensions",
              "Components with extensions",
              "Scaling and performance",
              "Processing streams",
              "Processing data with context",
              "Selective processing"
           ]
        },
        {
           "title":"\n          Training a neural network model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to update spaCy's statistical models to customize them for your use case – for example, to predict a new entity type in online comments. You'll write your own training loop from scratch, and understand the basics of how training works, along with tips and tricks that can make your custom NLP projects more successful.\n  ",
           "parts":[
              "Training and updating models",
              "Purpose of training",
              "Creating training data (1)",
              "Creating training data (2)",
              "The training loop",
              "Setting up the pipeline",
              "Building a training loop",
              "Exploring the model",
              "Training best practices",
              "Good data vs. bad data",
              "Training multiple labels",
              "Wrapping up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Natural Language Processing in Python"
     ],
     "tracks":[
        "Natural Language Processing in Python"
     ]
  },
  {
     "title":"Working with Geospatial Data in Python",
     "description":"This course will show you how to integrate spatial data into your Python Data Science workflow.",
     "detailDescription":"A good proportion of the data out there in the real world is inherently spatial. From the population recorded in the national census, to every shop in your neighborhood, the majority of datasets have a location aspect that you can exploit to make the most of what they have to offer. This course will show you how to integrate spatial data into your Python Data Science workflow. You will learn how to interact with, manipulate and augment real-world data using their geographic dimension. You will learn to read tabular spatial data in the most common formats (e.g. GeoJSON, shapefile, geopackage) and visualize them in maps. You will then combine different sources using their location as the bridge that puts them in relation to each other. And, by the end of the course, you will be able to understand what makes geographic data unique, allowing you to transform and repurpose them in different contexts.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to geospatial vector data\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will be introduced to the concepts of geospatial data, and more specifically of vector data. You will then learn how to represent such data in Python using the GeoPandas library, and the basics to read, explore and visualize such data. And you will exercise all this with some datasets about the city of Paris.\n  ",
           "parts":[
              "Geospatial data",
              "Restaurants in Paris",
              "Adding a background map",
              "Introduction to GeoPandas",
              "Explore the Paris districts (I)",
              "Explore the Paris districts (II)",
              "The Paris restaurants as a GeoDataFrame",
              "Exploring and visualizing spatial data",
              "Visualizing the population density",
              "Using pandas functionality: groupby",
              "Plotting multiple layers"
           ]
        },
        {
           "title":"\n          Spatial relationships\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    One of the key aspects of geospatial data is how they relate to each other in space. In this chapter, you will learn the different spatial relationships, and how to use them in Python to query the data or to perform spatial joins. Finally, you will also learn in more detail about choropleth visualizations.\n  ",
           "parts":[
              "Shapely geometries and spatial relationships",
              "Creating a Point geometry",
              "Shapely's spatial methods",
              "Spatial relationships with GeoPandas",
              "In which district in the Eiffel Tower located?",
              "How far is the closest restaurant?",
              "The spatial join operation",
              "Paris: spatial join of districts and bike stations",
              "Map of tree density by district (1)",
              "Map of tree density by district (2)",
              "Choropleths",
              "Equal interval choropleth",
              "Quantiles choropleth",
              "Compare classification algorithms"
           ]
        },
        {
           "title":"\n          Projecting and transforming geometries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we will take a deeper look into how the coordinates of the geometries are expressed based on their Coordinate Reference System (CRS). You will learn the importance of those reference systems and how to handle it in practice with GeoPandas. Further, you will also learn how to create new geometries based on the spatial relationships, which will allow you to overlay spatial datasets. And you will further practice this all with Paris datasets!\n  ",
           "parts":[
              "Coordinate Reference Systems",
              "Geographic vs projected coordinates",
              "Working with coordinate systems in GeoPandas",
              "Projecting a GeoDataFrame",
              "Projecting a Point",
              "Calculating distance in a projected CRS",
              "Projecting to Web Mercator for using web tiles",
              "Spatial operations: creating new geometries",
              "Exploring a Land Use dataset",
              "Intersection of two polygons",
              "Intersecting a GeoDataFrame with a Polygon",
              "Overlaying spatial datasets",
              "Overlay of two polygon layers",
              "Inspecting the overlay result"
           ]
        },
        {
           "title":"\n          Putting it all together - Artisanal mining sites case study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, we leave the Paris data behind us, and apply everything we have learnt up to now on a brand new dataset about artisanal mining sites in Eastern Congo. Further, you will still learn some new spatial operations, how to apply custom spatial operations, and you will get a sneak preview into raster data.\n  ",
           "parts":[
              "Introduction to the dataset",
              "Import and explore the data",
              "Convert to common CRS and save to a file",
              "Styling a multi-layered plot",
              "Additional spatial operations",
              "Buffer around a point",
              "Mining sites within national parks",
              "Applying custom spatial operations",
              "Finding the name of the closest National Park",
              "Applying a custom operation to each geometry",
              "Working with raster data",
              "Import and plot raster data",
              "Extract information from raster layer",
              "The end"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Supply Chain Analytics in Python",
     "description":"Leverage the power of Python and PuLP to optimize supply chains.",
     "detailDescription":"Supply Chain Analytics transforms supply chain activities from guessing, to ones that makes decision using data. An essential tool in Supply Chain Analytics is using optimization analysis to assist in decision making. According to Deloitte, 79% of organizations with high performing supply chains achieve revenue growth that is significantly above average. This course will introduce you to PuLP, a Linear Program optimization modeler written in Python. Using PuLP, the course will show you how to formulate and answer Supply Chain optimization questions such as where a production facility should be located, how to allocate production demand across different facilities, and more. We will explore the results of the models and their implications through sensitivity and simulation testing. This course will help you position yourself to improve the decision making of a supply chain by leveraging the power of Python and PuLP.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basics of supply chain optimization and PuLP\n        ",
           "index":"1",
           "description":"\n    Linear Programming (LP) is a key technique for Supply Chain Optimization. The PuLP framework is an easy to use tool for working with LP problems and allows the programmer to focus on modeling. In this chapter we learn the basics of LP problems and start to learn how to use the PuLP framework to solve them.\n  ",
           "parts":[
              "Basics of optimization",
              "To LP, or to not IP?",
              "Choosing exercise routine",
              "Basics of PuLP modeling",
              "Getting started with LpProblem()",
              "Simple resource scheduling exercise",
              "Using lpSum",
              "Trying out lpSum",
              "Logistics planning problem"
           ]
        },
        {
           "title":"\n          Modeling in PuLP\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we continue to learn how to model LP and IP problems in PuLP. We touch on how to use PuLP for large scale problems. Additionally, we begin our case study example on how to solve the Capacitated Plant location model.\n  ",
           "parts":[
              "LpVariable dictionary function",
              "Logistics planning problem 2",
              "Traveling salesman problem (TSP)",
              "Example of a scheduling problem",
              "Scheduling workers problem",
              "Preventative maintenance scheduling",
              "Capacitated plant location - case study P1",
              "Review data for case study",
              "Decision variables of case study",
              "Objective function of case study",
              "Logical constraints",
              "Logical constraint exercise",
              "Logical constraints exercise 2"
           ]
        },
        {
           "title":"\n          Solve and evaluate model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter reviews some common mistakes made when creating constraints, and step through the process of solving the model. Once we have a solution to our LP model, how do we know if it is correct? In this chapter we also review a process for reasonableness checking or sanity checking the results. Furthermore, we continue working through our case study example on the Capacitated Plant location model by completing all the needed constraints.\n  ",
           "parts":[
              "Common  constraint mistakes",
              "Dependent demand constraint exercise",
              "Constraint combination exercise",
              "Capacitated plant location - case study P2",
              "Constraints of case study exercise",
              "Adding logical constraint in case study exercise",
              "Solve the PuLP model",
              "Choose the model status exercise",
              "Solving production plan exercise",
              "Sanity checking the solution",
              "Reviewing model specification exercise",
              "Sanity checking exercise"
           ]
        },
        {
           "title":"\n           Sensitivity and simulation testing of model\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In our final chapter we review sensitivity analysis of constraints through shadow prices and slack. Additionally, we look at simulation testing our LP models. These different techniques allow us to answer different business-related questions about our models, such as available capacity and incremental costs. Finally, we complete our case study exercise and focus on using sensitivity analysis and simulation testing to answer questions about our model.\n  ",
           "parts":[
              "Shadow price sensitivity analysis",
              "Sensitivity analysis exercise",
              "Shadow price and slack exercise pt1",
              "Shadow price and slack exercise pt2",
              "Capacitated plant location - case study P3",
              "Solving the model case study exercise",
              "Sensitivity case study exercise",
              "Simulation testing solution",
              "Simulation testing solution exercise",
              "What is the risk exercise",
              "Capacitated plant location - case study P4",
              "Simulation testing capacitated model",
              "Interpreting simulation results exercise",
              "Final summary"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Python for MATLAB Users",
     "description":"Transition from MATLAB by learning some fundamental Python concepts, and diving into the NumPy and Matplotlib packages.",
     "detailDescription":"Python is a versatile programming language that is becoming more and more popular for doing data science. Companies worldwide are using Python to harvest insights from their data and get a competitive edge. This course focuses on helping Matlab users learn to use Python specifically for data science. You will quickly learn how to migrate from Matlab to Python for data analysis and visualization. Learn the fundamentals of Python syntax, how to use numpy arrays to store and manipulate data. You will learn how to use matplotlib to discover trends, correlations, and patterns in real datasets, including bicycle traffic in the city of Seattle and avocado prices across the United States.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          From MATLAB to Python\n        ",
           "index":"1",
           "description":"\n    This chapter gets you started moving from MATLAB to Python. You'll learn about some of the similarities and differences between MATLAB and Python, how to use methods and packages, and be introduced to the popular NumPy package.\n  ",
           "parts":[
              "Welcome to Python!",
              "Basic calculations",
              "Forecasting an investment",
              "Types of variables",
              "Methods and packages",
              "Manipulating strings with methods",
              "Using Python packages",
              "Arrays & plotting",
              "Getting started with NumPy arrays",
              "Plotting bicycle traffic",
              "What predicts animal longevity?"
           ]
        },
        {
           "title":"\n          NumPy and Matplotlib\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will build on your new NumPy knowledge. You will dive into NumPy arrays, the Python analog to matrices by performing mathematical operations and indexing. You will also begin to explore another important Python data structure, the list, and then round out the chapter by making customs plots of your arrays using Matplotlib.\n  ",
           "parts":[
              "Diving into NumPy arrays",
              "Forecasting over time",
              "How much more do organic avocados cost?",
              "Indexing NumPy arrays",
              "Getting columns from NumPy arrays",
              "Bike traffic throughout the week",
              "Filtering arrays with Boolean indexing",
              "Lists",
              "List exploration",
              "Making NumPy arrays from lists",
              "Operating on lists and arrays",
              "Customizing plots",
              "Colors, linestyles, and legends",
              "Encoding data in color & size",
              "Determine engine types in wildlife strikes"
           ]
        },
        {
           "title":"\n          Dictionaries and pandas\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces some powerful Python data structures: the dictionary and the pandas DataFrame. You will learn to create dictionaries by setting key-value pairs, and view then how to view and modify your dictionary. Then you will be introduced to one of the most important packages in the Pythonista's toolbox, pandas. Specifically, you'll focus on the pandas' structure, the DataFrame, which organizes tabular data in an easily accessible way. Lastly, you'll learn how to transform different data types into DataFrames to make your data easier to work with.\n  ",
           "parts":[
              "Dictionaries",
              "Which keys?",
              "Get data out",
              "Modifying dictionaries",
              "Introduction to DataFrames",
              "Explore a pandas DataFrame",
              "Plot data from a DataFrame",
              "Accessing pandas DataFrames",
              "Accessing rows and columns",
              "The many flavors of .iloc",
              "Creating pandas DataFrames",
              "From a CSV file",
              "From a dictionary of lists",
              "From a list of dictionaries"
           ]
        },
        {
           "title":"\n          Control Flow and Loops\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You'll finish the course by controlling your  Python flow. You will learn how to iterate through different Python data structures using for loops. You will also learn about Python contingencies using if, else, and elif and the Python comparison operators (greater than, less than, etc.) that will decide which lines of your code will be executed. Lastly, you'll circle back to NumPy arrays by using Python comparison operators to filter your arrays.\n  ",
           "parts":[
              "Looping through data",
              "Looping through lists",
              "Overlaying multiple plots on a figure",
              "Comparisons and control flow",
              "Counting different types of aircraft",
              "Finding certain rows in a DataFrame",
              "Filtering data",
              "Boolean indexing for quick stats",
              "Booleans for the win!",
              "Boolean indexing and Matplotlib fun",
              "Well done!"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[

     ]
  },
  {
     "title":"Visualizing Geospatial Data in Python",
     "description":"Learn how to make attractive visualizations of geospatial data in Python using the geopandas package and folium maps.",
     "detailDescription":"One of the most important tasks of a data scientist is to understand the relationships between their data's physical location and their geographical context. In this course you'll be learning to make attractive visualizations of geospatial data with the GeoPandas package. You will learn to spatially join datasets, linking data to context. Finally you will learn to overlay geospatial data to maps to add even more spatial cues to your work. You will use several datasets from the City of Nashville's open data portal to find out where the chickens are in Nashville, which neighborhood has the most public art, and more!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Building 2-layer maps : combining polygons and scatterplots\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn how to create a two-layer map by first plotting regions from a shapefile and then plotting location points as a scatterplot.\n  ",
           "parts":[
              "Introduction",
              "Plotting a scatterplot from longitude and latitude",
              "Styling a scatterplot",
              "Extracting longitude and latitude",
              "Plotting chicken locations",
              "Geometries and shapefiles",
              "Creating a GeoDataFrame  & examining the geometry",
              "Plotting shapefile polygons",
              "Scatterplots over polygons",
              "Geometry",
              "Plotting points over polygons - part 1",
              "Plotting points over polygons - part 2"
           ]
        },
        {
           "title":"\n          Creating and joining GeoDataFrames\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You'll work with GeoJSON to create polygonal plots, learn about projections and coordinate reference systems, and get practice spatially joining data in this chapter.\n  ",
           "parts":[
              "GeoJSON and plotting with geopandas",
              "Working with GeoJSON",
              "Colormaps",
              "Map Nashville neighborhoods",
              "Projections and coordinate reference systems",
              "Changing coordinate reference systems",
              "Construct a GeoDataFrame from a DataFrame",
              "Spatial joins",
              "Spatial join practice",
              "Finding the neighborhood with the most public art",
              "Aggregating points within polygons",
              "Plotting the Urban Residents neighborhood and art"
           ]
        },
        {
           "title":"\n          GeoSeries and  folium\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    First you will learn to get information about the geometries in your data with three different GeoSeries attributes and methods. Then you will learn to create a street map layer using folium.\n  ",
           "parts":[
              "GeoSeries attributes and methods I",
              "Find the area of the Urban Residents neighborhood",
              "GeoSeries attributes and methods II",
              "The center of the Urban Residents neighborhood",
              "Prepare to calculate distances",
              "Art distances from neighborhood center",
              "Street maps with folium",
              "Create a folium location from the urban centroid",
              "Create a folium map of downtown Nashville",
              "Folium street map of the downtown neighborhood",
              "Creating markers and popups in folium",
              "Adding markers for the public art",
              "Troubleshooting data issues",
              "A map of downtown art"
           ]
        },
        {
           "title":"\n          Creating a choropleth building permit density in Nashville\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about a special map called a choropleth. Then you will learn and practice building choropleths using two different packages: geopandas and folium.\n  ",
           "parts":[
              "What is a choropleth?",
              "Finding counts from a spatial join",
              "Council district areas and permit counts",
              "Calculating a normalized metric",
              "Choropleths with geopandas",
              "Geopandas choropleths",
              "Area in km squared, geometry in decimal degrees",
              "Spatially joining and getting counts",
              "Building a polished Geopandas choropleth",
              "Choropleths with folium",
              "Folium choropleth",
              "Folium choropleth with markers and popups",
              "Closing thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating DataFrames with pandas",
        "Introduction to Data Visualization with Matplotlib"
     ],
     "tracks":[
        "Data Visualization with Python"
     ]
  },
  {
     "title":"Statistical Simulation in Python",
     "description":"Learn to solve increasingly complex problems using simulations to generate and analyze data.",
     "detailDescription":"Simulations are a class of computational algorithms that use the relatively simple idea of random sampling to solve increasingly complex problems. Although they have been around for ages, they have gained in popularity recently due to the rise in computational power and have seen applications in multiple domains including Artificial Intelligence, Physics, Computational Biology and Finance just to name a few. Students will use simulations to generate and analyze data over different probability distributions using the important NumPy package. This course will give students hands-on experience with simulations using simple, real-world applications.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basics of randomness & simulation\n        ",
           "index":"1",
           "description":"\n    This chapter gives you the tools required to run a simulation. We'll start with a review of random variables and probability distributions. We will then learn how to run a simulation by first looking at a simulation workflow and then recreating it in the context of a game of dice. Finally, we will learn how to use simulations for making decisions.\n  ",
           "parts":[
              "Introduction to random variables",
              "np.random.choice()",
              "Poisson random variable",
              "Shuffling a deck of cards",
              "Simulation basics",
              "Throwing a fair die",
              "Throwing two fair dice",
              "Simulating the dice game",
              "Using simulation for decision-making",
              "Simulating one lottery drawing",
              "Should we buy?",
              "Calculating a break-even lottery price"
           ]
        },
        {
           "title":"\n          Probability & data generation process\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter provides a basic introduction to probability concepts and a hands-on understanding of the data generating process. We'll look at a number of examples of modeling the data generating process and will conclude with modeling an eCommerce advertising simulation.\n  ",
           "parts":[
              "Probability basics",
              "Queen and spade",
              "Two of a kind",
              "Game of thirteen",
              "More probability concepts",
              "The conditional urn",
              "Birthday problem",
              "Full house",
              "Data generating process",
              "Driving test",
              "National elections",
              "Fitness goals",
              "eCommerce Ad Simulation",
              "Sign up Flow",
              "Purchase Flow",
              "Probability of losing money"
           ]
        },
        {
           "title":"\n          Resampling methods\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we will get a brief introduction to resampling methods and their applications. We will get a taste of bootstrap resampling, jackknife resampling, and permutation testing. After completing this chapter, students will be able to start applying simple resampling methods for data analysis.\n  ",
           "parts":[
              "Introduction to resampling methods",
              "Sampling with replacement",
              "Probability example",
              "Bootstrapping",
              "Running a simple bootstrap",
              "Non-standard estimators",
              "Bootstrapping regression",
              "Jackknife resampling",
              "Basic jackknife estimation - mean",
              "Jackknife confidence interval for the median",
              "Permutation testing",
              "Generating a single permutation",
              "Hypothesis testing - Difference of means",
              "Hypothesis testing - Non-standard statistics"
           ]
        },
        {
           "title":"\n          Advanced Applications of Simulation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, students will be introduced to some basic and advanced applications of simulation to solve real-world problems. We'll work through a business planning problem, learn about Monte Carlo Integration, Power Analysis with simulation and conclude with a financial portfolio simulation. After completing this chapter, students will be ready to apply simulation to solve everyday problems.\n  ",
           "parts":[
              "Simulation for Business Planning",
              "Modeling Corn Production",
              "Modeling Profits",
              "Optimizing Costs",
              "Monte Carlo Integration",
              "Integrating a Simple Function",
              "Calculating the value of pi",
              "Simulation for Power Analysis",
              "Factors influencing Statistical Power",
              "Power Analysis - Part I",
              "Power Analysis - Part II",
              "Applications in Finance",
              "Portfolio Simulation - Part I",
              "Portfolio Simulation - Part II",
              "Portfolio Simulation - Part III",
              "Wrap Up"
           ]
        }
     ],
     "prerequistes":[
        "Statistical Thinking in Python (Part 2)"
     ],
     "tracks":[
        "Statistics Fundamentals with Python"
     ]
  },
  {
     "title":"Web Scraping in Python",
     "description":"Learn to retrieve and parse information from the internet using the Python library scrapy.",
     "detailDescription":"The ability to build tools capable of retrieving and parsing information stored across the internet has been and continues to be valuable in many veins of data science. In this course, you will learn to navigate and parse html code, and build tools to crawl websites automatically. Although our scraping will be conducted using the versatile Python library scrapy, many of the techniques you learn in this course can be applied to other popular Python libraries as well, including BeautifulSoup and Selenium. Upon the completion of this course, you will have a strong mental model of html structure, will be able to build tools to parse html code and access desired information, and create a simple scrapy spiders to crawl the web at scale.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to HTML\n        ",
           "index":"1",
           "description":"\n    Learn the structure of HTML. We begin by explaining why web scraping can be a valuable addition to your data science toolbox and then delving into some basics of HTML. We end the chapter by giving a brief introduction on XPath notation, which is used to navigate the elements within HTML code.\n  ",
           "parts":[
              "Web Scraping Overview",
              "Web-scraping is not nonsense!",
              "HyperText Markup Language",
              "HTML tree wordy navigation",
              "From Tree to HTML",
              "Attributes",
              "Keep it Classy",
              "Finding href",
              "Crash Course in XPath",
              "Where am I?",
              "It's Time to P",
              "A classy span"
           ]
        },
        {
           "title":"\n          XPaths and Selectors\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Leverage XPath syntax to explore scrapy selectors. Both of these concepts will move you towards being able to scrape an HTML document.\n  ",
           "parts":[
              "XPathology",
              "Counting Elements in the Wild",
              "Body Appendages",
              "Choose DataCamp!",
              "Off the Beaten XPath",
              "Where it's @",
              "Check your Class",
              "Hyper(link) Active",
              "Secret Links",
              "Selector Objects",
              "XPath Chaining",
              "Divvy Up This Exercise",
              "The Source of the Source",
              "Course Class by Inspection",
              "Requesting a Selector"
           ]
        },
        {
           "title":"\n          CSS Locators, Chaining, and Responses\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn CSS Locator syntax and begin playing with the idea of chaining together CSS Locators with XPath. We also introduce Response objects, which behave like Selectors but give us extra tools to mobilize our scraping efforts across multiple websites. \n  ",
           "parts":[
              "From XPath to CSS",
              "The (X)Path to CSS Locators",
              "Get an \"a\" in this Course",
              "The CSS Wildcard",
              "CSS Attributes and Text Selection",
              "You've been `href`ed",
              "Top Level Text",
              "All Level Text",
              "Respond Please!",
              "Reveal By Response",
              "Responding with Selectors",
              "Selecting from a Selection",
              "Survey",
              "Titular",
              "Scraping with Children"
           ]
        },
        {
           "title":"\n          Spiders\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn to create web crawlers with scrapy. These scrapy spiders will crawl the web through multiple pages, following links to scrape each of those pages automatically according to the procedures we've learned in the previous chapters.\n  ",
           "parts":[
              "Your First Spider",
              "Inheriting the Spider",
              "Hurl the URLs",
              "Start Requests",
              "Self Referencing is Classy",
              "Starting with Start Requests",
              "Parse and Crawl",
              "Pen Names",
              "Crawler Time",
              "Capstone",
              "Time to Run",
              "DataCamp Descriptions",
              "Capstone Crawler",
              "The Finale"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[
        "Importing & Cleaning Data with Python",
        "Python Programmer"
     ]
  },
  {
     "title":"Financial Forecasting in Python",
     "description":"Step into the role of CFO and learn how to advise a board of directors on key metrics while building a financial forecast.",
     "detailDescription":"In Financial Forecasting in Python, you will step into the role of CFO and learn how to advise a board of directors on key metrics while building a financial forecast, the basics of income statements and balance sheets, and cleaning messy financial data. During the course, you will examine real-life datasets from Netflix, Tesla, and Ford, using the pandas package. Following the course, you will be able to calculate financial metrics, work with assumptions and variances, and build your own forecast in Python!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Income statements\n        ",
           "index":"1",
           "description":"\n    In this chapter, we will learn the basics of financial statements, with a specific focus on the income statement, which provides details on our sales, costs, and profits. We will learn how to calculate profitability metrics and finish off what we have learned by building our profit forecast for Tesla!\n  ",
           "parts":[
              "Introduction to financial statements",
              "Calculating gross profit",
              "Calculating net profit",
              "Elements within net profit & gross profit",
              "Calculating sales & Cost of Goods Sold (COGS)",
              "Calculating sales",
              "Forecasting sales with a discount",
              "Calculating COGS",
              "Calculating the break-even point",
              "Working with raw forecast datasets",
              "Tesla income statement",
              "Forecasting profit for Tesla"
           ]
        },
        {
           "title":"\n          Balance sheet and forecast ratios\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we will learn a bit more about the balance sheet, covering assets and liabilities and specific ratios to help evaluate the financial health and efficiency of a company, as well as how these ratios can assist us in building a great forecast.\n  ",
           "parts":[
              "Introduction to the balance sheet",
              "Calculating accounts receivable (debtors)",
              "Bad debts",
              "Calculating accounts payable (creditors)",
              "Understanding accounts payable and receivable",
              "Balance sheet efficiency ratios - Part 1",
              "Debtor days ratio",
              "Days payable outstanding",
              "Balance sheet efficiency ratios - Part 2",
              "Days in inventory and asset turnover ratio",
              "Understanding ratios",
              "Calculating balance sheet ratios for Ford",
              "Forecasting the balance sheet for Ford"
           ]
        },
        {
           "title":"\n          Formatting raw data, managing dates and financial periods\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We have gotten a basic understanding of income statements and balance sheets. However, consolidating data for forecasting is complex, so in this chapter, we will look at some basic tools to help solve some of the complexities specifically relating to finance - working with dates and different financial periods, and formatting our raw data into the correct format for financial forecasting.\n  ",
           "parts":[
              "Financial periods and how to work with them",
              "Converting quarters into months",
              "Merging months into quarters",
              "The datetime library",
              "Working with the datetime library",
              "Converting date formats - simple",
              "Converting date formats - explicit",
              "Tips and tricks when working with datasets",
              "Working with datasets - month totals",
              "Working with datasets - combining datasets",
              "Working with datasets - exporting data"
           ]
        },
        {
           "title":"\n          Assumptions and variances in forecasts\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we will be exploring two more aspects to creating a good forecast. First, we will look at assumptions, what drives them and what happens when an assumption changes? Next, we will look at variances, as a forecast is built at one point in time, but what happens when the actual results do not correspond to our forecast? We need to build a sensitive forecast that can be sensitive to changes in both assumptions and take into account variances, and this is what we will explore in this chapter.\n  ",
           "parts":[
              "Building sensitive forecast models",
              "Weighted probability",
              "Market sentiment",
              "Dependencies and sensitivity",
              "Assigning dependencies for sales and COGS",
              "Building a sensitivity analysis for gross profit",
              "Assigning dependencies for expenses",
              "Build a sensitivity analysis for the net profit",
              "Working with variances in the forecast",
              "Building an alternate forecast",
              "Building a gap analysis between forecasts",
              "Setting dependencies for Netflix",
              "Calculating an alternative forecast for Netflix"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python",
        "Intermediate Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Intermediate Predictive Analytics in Python",
     "description":"Learn how to prepare and organize your data for predictive analytics.",
     "detailDescription":"Building good models only succeeds if you have a decent base table to start with. In this course you will learn how to construct a good base table, create variables and prepare your data for modeling. We finish with advanced topics on the matter.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Crucial base table concepts\n        ",
           "index":"1",
           "description":"\n    In this chapter you will learn how to construct the foundations of your base table, namely the population and the target.\n  ",
           "parts":[
              "The basetable timeline",
              "Timeline violations",
              "Available data",
              "Timeline violation",
              "The population",
              "Select the relevant population",
              "A timeline compliant population",
              "Removing duplicate objects",
              "The target",
              "Calculate an event target",
              "Calculate an aggregated target"
           ]
        },
        {
           "title":"\n          Creating variables\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will learn how to add variables to the base table that you can use to predict the target.\n  ",
           "parts":[
              "Adding fixed variables",
              "Selecting the right value",
              "Adding age",
              "Adding the donor segment",
              "Adding living place",
              "Adding aggregated variables",
              "Selecting the appropriate date",
              "Maximum value last year",
              "Recency of donations",
              "Adding evolutions",
              "Ratio of last month's and last year's average",
              "Absolute difference between two years",
              "Using evolution variables",
              "Performance of evolution variables",
              "Meaning of evolution"
           ]
        },
        {
           "title":"\n          Data preparation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Once you derived variables from the raw data, it is time to clean the data and prepare it for modeling. In this Chapter we discuss the steps that need to be taken to make your data modeling-ready.\n  ",
           "parts":[
              "Creating dummies",
              "Creating a dummy from a two-category variable",
              "Creating dummies from a many-categories variable",
              "Missing values",
              "How to replace missing values",
              "Creating a missing value dummy",
              "Replace missing values with the median value",
              "Replace missing values with a fixed value",
              "Handling outliers",
              "Influence of outliers on predictive models",
              "Handle outliers with winsorization",
              "Handle outliers with standard deviation",
              "Transformations",
              "Interactions",
              "Square root transformation",
              "Adding interactions to the basetable"
           ]
        },
        {
           "title":"\n          Advanced base table concepts\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In some cases, the target or variables change heavily with the seasons. You will learn how you can deal with seasonality by adding different snapshots to the base table.\n  ",
           "parts":[
              "Seasonality",
              "Seasonality or not",
              "Detecting seasonality",
              "The effect of seasonality",
              "Using multiple snapshots",
              "Target values",
              "Calculating snapshot targets",
              "Calculating aggregated variables",
              "Stacking basetables",
              "The timegap",
              "Events during the timegap",
              "Calculating aggregated variables with timegap",
              "Adding age with timegap",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Predictive Analytics in Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Customer Segmentation in Python",
     "description":"Learn how to segment customers in Python.",
     "detailDescription":"The most successful companies today are the ones that know their customers so well that they can anticipate their needs. Data analysts play a key role in unlocking these in-depth insights, and segmenting the customers to better serve them. In this course, you will learn real-world techniques on customer segmentation and behavioral analytics, using a real dataset containing anonymized customer transactions from an online retailer. You will first run cohort analysis to understand customer trends. You will then learn how to build easy to interpret customer segments. On top of that, you will prepare the segments you created, making them ready for machine learning. Finally, you will make your segments more powerful with k-means clustering, in just few lines of code! By the end of this course, you will be able to apply practical customer behavioral analytics and segmentation techniques.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Cohort Analysis\n        ",
           "index":"1",
           "description":"\n    In this first chapter, you will learn about cohorts and how to analyze them. You will create your own customer cohorts, get some metrics and visualize your results.\n  ",
           "parts":[
              "Introduction to Cohort Analysis",
              "How many customers acquired?",
              "Cohort Analysis",
              "Assign daily acquisition cohort",
              "Calculate time offset in days - part 1",
              "Calculate time offset in days - part 2",
              "Cohort Metrics",
              "Customer retention",
              "Calculate retention rate from scratch",
              "Calculate average price",
              "Visualizing cohort analysis",
              "Visualize average quantity metric"
           ]
        },
        {
           "title":"\n          Recency, Frequency, Monetary Value analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this second chapter, you will learn about customer segments. Specifically, you will get exposure to recency, frequency and monetary value, create customer segments based on these concepts, and analyze your results.\n  ",
           "parts":[
              "Recency, Frequency, Monetary (RFM) segmentation",
              "Calculate Spend quartiles (q=4)",
              "Calculate Recency deciles (q=4)",
              "Calculating RFM metrics",
              "Largest Frequency value",
              "Calculate RFM values",
              "Building RFM segments",
              "Calculate 3 groups for Recency and Frequency",
              "Calculate RFM Score",
              "Analyzing RFM table",
              "Find average value for RFM Score segment",
              "Creating custom segments",
              "Analyzing custom segments"
           ]
        },
        {
           "title":"\n          Data pre-processing for clustering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Once you created some segments, you want to make predictions. However, you first need to master practical data preparation methods to ensure your k-means clustering algorithm will uncover well-separated, sensible segments.\n  ",
           "parts":[
              "Data pre-processing",
              "Assumptions of k-means",
              "Calculate statistics of variables",
              "Managing skewed variables",
              "Detect skewed variables",
              "Manage skewness",
              "Centering and scaling data",
              "Center and scale manually",
              "Center and scale with StandardScaler()",
              "Pre-processing pipeline",
              "Visualize RFM distributions",
              "Pre-process RFM data",
              "Visualize the normalized variables"
           ]
        },
        {
           "title":"\n          Customer Segmentation with K-means \n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you will use the data you pre-processed in Chapter 3 to identify customer clusters based on their recency, frequency, and monetary value.\n  ",
           "parts":[
              "Practical implementation of k-means clustering",
              "Run KMeans",
              "Assign labels to raw data",
              "Choosing the number of clusters",
              "Calculate sum of squared errors",
              "Plot sum of squared errors",
              "Profile and interpret segments",
              "Prepare data for the snake plot",
              "Visualize snake plot",
              "Calculate relative importance of each attribute",
              "Plot relative importance heatmap",
              "End-to-end segmentation solution",
              "Pre-process data",
              "Calculate and plot sum of squared errors",
              "Build 4-cluster solution",
              "Analyze the segments",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating DataFrames with pandas",
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Marketing Analytics with Python"
     ]
  },
  {
     "title":"Big Data Fundamentals with PySpark",
     "description":"Learn the fundamentals of working with big data with PySpark.",
     "detailDescription":"There's been a lot of buzz about Big Data over the past few years, and it's finally become mainstream for many companies. But what is this Big Data? This course covers the fundamentals of Big Data via PySpark. Spark is “lightning fast cluster computing\" framework for Big Data. It provides a general data processing platform engine and lets you run programs up to 100x faster in memory, or 10x faster on disk, than Hadoop. You’ll use PySpark, a Python package for spark programming and its powerful, higher-level libraries such as SparkSQL, MLlib (for machine learning), etc., to interact with works of William Shakespeare, analyze Fifa football 2018 data and perform clustering of genomic datasets. At the end of this course, you will gain an in-depth understanding of PySpark and it’s application to general Big Data analysis.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Big Data analysis with Spark\n        ",
           "index":"1",
           "description":"\n    This chapter introduces the exciting world of Big Data, as well as the various concepts and different frameworks for processing Big Data. You will understand why Apache Spark is considered the best framework for BigData.\n  ",
           "parts":[
              "What is Big Data?",
              "The 3 V's of Big Data",
              "PySpark: Spark with Python",
              "Understanding SparkContext",
              "Interactive Use of PySpark",
              "Loading data in PySpark shell",
              "Review of functional programming in Python",
              "Use of lambda() with map()",
              "Use of lambda() with filter()"
           ]
        },
        {
           "title":"\n          Programming in PySpark RDD’s\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The main abstraction Spark provides is a resilient distributed dataset (RDD), which is the fundamental and backbone data type of this engine. This chapter introduces RDDs and shows how RDDs can be created and executed using RDD Transformations and Actions.\n  ",
           "parts":[
              "Abstracting Data with RDDs",
              "RDDs from Parallelized collections",
              "RDDs from External Datasets",
              "Partitions in your data",
              "Basic RDD Transformations and Actions",
              "Map and Collect",
              "Filter and Count",
              "Pair RDDs in PySpark",
              "ReduceBykey and Collect",
              "SortByKey and Collect",
              "Advanced RDD Actions",
              "CountingBykeys",
              "Create a base RDD and transform it",
              "Remove stop words and reduce the dataset",
              "Print word frequencies"
           ]
        },
        {
           "title":"\n          PySpark SQL & DataFrames\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn about Spark SQL which is a Spark module for structured data processing. It provides a programming abstraction called DataFrames and can also act as a distributed SQL query engine. This chapter shows how Spark SQL allows you to use DataFrames in Python.\n  ",
           "parts":[
              "Abstracting Data with DataFrames",
              "RDD to DataFrame",
              "Loading CSV into DataFrame",
              "Operating on DataFrames in PySpark",
              "Inspecting data in PySpark DataFrame",
              "PySpark DataFrame subsetting and cleaning",
              "Filtering your DataFrame",
              "Interacting with DataFrames using PySpark SQL",
              "Running SQL Queries Programmatically",
              "SQL queries for filtering Table",
              "Data Visualization in PySpark using DataFrames",
              "PySpark DataFrame visualization",
              "Part 1: Create a DataFrame from CSV file",
              "Part 2: SQL Queries on DataFrame",
              "Part 3: Data visualization"
           ]
        },
        {
           "title":"\n          Machine Learning with PySpark MLlib\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    PySpark MLlib is the Apache Spark scalable machine learning library in Python consisting of common learning algorithms and utilities. Throughout this last chapter, you'll learn important Machine Learning algorithms. You will build a movie recommendation engine and a spam filter, and use k-means clustering.\n  ",
           "parts":[
              "Overview of PySpark MLlib",
              "PySpark MF libraries",
              "PySpark MLlib algorithms",
              "Collaborative filtering",
              "Loading Movie Lens dataset into RDDs",
              "Model training and predictions",
              "Model evaluation using MSE",
              "Classification",
              "Loading spam and non-spam data",
              "Feature hashing and LabelPoint",
              "Logistic Regression model training",
              "Clustering",
              "Loading and parsing the 5000 points data",
              "K-means training",
              "Visualizing clusters",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python"
     ],
     "tracks":[
        "Big Data with PySpark",
        "Data Engineer with Python"
     ]
  },
  {
     "title":"Analyzing US Census Data in Python",
     "description":"Learn to use the Census API to work with demographic and socioeconomic data.",
     "detailDescription":"Data scientists in diverse fields, from marketing to public health to civic hacking, need to work with demographic and socioeconomic data. Government census agencies offer richly detailed, high-quality datasets, but the number of variables and intricacies of administrative geographies (what is a Census tract anyway?) can make approaching this goldmine a daunting process. This course will introduce you to the Decennial Census and the annual American Community Survey, and show you where to find data on household income, commuting, race, family structure, and other topics that may interest you. You will use Python to request this data using the Census API for large and small geographies. You will manipulate the data using pandas, and create derived data such as a measure of segregation. You will also get a taste of the mapping capabilities of geopandas.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Decennial Census of Population and Housing\n        ",
           "index":"1",
           "description":"\n    Start exploring Census data products with the Decennial Census. Use the Census API and the requests package to retrieve data, load into pandas data frames, and conduct exploratory visualization in seaborn. Learn about important Census geographies, including states, counties, and tracts.\n  ",
           "parts":[
              "Census Subject Tables",
              "Aggregate and Calculate Proportions",
              "Calculate Proportions",
              "Identify Extreme Values",
              "Using the Census API",
              "The Basic API Request",
              "The API Response and Pandas",
              "API to Visualization: Group Quarters",
              "Census Geographies",
              "Specific Places",
              "Congressional Districts by State",
              "Zip Code Tabulation Areas"
           ]
        },
        {
           "title":"\n          American Community Survey\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Explore topics such as health insurance coverage and gentrification using the American Community Survey. Calculate Margins of Error and explore change over time. Create choropleth maps using geopandas.\n  ",
           "parts":[
              "Annual Change",
              "Home Values in California",
              "Health Insurance Coverage",
              "Finding ACS Tables by Subject",
              "Margins of Error",
              "Plotting Margins of Error over Time",
              "Significance of Difference of Estimates",
              "Significance of Difference of Proportions",
              "Basic Mapping with Geopandas",
              "Choropleth Map of Internet Access",
              "Proportional Symbol Map of Households w/ Internet",
              "Bivariate Map of Broadband Access",
              "Neighborhood Change",
              "Identifying Gentrifiable Tracts",
              "Identifying Gentrifying Tracts",
              "Mapping Gentrification"
           ]
        },
        {
           "title":"\n          Measuring Segregation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Explore racial segregation in America. Calculate the Index of Dissimilarity, and important measure of segregation. Learn about and use Metropolitan Statistical Areas, and important geography for urban research. Study segregation changes over time in Chicago.\n  ",
           "parts":[
              "Measuring Segregation: The Index of Dissimilarity",
              "Calculating D for One State",
              "Calculating D in a Loop",
              "Calculating D Using Grouping in Pandas",
              "Metropolitan Segregation",
              "Joining Tracts and Metropolitan Areas",
              "Create Function to Calculate D",
              "Characteristics of Segregated Metros",
              "Segregation Impacts: Unemployment",
              "Calculating Unemployment",
              "Impacts of Black-White Segregation by Sex",
              "White and Black Unemployment",
              "Neighborhood Segregation Over Time",
              "Tract Demographics in a Segregated City",
              "Segregation Begets More Segregation",
              "Population Decline in Segregated Neighborhoods"
           ]
        },
        {
           "title":"\n          Exploring Census Topics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will apply what you have learned to four topical studies. Explore unemployment by race and ethnicity; commuting patterns and worker density; immigration and state-to-state population flows; and rent burden in San Francisco.\n  ",
           "parts":[
              "Employment and the Labor Force",
              "Unemployment",
              "Labor Force Participation",
              "Commuting",
              "Heatmap of  Travel Times By Commute Mode",
              "Worker Population",
              "Migration",
              "Immigration",
              "State-to-State Flows",
              "Is the Rent Too Damn High?",
              "Rent Burden in San Francisco",
              "High Rent and Rent Burden",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python",
        "pandas Foundations"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Practicing Coding Interview Questions in Python",
     "description":"Prepare for your next coding interviews in Python.",
     "detailDescription":"Coding interviews can be challenging. You might be asked questions to test your knowledge of a programming language. On the other side, you can be given a task to solve in order to check how you think. And when you are interviewed for a data scientist position, it's likely you can be asked on the corresponding tools available for the language. In either of the cases, to get a cool position as a data scientist, you need to do a little work to perform the best. That's why it's very important to practice in order to prove your expertise! This course serves as a guide for those who just start their path to become a professional data scientist and as a refresher for those who seek for other opportunities. We'll go through fundamental as well as advanced topics that aim to prepare you for a coding interview in Python. Since it is not a normal step-by-step course, some exercises can be quite complex. But who said that interviews are easy to pass, right?",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Python Data Structures and String Manipulation\n        ",
           "index":"1",
           "description":"\n    In this chapter, we'll refresh our knowledge of the main data structures used in Python.  We'll cover how to deal with lists, tuples, sets, and dictionaries.  We'll also consider strings and how to write regular expressions to retrieve specific character sequences from a given text.\n  ",
           "parts":[
              "What are the main data structures in Python?",
              "List methods",
              "Operations on sets",
              "Storing data in a dictionary",
              "What are common ways to manipulate strings?",
              "String indexing and concatenation",
              "Operations on strings",
              "Fixing string errors in a DataFrame",
              "How to write regular expressions in Python?",
              "Write a regular expression",
              "Find the correct pattern",
              "Splitting by a pattern"
           ]
        },
        {
           "title":"\n          Iterable objects and representatives\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter focuses on iterable objects. We'll refresh the definition of iterable objects and explain, how to identify one.  Next, we'll cover list comprehensions, which is a very special feature of Python programming language to define lists.  Then, we'll recall how to combine several iterable objects into one. Finally, we'll cover how to create custom iterable objects using generators.\n  ",
           "parts":[
              "What are iterable objects?",
              "enumerate()",
              "Iterators",
              "Traversing a DataFrame",
              "What is a list comprehension?",
              "Basic list comprehensions",
              "Prime number sequence",
              "Coprime number sequence",
              "What is a zip object?",
              "Combining iterable objects",
              "Extracting tuples",
              "Creating a DataFrame",
              "What is a generator and how to create one?",
              "Shift a string",
              "Throw a dice",
              "Generator comprehensions"
           ]
        },
        {
           "title":"\n          Functions and lambda expressions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will focus on the functional aspects of Python. We'll start by defining functions with a variable amount of positional as well as keyword arguments.  Next, we'll cover lambda functions and in which cases they can be helpful. Especially, we'll see how to use them with such functions as map(), filter(), and reduce(). Finally, we'll recall what is recursion and how to correctly implement one.\n  ",
           "parts":[
              "How to pass a variable number of arguments to a function?",
              "Positional arguments of variable size",
              "Keyword arguments of variable size",
              "Combining argument types",
              "What is a lambda expression?",
              "Define lambda expressions",
              "Converting functions to lambda expressions",
              "Using a lambda expression as an argument",
              "What are the functions map(), filter(), reduce()?",
              "The map() function",
              "The filter() function",
              "The reduce() function",
              "What is recursion?",
              "Calculate the number of function calls",
              "Calculate an average value",
              "Approximate Pi with recursion"
           ]
        },
        {
           "title":"\n          Python for scientific computing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will cover topics on scientific computing in Python. We'll start by explaining the difference between NumPy arrays and lists. We'll define why the former ones suit better for complex calculations. Next, we'll cover some useful techniques to manipulate with pandas DataFrames. Finally, we'll do some data visualization using scatterplots, histograms, and boxplots.\n  ",
           "parts":[
              "What is the difference between a NumPy array and a list?",
              "Incorrect array initialization",
              "Accessing subarrays",
              "Operations with NumPy arrays",
              "How to use the .apply() method on a DataFrame?",
              "Simple use of .apply()",
              "Additional arguments",
              "Functions with additional arguments",
              "How to use the .groupby() method on a DataFrame?",
              "Standard DataFrame methods",
              "BMI of villains",
              "NaN value imputation",
              "How to visualize data in Python?",
              "Explore feature relationships",
              "Plot a histogram",
              "Creating boxplots",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)",
        "Manipulating DataFrames with pandas",
        "Regular Expressions in Python"
     ],
     "tracks":[
        "Python Toolbox"
     ]
  },
  {
     "title":"Analyzing IoT Data in Python",
     "description":"Learn how to import, clean and manipulate IoT data in Python to make it ready for machine learning.",
     "detailDescription":"Have you ever heard about Internet of Things devices? Of course, you have. Maybe you also have a Raspberry PI in your house monitoring the temperature and humidity. IoT devices are everywhere around us, collecting data about our environment. You will be analyzing Environmental data, Traffic data as well as energy counter data. Following the course, you will learn how to collect and store data from a data stream. You will prepare IoT data for analysis, analyze and visualize IoT data, before implementing a simple machine learning model to take action when certain events occur and deploy this model to a real-time data stream.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Accessing IoT Data\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will first understand what IoT data is.\nThen, you learn how to aquire IoT data through a REST API and using an MQTT data stream to collect data in real time.\n  ",
           "parts":[
              "Introduction to IoT data",
              "IoT devices",
              "Data acquisition",
              "Acquire data with pandas",
              "Understand the data",
              "Store data",
              "Read data from file",
              "Understanding the data",
              "Introduction to Data streams",
              "What is MQTT",
              "MQTT single message",
              "Save Datastream"
           ]
        },
        {
           "title":"\n          Processing IoT data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the second chapter, you will look at the  data  you gathered during the first chapter.  You will visualize the data and learn the importance of timestamps when dealing with data streams. You will also implement caching to an MQTT data stream.\n  ",
           "parts":[
              "Perform EDA",
              "Line plots",
              "Histogram Plot",
              "Clean Data",
              "Dealing with missing data",
              "Missing data",
              "Missing data II",
              "Gather minimalistic incremental data",
              "Which timestamp?",
              "Cache Datastream",
              "Date and Time",
              "Prepare and visualize incremental data",
              "Pivoting",
              "Reformat data",
              "Analyzing Energy counter data"
           ]
        },
        {
           "title":"\n          Analyzing IoT data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will combine multiple datasoures with different time intervals.\nYou will then analyze the data to detect correlations, outliers and trends.\n  ",
           "parts":[
              "Combining datasources for further analysis",
              "Concatenate dataframes",
              "Combine and resample",
              "Correlation",
              "Heatmaps",
              "Pairplot",
              "Outliers",
              "Standard deviation",
              "Autocorrelation",
              "Seasonality and Trends",
              "Seasonal decomposition",
              "Seasonal decomposition II"
           ]
        },
        {
           "title":"\n          Machine learning for IoT\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you will use the data you analyzed during the previous chapters to build a machine learning pipeline. You will then learn how to implement this pipeline into a data stream to make realtime predictions.\n  ",
           "parts":[
              "Prepare data for machine learning",
              "Train/Test split",
              "Logistic Regression",
              "Scaling data for machine learning",
              "Model performance",
              "Scaling",
              "Scaling II",
              "Develop machine learning pipeline",
              "Creating Pipelines",
              "Store Pipeline",
              "Apply a machine learning model",
              "Model predictions",
              "Apply model to data stream",
              "Wrapping up"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Exploratory Data Analysis in Python",
     "description":"Learn how to explore, visualize, and extract insights from data.",
     "detailDescription":"How do we get from data to answers? Exploratory data analysis is a process for exploring datasets, answering questions, and visualizing results. This course presents the tools you need to clean and validate data, to visualize distributions and relationships between variables, and to use regression models to predict and explain. You'll explore data related to demographics and health, including the National Survey of Family Growth and the General Social Survey. But the methods you learn apply to all areas of science, engineering, and business. You'll use Pandas, a powerful library for working with data, and other core Python libraries including NumPy and SciPy, StatsModels for regression, and Matplotlib for visualization. With these tools and skills, you will be prepared to work with real data, make discoveries, and present compelling results.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Read, clean, and validate\n        ",
           "index":"1",
           "description":"\n    The first step of almost any data project is to read the data, check for errors and special cases, and prepare data for analysis. This is exactly what you'll do in this chapter, while working with a dataset obtained from the National Survey of Family Growth.\n  ",
           "parts":[
              "DataFrames and Series",
              "Read the codebook",
              "Exploring the NSFG data",
              "Clean and Validate",
              "Validate a variable",
              "Clean a variable",
              "Compute a variable",
              "Filter and visualize",
              "Make a histogram",
              "Compute birth weight",
              "Filter"
           ]
        },
        {
           "title":"\n          Distributions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the first chapter, having cleaned and validated your data, you began exploring it by using histograms to visualize distributions. In this chapter, you'll learn how to represent distributions using Probability Mass Functions (PMFs) and Cumulative Distribution Functions (CDFs). You'll learn when to use each of them, and why, while working with a new dataset obtained from the General Social Survey.\n  ",
           "parts":[
              "Probability mass functions",
              "Make a PMF",
              "Plot a PMF",
              "Cumulative distribution functions",
              "Make a CDF",
              "Compute IQR",
              "Plot a CDF",
              "Comparing distributions",
              "Distribution of education",
              "Extract education levels",
              "Plot income CDFs",
              "Modeling distributions",
              "Distribution of income",
              "Comparing CDFs",
              "Comparing PDFs"
           ]
        },
        {
           "title":"\n          Relationships\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Up until this point, you've only looked at one variable at a time. In this chapter, you'll explore relationships between variables two at a time, using scatter plots and other visualizations to extract insights from a new dataset obtained from the Behavioral Risk Factor Surveillance Survey (BRFSS). You'll also learn how to quantify those relationships using correlation and simple regression.\n  ",
           "parts":[
              "Exploring relationships",
              "PMF of age",
              "Scatter plot",
              "Jittering",
              "Visualizing relationships",
              "Height and weight",
              "Distribution of income",
              "Income and height",
              "Correlation",
              "Computing correlations",
              "Interpreting correlations",
              "Simple regression",
              "Income and vegetables",
              "Fit a line"
           ]
        },
        {
           "title":"\n          Multivariate Thinking\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Explore multivariate relationships using multiple regression to describe non-linear relationships and logistic regression to explain and predict binary variables.\n  ",
           "parts":[
              "Limits of simple regression",
              "Regression and causation",
              "Using StatsModels",
              "Multiple regression",
              "Plot income and education",
              "Non-linear model of education",
              "Visualizing regression results",
              "Making predictions",
              "Visualizing predictions",
              "Logistic regression",
              "Predicting a binary variable",
              "Next steps"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)"
     ],
     "tracks":[
        "Data Analyst with Python",
        "Data Scientist with Python"
     ]
  },
  {
     "title":"Generalized Linear Models in Python",
     "description":"Extend your regression toolbox with the logistic and Poisson models and learn to train, understand, and validate them, as well as to make predictions.",
     "detailDescription":"Imagine being able to handle data where the response variable is either binary, count, or approximately normal, all under one single framework. Well, you don't have to imagine. Enter the Generalized Linear Models in Python course! In this course you will extend your regression toolbox with the logistic and Poisson models, by learning how to fit, understand, assess model performance and finally use the model to make predictions on new data. You will practice using data from real world studies such the largest population poisoning in world's history, nesting of horseshoe crabs and counting the bike crossings on the bridges in New York City.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Introduction to GLMs\n        ",
           "index":"1",
           "description":"\n    Review linear models and learn how GLMs are an extension of the linear model given different types of response variables. You will also learn the building blocks of GLMs and the technical process of fitting a GLM in Python.\n  ",
           "parts":[
              "Going beyond linear regression",
              "Applying linear models",
              "Linear model, a special case of GLM",
              "How to build a GLM?",
              "Data type and distribution family",
              "Linear model and a binary response variable",
              "Comparing predicted values",
              "How to fit a GLM in Python?",
              "Model fitting step-by-step",
              "Results of the model fit using summary()",
              "Extracting parameter estimates"
           ]
        },
        {
           "title":"\n          Modeling Binary Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter focuses on logistic regression. You'll learn about the structure of binary data, the logit link function, model fitting, as well as how to interpret model coefficients, model inference, and how to assess model performance.\n  ",
           "parts":[
              "Binary data and logistic regression",
              "Compute odds and probabilities",
              "Fit logistic regression",
              "Interpreting coefficients",
              "Coefficients in terms of odds",
              "Model formula",
              "Interpreting logistic model",
              "Rate of change in probability",
              "Interpreting model inference",
              "Statistical significance",
              "Computing Wald statistic",
              "Confidence intervals",
              "Computing and describing predictions",
              "Visualize model fit using regplot()",
              "Compute predictions",
              "Compute confusion matrix"
           ]
        },
        {
           "title":"\n          Modeling Count Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Here you'll learn about Poisson regression, including the discussion on count data, Poisson distribution and the interpretation of the model fit. You'll also learn how to overcome problems with overdispersion. Finally, you'll get hands-on experience with the process of model visualization.\n  ",
           "parts":[
              "Count data and Poisson distribution",
              "Visualize the response",
              "Fitting a Poisson regression",
              "Interpreting model fit",
              "Estimate parameter lambda",
              "Interpret Poisson coefficients",
              "Poisson confidence intervals",
              "The Problem of Overdispersion",
              "Is the mean equal to the variance?",
              "Computing expected number of counts",
              "Checking for overdispersion",
              "Fitting negative binomial",
              "Confidence intervals for negative Binomial model",
              "Plotting a regression model",
              "Plotting data and linear model fit",
              "Plotting fitted values"
           ]
        },
        {
           "title":"\n          Multivariable Logistic Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter you'll learn how to increase the complexity of your model by adding more than one explanatory variable. You'll practice with the problem of multicollinearity, and with treating categorical and interaction terms in your model.\n  ",
           "parts":[
              "Multivariable logistic regression",
              "Fit a multivariable logistic regression",
              "The effect of multicollinearity",
              "Compute VIF",
              "Comparing models",
              "Checking model fit",
              "Compare two models",
              "Deviance and linear transformation",
              "Model formula",
              "Model matrix for continuous variables",
              "Variable transformation",
              "Coding categorical variables",
              "Categorical and interaction terms",
              "Modeling with categorical variable",
              "Interaction terms",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Linear Modeling in Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Unit Testing for Data Science in Python",
     "description":"Learn how to write unit tests for your Data Science projects in Python using pytest.",
     "detailDescription":"Every data science project needs unit testing. It comes with huge benefits - saving a lot of development and maintenance time, improving documentation, increasing end-user trust and reducing downtime of productive systems. As a result, unit testing has become a must-have skill in the industry, used by almost every company. This course teaches unit testing in Python using the most popular testing framework pytest. By the end of this course, you will have written a complete test suite for a data science project. In the process, you will learn to write unit tests for data preprocessors, models and visualizations, interpret test results and fix any buggy code. You will also learn advanced concepts like TDD, test organization, fixtures and mocking so that you can test your own data science projects properly.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Unit testing basics\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will get introduced to the pytest package and use it to write simple unit tests. You'll run the tests, interpret the test result reports and fix bugs. Throughout the chapter, we will use examples exclusively from the data preprocessing module of a linear regression project, making sure you learn unit testing in the context of data science.\n  ",
           "parts":[
              "Why unit test?",
              "How frequently is a function tested?",
              "Manual testing",
              "Write a simple unit test using pytest",
              "Your first unit test using pytest",
              "Running unit tests",
              "Understanding test result report",
              "What causes a unit test to fail?",
              "Spotting and fixing bugs",
              "More benefits and test types",
              "Benefits of unit testing",
              "Unit tests as documentation"
           ]
        },
        {
           "title":"\n          Intermediate unit testing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will write more advanced unit tests. Starting from testing complicated data types like NumPy arrays to testing exception handling, you'll do it all. Once you have mastered the science of testing, we will also focus on the arts. For example, we will learn how to find the balance between writing too many tests and too few tests.  In the last lesson, you will get introduced to a radically new programming methodology called Test Driven Development (TDD) and put it to practice. This might actually change the way you code forever!\n  ",
           "parts":[
              "Mastering assert statements",
              "Write an informative test failure message",
              "Testing float return values",
              "Testing with multiple assert statements",
              "Testing for exceptions instead of return values",
              "Practice the context manager",
              "Unit test a ValueError",
              "The well tested function",
              "Testing well: Boundary values",
              "Testing well: Values triggering special logic",
              "Testing well: Normal arguments",
              "Test Driven Development (TDD)",
              "TDD: Tests for normal arguments",
              "TDD: Requirement collection",
              "TDD: Implement the function"
           ]
        },
        {
           "title":"\n          Test Organization and Execution\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In any data science project, you quickly reach a point when it becomes impossible to organize and manage unit tests. In this chapter, we will learn about how to structure your test suite well, how to effortlessly execute any subset of tests and how to mark problematic tests so that your test suite always stays green. The last lesson will even enable you to add the trust-inspiring build status and code coverage badges to your own project. Complete this chapter and become a unit testing wizard! \n  ",
           "parts":[
              "How to organize a growing set of tests?",
              "Place test modules at the correct location",
              "Create a test class",
              "Mastering test execution",
              "One command to run them all",
              "Running test classes",
              "Expected failures and conditional skipping",
              "Mark a test class as expected to fail",
              "Mark a test as conditionally skipped",
              "Reasoning in the test result report",
              "Continuous integration and code coverage",
              "Build failing",
              "What does code coverage mean?"
           ]
        },
        {
           "title":"\n          Testing Models, Plots and Much More\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, You will pick up advanced unit testing skills  like setup, teardown and mocking. You will also  learn  how to write sanity tests for your data science models and how to test matplotlib plots. By the end of this chapter, you will be ready to test real world data science projects!\n  ",
           "parts":[
              "Beyond assertion: setup and teardown",
              "Use a fixture for a clean data file",
              "Write a fixture for an empty data file",
              "Fixture chaining using tmpdir",
              "Mocking",
              "Program a bug-free dependency",
              "Mock a dependency",
              "Testing models",
              "Testing on linear data",
              "Testing on circular data",
              "Testing plots",
              "Generate the baseline image",
              "Run the tests for the plotting function",
              "Fix the plotting function",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[
        "Coding Best Practices with Python",
        "Python Programmer"
     ]
  },
  {
     "title":"Introduction to Deep Learning with PyTorch",
     "description":"Learn to create deep learning models with the PyTorch library.",
     "detailDescription":"Neural networks have been at the forefront of Artificial Intelligence research during the last few years, and have provided solutions to many difficult problems like image classification, language translation or Alpha Go. PyTorch is one of the leading deep learning frameworks, being at the same time both powerful and easy to use. In this course you will use PyTorch to first learn about the basic concepts of neural networks, before building your first neural network to predict digits from MNIST dataset. You will then learn about convolutional neural networks, and use them to build much more powerful models which give more accurate results. You will evaluate the results and use different techniques to improve them. Following the course, you will be able to delve deeper into neural networks and start your career in this fascinating field.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to PyTorch\n        ",
           "index":"1",
           "description":"\n    In this first chapter, we introduce basic concepts of neural networks and deep learning using PyTorch library.\n  ",
           "parts":[
              "Introduction to PyTorch",
              "Creating tensors in PyTorch",
              "Matrix multiplication",
              "Forward propagation",
              "Forward pass",
              "Backpropagation by auto-differentiation",
              "Backpropagation by hand",
              "Backpropagation using PyTorch",
              "Calculating gradients in PyTorch",
              "Introduction to Neural Networks",
              "Your first neural network",
              "Your first PyTorch neural network"
           ]
        },
        {
           "title":"\n          Artificial Neural Networks\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this second chapter, we delve deeper into Artificial Neural Networks, learning how to train them with real datasets.\n  ",
           "parts":[
              "Activation functions",
              "Neural networks",
              "ReLU activation",
              "ReLU activation again",
              "Loss functions",
              "Calculating loss function by hand",
              "Calculating loss function in PyTorch",
              "Loss function of random scores",
              "Preparing a dataset in PyTorch",
              "Preparing MNIST dataset",
              "Inspecting the dataloaders",
              "Training neural networks",
              "Building a neural network - again",
              "Training a neural network",
              "Using the network to make predictions"
           ]
        },
        {
           "title":"\n          Convolutional Neural Networks (CNNs)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this third chapter, we introduce convolutional neural networks, learning how to train them and how to use them to make predictions.\n  ",
           "parts":[
              "Convolution operator",
              "Convolution operator - OOP way",
              "Convolution operator - Functional way",
              "Pooling operators",
              "Max-pooling operator",
              "Average-pooling operator",
              "Convolutional Neural Networks",
              "Your first CNN - __init__ method",
              "Your first CNN - forward() method",
              "Training Convolutional Neural Networks",
              "Training CNNs",
              "Using CNNs to make predictions"
           ]
        },
        {
           "title":"\n          Using Convolutional Neural Networks\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this last chapter, we learn how to make neural networks work well in practice, using concepts like regularization, batch-normalization and transfer learning.\n  ",
           "parts":[
              "The sequential module",
              "Sequential module - init method",
              "Sequential module - forward() method",
              "The problem of overfitting",
              "Validation set",
              "Detecting overfitting",
              "Regularization techniques",
              "L2-regularization",
              "Dropout",
              "Batch-normalization",
              "Transfer learning",
              "Finetuning a CNN",
              "Torchvision module",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn",
        "Working with the Class System in Python"
     ],
     "tracks":[
        "Deep Learning in Python"
     ]
  },
  {
     "title":"Writing Functions in Python",
     "description":"Learn to use best practices to write maintainable, reusable, complex functions with good documentation.",
     "detailDescription":"You've done your analysis, built your report, and trained a model. What's next? Well, if you want to deploy your model into production, your code will need to be more reliable than exploratory scripts in a Jupyter notebook. Writing Functions in Python will give you a strong foundation in writing complex and beautiful functions so that you can contribute research and engineering skills to your team. You'll learn useful tricks, like how to write context managers and decorators. You'll also learn best practices around how to write maintainable reusable functions with good documentation. They say that people who can do good research and write high-quality code are unicorns. Take this course and discover the magic!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Best Practices\n        ",
           "index":"1",
           "description":"\n    The goal of this course is to transform you into a Python expert, and so the first chapter starts off with best practices when writing functions. We'll cover docstrings and why they matter and how to know when you need to turn a chunk of code into a function. You will also learn the details of how Python passes arguments to functions, as well as some common gotchas that can cause debugging headaches when calling functions.\n  ",
           "parts":[
              "Docstrings",
              "Crafting a docstring",
              "Retrieving docstrings",
              "Docstrings to the rescue!",
              "DRY and \"Do One Thing\"",
              "Extract a function",
              "Split up a function",
              "Pass by assignment",
              "Mutable or immutable?",
              "Best practice for default arguments"
           ]
        },
        {
           "title":"\n          Context Managers\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    If you've ever seen the \"with\" keyword in Python and wondered what its deal was, then this is the chapter for you! Context managers are a convenient way to provide connections in Python and guarantee that those connections get cleaned up when you are done using them. This chapter will show you how to use context managers, as well as how to write your own.\n  ",
           "parts":[
              "Using context managers",
              "The number of cats",
              "The speed of cats",
              "Writing context managers",
              "The timer() context manager",
              "A read-only open() context manager",
              "Advanced topics",
              "Context manager use cases",
              "Scraping the NASDAQ",
              "Changing the working directory"
           ]
        },
        {
           "title":"\n          Decorators\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Decorators are an extremely powerful concept in Python. They allow you to modify the behavior of a function without changing the code of the function itself. This chapter will lay the foundational concepts needed to thoroughly understand decorators (functions as objects, scope, and closures), and give you a good introduction into how decorators are used and defined. This deep dive into Python internals will set you up to be a superstar Pythonista.\n  ",
           "parts":[
              "Functions are objects",
              "Building a command line data app",
              "Reviewing your co-worker's code",
              "Returning functions for a math game",
              "Scope",
              "Understanding scope",
              "Modifying variables outside local scope",
              "Closures",
              "Checking for closure",
              "Closures keep your values safe",
              "Decorators",
              "Using decorator syntax",
              "Defining a decorator"
           ]
        },
        {
           "title":"\n          More on Decorators\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you understand how decorators work under the hood, this chapter gives you a bunch of real-world examples of when and how you would write decorators in your own code. You will also learn advanced decorator concepts like how to preserve the metadata of your decorated functions and how to write decorators that take arguments.\n  ",
           "parts":[
              "Real-world examples",
              "Print the return type",
              "Counter",
              "Decorators and metadata",
              "Preserving docstrings when decorating functions",
              "Measuring decorator overhead",
              "Decorators that take arguments",
              "Run_n_times()",
              "HTML Generator",
              "Timeout(): a real world example",
              "Tag your functions",
              "Check the return type",
              "Great job!"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)"
     ],
     "tracks":[
        "Coding Best Practices with Python",
        "Data Scientist with Python",
        "Python Programmer"
     ]
  },
  {
     "title":"Dimensionality Reduction in Python",
     "description":"Learn to reduce dimensionality in Python.",
     "detailDescription":"High-dimensional datasets can be overwhelming and leave you not knowing where to start. Typically, you’d visually explore a new dataset first, but when you have too many dimensions the classical approaches will seem insufficient. Fortunately, there are visualization techniques designed specifically for high dimensional data and you’ll be introduced to these in this course. After exploring the data, you’ll often find that many features hold little information because they don’t show any variance or because they are duplicates of other features. You’ll learn how to detect these features and drop them from the dataset so that you can focus on the informative ones. In a next step, you might want to build a model on these features, and it may turn out that some don’t have any effect on the thing you’re trying to predict. You’ll learn how to detect and drop these irrelevant features too, in order to reduce dimensionality and thus complexity. Finally, you’ll learn how feature extraction techniques can reduce dimensionality for you through the calculation of uncorrelated principal components.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploring high dimensional data\n        ",
           "index":"1",
           "description":"\n    You'll be introduced to the concept of dimensionality reduction and will learn when an why this is important. You'll learn the difference between feature selection and feature extraction and will apply both techniques for data exploration.  The chapter ends with a lesson on t-SNE, a powerful feature extraction technique that will allow you to visualize a high-dimensional dataset.\n  ",
           "parts":[
              "Introduction",
              "Finding the number of dimensions in a dataset",
              "Removing features without variance",
              "Feature selection vs feature extraction",
              "Visually detecting redundant features",
              "Advantage of feature selection",
              "t-SNE visualization of high-dimensional data",
              "t-SNE intuition",
              "Fitting t-SNE to the ANSUR data",
              "t-SNE visualisation of dimensionality"
           ]
        },
        {
           "title":"\n          Feature selection I, selecting for feature information\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this first out of two chapters on feature selection, you'll learn about the curse of dimensionality and how dimensionality reduction can help you overcome it. You'll be introduced to a number of techniques to detect and remove features that bring little added value to the dataset. Either because they have little variance, too many missing values, or because they are strongly correlated to other features.\n  ",
           "parts":[
              "The curse of dimensionality",
              "Train - test split",
              "Fitting and testing the model",
              "Accuracy after dimensionality reduction",
              "Features with missing values or little variance",
              "Finding a good variance threshold",
              "Features with low variance",
              "Removing features with many missing values",
              "Pairwise correlation",
              "Correlation intuition",
              "Inspecting the correlation matrix",
              "Visualizing the correlation matrix",
              "Removing highly correlated features",
              "Filtering out highly correlated features",
              "Nuclear energy and pool drownings"
           ]
        },
        {
           "title":"\n          Feature selection II, selecting for model accuracy\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this second chapter on feature selection, you'll learn how to let models help you find the most important features in a dataset for predicting a particular target feature. In the final lesson of this chapter, you'll combine the advice of multiple, different, models to decide on which features are worth keeping.\n  ",
           "parts":[
              "Selecting features for model performance",
              "Building a diabetes classifier",
              "Manual Recursive Feature Elimination",
              "Automatic Recursive Feature Elimination",
              "Tree-based feature selection",
              "Building a random forest model",
              "Random forest for feature selection",
              "Recursive Feature Elimination with random forests",
              "Regularized linear regression",
              "Creating a LASSO regressor",
              "Lasso model results",
              "Adjusting the regularization strength",
              "Combining feature selectors",
              "Creating a LassoCV regressor",
              "Ensemble models for extra votes",
              "Combining 3 feature selectors"
           ]
        },
        {
           "title":"\n          Feature extraction\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter is a deep-dive on the most frequently used dimensionality reduction algorithm, Principal Component Analysis (PCA). You'll build intuition on how and why this algorithm is so powerful and will apply it both for data exploration and data pre-processing in a modeling pipeline.  You'll end with a cool image compression use case.\n  ",
           "parts":[
              "Feature extraction",
              "Manual feature extraction I",
              "Manual feature extraction II",
              "Principal component intuition",
              "Principal component analysis",
              "Calculating Principal Components",
              "PCA on a larger dataset",
              "PCA explained variance",
              "PCA applications",
              "Understanding the components",
              "PCA for feature exploration",
              "PCA in a model pipeline",
              "Principal Component selection",
              "Selecting the proportion of variance to keep",
              "Choosing the number of components",
              "PCA for image compression",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Working with Dates and Times in Python",
     "description":"Learn how to work with dates and times in Python.",
     "detailDescription":"You'll probably never have a time machine, but how about a machine for analyzing time? As soon as time enters any analysis, things can get weird. It's easy to get tripped up on day and month boundaries, time zones, daylight saving time, and all sorts of other things that can confuse the unprepared. If you're going to do any kind of analysis involving time, you’ll want to use Python to sort it out. Working with data sets on hurricanes and bike trips, we’ll cover counting events, figuring out how much time has elapsed between events and plotting data over time. You'll work in both standard Python and in Pandas, and we'll touch on the dateutil library, the only timezone library endorsed by the official Python documentation. After this course, you'll confidently handle date and time data in any format like a champion.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Dates and Calendars\n        ",
           "index":"1",
           "description":"\n    Hurricanes (also known as cyclones or typhoons) hit the U.S. state of Florida several times per year. To start off this course, you'll learn how to work with date objects in Python, starting with the dates of every hurricane to hit Florida since 1950. You'll learn how Python handles dates, common date operations, and the right way to format dates to avoid confusion.\n  ",
           "parts":[
              "Dates in Python",
              "Which day of the week?",
              "How many hurricanes come early?",
              "Math with dates",
              "Subtracting dates",
              "Counting events per calendar month",
              "Putting a list of dates in order",
              "Turning dates into strings",
              "Printing dates in a friendly format",
              "Representing dates in different ways"
           ]
        },
        {
           "title":"\n          Combining Dates and Times\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Bike sharing programs have swept through cities around the world -- and luckily for us, every trip gets recorded! Working with all of the comings and goings of one bike in Washington, D.C., you'll practice working with dates and times together. You'll parse dates and times from text, analyze peak trip times, calculate ride durations, and more.\n  ",
           "parts":[
              "Dates and times",
              "Creating datetimes by hand",
              "Counting events before and after noon",
              "Printing and parsing datetimes",
              "Turning strings into datetimes",
              "Parsing pairs of strings as datetimes",
              "Recreating ISO format with strftime()",
              "Unix timestamps",
              "Working with durations",
              "Turning pairs of datetimes into durations",
              "Average trip time",
              "The long and the short of why time is hard"
           ]
        },
        {
           "title":"\n          Time Zones and Daylight Saving\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn to confidently tackle the time-related topic that causes people the most trouble: time zones and daylight saving. Continuing with our bike data, you'll learn how to compare clocks around the world, how to gracefully handle \"spring forward\" and \"fall back,\" and how to get up-to-date timezone data from the dateutil library.\n  ",
           "parts":[
              "UTC offsets",
              "Creating timezone aware datetimes",
              "Setting timezones",
              "What time did the bike leave in UTC?",
              "Time zone database",
              "Putting the bike trips into the right time zone",
              "What time did the bike leave? (Global edition)",
              "Starting daylight saving time",
              "How many hours elapsed around daylight saving?",
              "March 29, throughout a decade",
              "Ending daylight saving time",
              "Finding ambiguous datetimes",
              "Cleaning daylight saving data with fold"
           ]
        },
        {
           "title":"\n          Easy and Powerful: Dates and Times in Pandas\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    To conclude this course, you'll apply everything you've learned about working with dates and times in standard Python to working with dates and times in Pandas. With additional information about each bike ride, such as what station it started and stopped at and whether or not the rider had a yearly membership, you'll be able to dig much more deeply into the bike trip data. In this chapter, you'll cover powerful Pandas operations, such as grouping and plotting results by time.\n  ",
           "parts":[
              "Reading date and time data in Pandas",
              "Loading a csv file in Pandas",
              "Making timedelta columns",
              "Summarizing datetime data in Pandas",
              "How many joyrides?",
              "It's getting cold outside, W20529",
              "Members vs casual riders over time",
              "Combining groupby() and resample()",
              "Additional datetime methods in Pandas",
              "Timezones in Pandas",
              "How long per weekday?",
              "How long between rides?",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[
        "Data Scientist with Python",
        "Python Programmer",
        "Python Toolbox"
     ]
  },
  {
     "title":"Improving Your Data Visualizations in Python",
     "description":"Learn to construct compelling and attractive visualizations that help communicate results efficiently and effectively.",
     "detailDescription":"Great data visualization is the cornerstone of impactful data science. Visualization helps you to both find insight in your data and share those insights with your audience. Everyone learns how to make a basic scatter plot or bar chart on their journey to becoming a data scientist, but the true potential of data visualization is realized when you take a step back and think about what, why, and how you are visualizing your data. In this course you will learn how to construct compelling and attractive visualizations that help you communicate the results of your analyses efficiently and effectively. We will cover comparing data, the ins and outs of color, showing uncertainty, and how to build the right visualization for your given audience through the investigation of a datasets on air pollution around the US and farmer's markets. We will finish the course by examining open-access farmers market data to build a polished and impactful visual report.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Highlighting your data\n        ",
           "index":"1",
           "description":"\n    How do you show all of your data while making sure that viewers don't miss an important point or points? Here we discuss how to guide your viewer through the data with color-based highlights and text. We also introduce a dataset on common pollutant values across the United States.\n  ",
           "parts":[
              "Highlighting data",
              "Hardcoding a highlight",
              "Programmatically creating a highlight",
              "Comparing groups",
              "Comparing with two KDEs",
              "Improving your KDEs",
              "Beeswarms",
              "Annotations",
              "A basic text annotation",
              "Arrow annotations",
              "Combining annotations and color"
           ]
        },
        {
           "title":"\n          Using color in your visualizations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Color is a powerful tool for encoded values in data visualization. However, with this power comes danger. In this chapter, we talk about how to choose an appropriate color palette for your visualization based upon the type of data it is showing.\n  ",
           "parts":[
              "Color in visualizations",
              "Getting rid of unnecessary color",
              "Fixing Seaborn's bar charts",
              "Continuous color palettes",
              "Making a custom continuous palette",
              "Customizing a diverging palette heatmap",
              "Adjusting your palette according to context",
              "Categorical palettes",
              "Using a custom categorical palette",
              "Dealing with too many categories",
              "Coloring ordinal categories",
              "Choosing the right variable to encode with color"
           ]
        },
        {
           "title":"\n          Showing uncertainty\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Uncertainty occurs everywhere in data science, but it's frequently left out of visualizations where it should be included. Here, we review what a confidence interval is and how to visualize them for both single estimates and continuous functions. Additionally, we discuss the bootstrap resampling technique for assessing uncertainty and how to visualize it properly. \n  ",
           "parts":[
              "Point estimate intervals",
              "Basic confidence intervals",
              "Annotating confidence intervals",
              "Confidence bands",
              "Making a confidence band",
              "Separating a lot of bands",
              "Cleaning up bands for overlaps",
              "Beyond 95%",
              "90, 95, and 99% intervals",
              "90 and 95% bands",
              "Using band thickness instead of coloring",
              "Visualizing the bootstrap",
              "The bootstrap histogram",
              "Bootstrapped regressions",
              "Lots of bootstraps with beeswarms"
           ]
        },
        {
           "title":"\n          Visualization in the data science workflow\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Often visualization is taught in isolation, with best practices only discussed in a general way. In reality, you will need to bend the rules for different scenarios.  From messy exploratory visualizations to polishing the font sizes of your final product; in this chapter, we dive into how to optimize your visualizations at each step of a data science workflow.\n  ",
           "parts":[
              "First explorations",
              "Looking at the farmers market data",
              "Scatter matrix of numeric columns",
              "Digging in with basic transforms",
              "Exploring the patterns",
              "Is latitude related to months open?",
              "What state is the most market-friendly?",
              "Popularity of goods sold by state",
              "Making your visualizations efficient",
              "Stacking to find trends",
              "Using a plot as a legend",
              "Tweaking your plots",
              "Cleaning up the background",
              "Remixing a plot",
              "Enhancing legibility",
              "Congrats!"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)",
        "Introduction to Data Visualization in Python",
        "Intermediate Data Visualization with Seaborn"
     ],
     "tracks":[
        "Data Visualization with Python"
     ]
  },
  {
     "title":"Writing Efficient Python Code",
     "description":"Learn to write efficient code that executes quickly and allocates resources skillfully to avoid unnecessary overhead.",
     "detailDescription":"As a Data Scientist, the majority of your time should be spent gleaning actionable insights from data -- not waiting for your code to finish running. Writing efficient Python code can help reduce runtime and save computational resources, ultimately freeing you up to do the things you love as a Data Scientist. In this course, you'll learn how to use Python's built-in data structures, functions, and modules to write cleaner, faster, and more efficient code. We'll explore how to time and profile code in order to find bottlenecks. Then, you'll practice eliminating these bottlenecks, and other bad design patterns, using Python's Standard Library, NumPy, and pandas. After completing this course, you'll have the necessary tools to start writing efficient Python code!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Foundations for efficiencies\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn what it means to write efficient Python code. You'll explore Python's Standard Library, learn about NumPy arrays, and practice using some of Python's built-in tools.  This chapter builds a foundation for the concepts covered ahead.\n  ",
           "parts":[
              "Welcome!",
              "Pop quiz: what is efficient",
              "A taste of things to come",
              "Zen of Python",
              "Building with built-ins",
              "Built-in practice: range()",
              "Built-in practice: enumerate()",
              "Built-in practice: map()",
              "The power of NumPy arrays",
              "Practice with NumPy arrays",
              "Bringing it all together: Festivus!"
           ]
        },
        {
           "title":"\n          Timing and profiling code\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to gather and compare runtimes between different coding approaches.  You'll practice using the line_profiler and memory_profiler packages to profile your code base and spot bottlenecks. Then, you'll put your learnings to practice by replacing these bottlenecks with efficient Python code.\n  ",
           "parts":[
              "Examining runtime",
              "Using %timeit: your turn!",
              "Using %timeit: specifying number of runs and loops",
              "Using %timeit: formal name or literal syntax",
              "Using cell magic mode (%%timeit)",
              "Code profiling for runtime",
              "Pop quiz: steps for using %lprun",
              "Using %lprun: spot bottlenecks",
              "Using %lprun: fix the bottleneck",
              "Code profiling for memory usage",
              "Pop quiz: steps for using %mprun",
              "Using %mprun: Hero BMI",
              "Using %mprun: Hero BMI 2.0",
              "Bringing it all together: Star Wars profiling"
           ]
        },
        {
           "title":"\n          Gaining efficiencies\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter covers more complex efficiency tips and tricks. You'll learn a few useful built-in modules for writing efficient code and practice using set theory.  You'll then learn about looping patterns in Python and how to make them more efficient.\n  ",
           "parts":[
              "Efficiently combining, counting, and iterating",
              "Combining Pokémon names and types",
              "Counting Pokémon from a sample",
              "Combinations of Pokémon",
              "Set theory",
              "Comparing Pokédexes",
              "Searching for Pokémon",
              "Gathering unique Pokémon",
              "Eliminating loops",
              "Gathering Pokémon without a loop",
              "Pokémon totals and averages without a loop",
              "Writing better loops",
              "One-time calculation loop",
              "Holistic conversion loop",
              "Bringing it all together: Pokémon z-scores"
           ]
        },
        {
           "title":"\n          Basic pandas optimizations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter offers a brief introduction on how to efficiently work with pandas DataFrames. You'll learn the various options you have for iterating over a DataFrame. Then, you'll learn how to efficiently apply functions to data stored in a DataFrame.\n  ",
           "parts":[
              "Intro to pandas DataFrame iteration",
              "Iterating with .iterrows()",
              "Run differentials with .iterrows()",
              "Another iterator method: .itertuples()",
              "Iterating with .itertuples()",
              "Run differentials with .itertuples()",
              "pandas alternative to looping",
              "Analyzing baseball stats with .apply()",
              "Settle a debate with .apply()",
              "Optimal pandas iterating",
              "Replacing .iloc with underlying arrays",
              "Bringing it all together: Predict win percentage",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Types for Data Science in Python",
        "Python Data Science Toolbox (Part 2)"
     ],
     "tracks":[
        "Coding Best Practices with Python",
        "Data Engineer with Python",
        "Python Programmer",
        "Python Toolbox"
     ]
  },
  {
     "title":"Cluster Analysis in Python",
     "description":"In this course, you will be introduced to unsupervised learning through techniques such as hierarchical and k-means clustering using the SciPy library.",
     "detailDescription":"You have probably come across Google News, which automatically groups similar news articles under a topic. Have you ever wondered what process runs in the background to arrive at these groups? In this course, you will be introduced to unsupervised learning through clustering using the SciPy library in Python. This course covers pre-processing of data and application of hierarchical and k-means clustering. Through the course, you will explore player statistics from a popular football video game, FIFA 18. After completing the course, you will be able to quickly apply various clustering algorithms on data, visualize the clusters formed and analyze results.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Clustering\n        ",
           "index":"1",
           "description":"\n    Before you are ready to classify news articles, you need to be introduced to the basics of clustering. This chapter familiarizes you with a class of machine learning algorithms called unsupervised learning and then introduces you to clustering, one of the popular unsupervised learning algorithms. You will know about two popular clustering techniques - hierarchical clustering and k-means clustering. The chapter concludes with basic pre-processing steps before you start clustering data.\n  ",
           "parts":[
              "Unsupervised learning: basics",
              "Unsupervised learning in real world",
              "Pokémon sightings",
              "Basics of cluster analysis",
              "Pokémon sightings: hierarchical clustering",
              "Pokémon sightings: k-means clustering",
              "Data preparation for cluster analysis",
              "Normalize basic list data",
              "Visualize normalized data",
              "Normalization of small numbers",
              "FIFA 18: Normalize data"
           ]
        },
        {
           "title":"\n          Hierarchical Clustering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter focuses on a popular clustering algorithm - hierarchical clustering - and its implementation in SciPy. In addition to the procedure to perform hierarchical clustering, it attempts to help you answer an important question - how many clusters are present in your data? The chapter concludes with a discussion on the limitations of hierarchical clustering and discusses considerations while using hierarchical clustering.\n  ",
           "parts":[
              "Basics of hierarchical clustering",
              "Hierarchical clustering: ward method",
              "Hierarchical clustering: single method",
              "Hierarchical clustering: complete method",
              "Visualize clusters",
              "Visualize clusters with matplotlib",
              "Visualize clusters with seaborn",
              "How many clusters?",
              "Create a dendrogram",
              "How many clusters in comic con data?",
              "Limitations of hierarchical clustering",
              "Timing run of hierarchical clustering",
              "FIFA 18: exploring defenders"
           ]
        },
        {
           "title":"\n          K-Means Clustering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces a different clustering algorithm - k-means clustering - and its implementation in SciPy. K-means clustering overcomes the biggest drawback of hierarchical clustering that was discussed in the last chapter. As dendrograms are specific to hierarchical clustering, this chapter discusses one method to find the number of clusters before running k-means clustering. The chapter concludes with a discussion on the limitations of k-means clustering and discusses considerations while using this algorithm.\n  ",
           "parts":[
              "Basics of k-means clustering",
              "K-means clustering: first exercise",
              "Runtime of k-means clustering",
              "How many clusters?",
              "Elbow method on distinct clusters",
              "Elbow method on uniform data",
              "Limitations of k-means clustering",
              "Impact of seeds on distinct clusters",
              "Uniform clustering patterns",
              "FIFA 18: defenders revisited"
           ]
        },
        {
           "title":"\n          Clustering in Real World\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you are familiar with two of the most popular clustering techniques, this chapter helps you apply this knowledge to real-world problems. The chapter first discusses the process of finding dominant colors in an image, before moving on to the problem discussed in the introduction - clustering of news articles. The chapter concludes with a discussion on clustering with multiple variables, which makes it difficult to visualize all the data.\n  ",
           "parts":[
              "Dominant colors in images",
              "Extract RGB values from image",
              "How many dominant colors?",
              "Display dominant colors",
              "Document clustering",
              "TF-IDF of movie plots",
              "Top terms in movie clusters",
              "Clustering with multiple features",
              "Clustering with many features",
              "Basic checks on clusters",
              "FIFA 18: what makes a complete player?",
              "Farewell!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Data Scientist with Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Machine Learning with PySpark",
     "description":"Learn how to make predictions with Apache Spark.",
     "detailDescription":"Spark is a powerful, general purpose tool for working with Big Data. Spark transparently handles the distribution of compute tasks across a cluster. This means that operations are fast, but it also allows you to focus on the analysis rather than worry about technical details. In this course you'll learn how to get data into Spark and then delve into the three fundamental Spark Machine Learning algorithms: Linear Regression, Logistic Regression/Classifiers, and creating pipelines. Along the way you'll analyse a large dataset of flight delays and spam text messages. With this background you'll be ready to harness the power of Spark and apply it on your own Machine Learning projects!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction\n        ",
           "index":"1",
           "description":"\n    Spark is a framework for working with Big Data. In this chapter you'll cover some background about Spark and Machine Learning. You'll then find out how to connect to Spark using Python and load CSV data.\n  ",
           "parts":[
              "Machine Learning & Spark",
              "Characteristics of Spark",
              "Components in a Spark Cluster",
              "Connecting to Spark",
              "Location of Spark master",
              "Creating a SparkSession",
              "Loading Data",
              "Loading flights data",
              "Loading SMS spam data"
           ]
        },
        {
           "title":"\n          Classification\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you are familiar with getting data into Spark, you'll move onto building two types of classification model: Decision Trees and Logistic Regression. You'll also find out about a few approaches to data preparation.\n  ",
           "parts":[
              "Data Preparation",
              "Removing columns and rows",
              "Column manipulation",
              "Categorical columns",
              "Assembling columns",
              "Decision Tree",
              "Train/test split",
              "Build a Decision Tree",
              "Evaluate the Decision Tree",
              "Logistic Regression",
              "Build a Logistic Regression model",
              "Evaluate the Logistic Regression model",
              "Turning Text into Tables",
              "Punctuation, numbers and tokens",
              "Stop words and hashing",
              "Training a spam classifier"
           ]
        },
        {
           "title":"\n          Regression\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Next you'll learn to create Linear Regression models. You'll also find out how to augment your data by engineering new predictors as well as a robust approach to selecting only the most relevant predictors.\n  ",
           "parts":[
              "One-Hot Encoding",
              "Encoding flight origin",
              "Encoding shirt sizes",
              "Regression",
              "Flight duration model: Just distance",
              "Interpreting the coefficients",
              "Flight duration model: Adding origin airport",
              "Interpreting coefficients",
              "Bucketing & Engineering",
              "Bucketing departure time",
              "Flight duration model: Adding departure time",
              "Regularization",
              "Flight duration model: More features!",
              "Flight duration model: Regularisation!"
           ]
        },
        {
           "title":"\n          Ensembles & Pipelines\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Finally you'll learn how to make your models more efficient. You'll find out how to use pipelines to make your code clearer and easier to maintain. Then you'll use cross-validation to better test your models and select good model parameters. Finally you'll dabble in two types of ensemble model.\n  ",
           "parts":[
              "Pipeline",
              "Flight duration model: Pipeline stages",
              "Flight duration model: Pipeline model",
              "SMS spam pipeline",
              "Cross-Validation",
              "Cross validating simple flight duration model",
              "Cross validating flight duration model pipeline",
              "Grid Search",
              "Optimizing flights linear regression",
              "Dissecting the best flight duration model",
              "SMS spam optimised",
              "How many models for grid search?",
              "Ensemble",
              "Delayed flights with Gradient-Boosted Trees",
              "Delayed flights with a Random Forest",
              "Evaluating Random Forest",
              "Closing thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to PySpark",
        "Statistical Thinking in Python (Part 1)"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Big Data with PySpark",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Introduction to Spark SQL in Python",
     "description":"Learn how to manipulate data and create machine learning feature sets in Spark using SQL in Python.",
     "detailDescription":"You're familiar with SQL, and have heard great things about Apache Spark. Then this course is for you! Apache Spark is a computing framework for processing big data. Spark SQL is a component of Apache Spark that works with tabular data. Window functions are an advanced feature of SQL that take Spark to a new level of usefulness. You will use Spark SQL to analyze time series. You will extract the most common sequences of words from a text document. You will create feature sets from natural language text and use them to predict the last word in a sentence using logistic regression. Spark combines the power of distributed computing with the ease of use of Python and SQL. The course uses a natural language text dataset that is easy to understand. Sentences are sequences of words. Window functions are very suitable for manipulating sequence data. The same techniques taught here can be applied to sequences of song identifiers, video ids, or podcast ids. Exercises include discovering frequent word sequences, and converting word sequences into machine learning feature set data for training a text classifier.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Pyspark SQL\n        ",
           "index":"1",
           "description":"\n    In this chapter you will learn how to create and query a SQL table in Spark.  Spark SQL brings the expressiveness of SQL to Spark.  You will also learn how to use SQL window functions in Spark.  Window functions perform a calculation across rows that are related to the current row.  They greatly simplify achieving results that are difficult to express using only joins and traditional aggregations.  We'll use window functions to perform running sums, running differences, and other operations that are challenging to perform in basic SQL. \n  ",
           "parts":[
              "Creating and querying a SQL table in Spark",
              "Create a SQL table from a dataframe",
              "Determine the column names of a table",
              "Window function SQL",
              "Running sums using window function SQL",
              "Fix the broken query",
              "Dot notation and SQL",
              "Aggregation, step by step",
              "Aggregating the same column twice",
              "Aggregate dot SQL",
              "Convert window function from dot notation to SQL"
           ]
        },
        {
           "title":"\n          Using window function sql for natural language processing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will be loading natural language text.  Then you will apply a moving window analysis to find frequent word sequences.  \n  ",
           "parts":[
              "Loading natural language text",
              "Loading a dataframe from a parquet file",
              "Split and explode a text column",
              "Using monotonically_increasing_id()",
              "Moving window analysis",
              "Creating context window feature data",
              "Repartitioning the data",
              "Common word sequences",
              "What type of data is this",
              "Finding common word sequences",
              "Unique 5-tuples in sorted order",
              "Most frequent 3-tuples per chapter"
           ]
        },
        {
           "title":"\n          Caching, Logging, and the Spark UI\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapters you learned how to use the expressiveness of window function SQL.  However, this expressiveness now makes it important that you understand how to properly cache dataframes and cache SQL tables.  It is also important to know how to evaluate your application.  You learn how to do do this using the Spark UI.  You'll also learn a best practice for logging in Spark. Spark SQL brings with it another useful tool for tuning query performance issues, the query execution plan. You will learn how to use the execution plan for evaluating the provenance of a dataframe.\n  ",
           "parts":[
              "Caching",
              "Practicing caching: part 1",
              "Practicing caching: the SQL",
              "Practicing caching: putting it all together",
              "Caching and uncaching tables",
              "The Spark UI",
              "Spark UI storage tab",
              "Inspecting cache in the Spark UI",
              "Logging",
              "Practice logging",
              "Practice logging 2",
              "Query plans",
              "Practice query plans",
              "Practice reading query plans 2"
           ]
        },
        {
           "title":"\n          Text classification\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Previous chapters provided you with the tools for loading raw text, tokenizing it, and extracting word sequences. This is already very useful for analysis, but it is also useful for machine learning. What you've learned now comes together by using logistic regression to classify text.  By the conclusion of this chapter, you will have loaded raw natural language text data and used it to train a text classifier. \n  ",
           "parts":[
              "Extract Transform Select",
              "Practicing creating a UDF",
              "Practicing array column",
              "Creating feature data for classification",
              "Creating a UDF for vector data",
              "Applying a UDF to vector data",
              "Transforming text to vector format",
              "Text Classification",
              "Label the data",
              "Split the data",
              "Train the classifier",
              "Predicting and evaluating",
              "Evaluate the classifier",
              "Predict test data",
              "Recap"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to PySpark",
        "Intermediate SQL",
        "Python Data Science Toolbox (Part 2)"
     ],
     "tracks":[
        "Data Engineer with Python"
     ]
  },
  {
     "title":"Software Engineering for Data Scientists in Python",
     "description":"Learn all about modularity, documentation, & automated testing to help you solve Data Science problems quicker and more reliably.",
     "detailDescription":"Data scientists can experience huge benefits by learning concepts from the field of software engineering, allowing them to more easily reutilize their code and share it with collaborators. In this course, you'll learn all about the important ideas of modularity, documentation, & automated testing, and you'll see how they can help you solve Data Science problems quicker and in a way that will make future you happy. You'll even get to use your acquired software engineering chops to write your very own Python package for performing text analytics.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Software Engineering & Data Science\n        ",
           "index":"1",
           "description":"\n    Why should you as a Data Scientist care about Software Engineering concepts?  Here we'll cover specific Software Engineering concepts and how these important ideas can revolutionize your Data Science workflow!\n  ",
           "parts":[
              "Python, data science, & software engineering",
              "The big ideas",
              "Python modularity in the wild",
              "Introduction to packages & documentation",
              "Installing packages with pip",
              "Leveraging documentation",
              "Conventions and PEP 8",
              "Using pycodestyle",
              "Conforming to PEP 8",
              "PEP 8 in documentation"
           ]
        },
        {
           "title":"\n          Writing a Python Module\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Become a fully fledged Python package developer by writing your first package!  You'll learn how to structure and write Python code that you can be installed, used, and distributed just like famous packages such as NumPy and Pandas.\n  ",
           "parts":[
              "Writing your first package",
              "Minimal package requirements",
              "Naming packages",
              "Recognizing packages",
              "Adding functionality to packages",
              "Adding functionality to your package",
              "Using your package's new functionality",
              "Making your package portable",
              "Writing requirements.txt",
              "Installing package requirements",
              "Creating setup.py",
              "Listing requirements in setup.py"
           ]
        },
        {
           "title":"\n          Utilizing Classes\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Object Oriented Programming is a staple of Python development.  By leveraging classes and inheritance your Python package will become a much more powerful tool for your users.\n  ",
           "parts":[
              "Adding classes to a package",
              "Writing a class for your package",
              "Using your package's class",
              "Adding functionality to classes",
              "Writing a non-public method",
              "Using your class's functionality",
              "Classes and the DRY principle",
              "Using inheritance to create a class",
              "Adding functionality to a child class",
              "Using your child class",
              "Multilevel inheritance",
              "Exploring with dir and help",
              "Creating a grandchild class",
              "Using inherited methods"
           ]
        },
        {
           "title":"\n          Maintainability\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You've now written a fully functional Python package for text analysis!  To make maintaining your project as easy as possible we'll leverage best practices around concepts such as documentation and unit testing.\n  ",
           "parts":[
              "Documentation",
              "Identifying good comments",
              "Identifying proper docstrings",
              "Writing docstrings",
              "Readability counts",
              "Using good function names",
              "Using good variable names",
              "Refactoring for readability",
              "Unit testing",
              "Using doctest",
              "Using pytest",
              "Documentation & testing in practice",
              "Documenting classes for Sphinx",
              "Identifying tools",
              "Final Thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 1)",
        "Introduction to Shell"
     ],
     "tracks":[
        "Coding Best Practices with Python",
        "Data Engineer with Python",
        "Python Programmer"
     ]
  },
  {
     "title":"Introduction to Data Science in Python",
     "description":"Dive into data science using Python and learn how to effectively analyze and visualize your data.",
     "detailDescription":"Begin your journey into Data Science! Even if you've never written a line of code in your life, you'll be able to follow this course and witness the power of Python to perform Data Science. You'll use data to solve the mystery of Bayes, the kidnapped Golden Retriever, and along the way you'll become familiar with basic Python syntax and popular Data Science modules like Matplotlib (for charts and graphs) and Pandas (for tabular data).",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Getting Started in Python\n        ",
           "index":"1",
           "description":"\n    Welcome to the wonderful world of Data Analysis in Python! In this chapter, you'll learn the basics of Python syntax, load your first Python modules, and use functions to get a suspect list for the kidnapping of Bayes, DataCamp's prize-winning Golden Retriever.\n  ",
           "parts":[
              "Dive into Python",
              "Importing Python modules",
              "Correcting a broken import",
              "Creating variables",
              "Creating a float",
              "Creating strings",
              "Correcting string errors",
              "Valid variable names",
              "Fun with functions",
              "Load a DataFrame",
              "Correcting a function error",
              "Snooping for suspects"
           ]
        },
        {
           "title":"\n          Loading Data in pandas\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn a powerful Python libary: pandas.  Pandas lets you read, modify, and search tabular datasets (like spreadsheets and database tables).  You'll examine credit card records for the suspects and see if any of them made suspicious purchases.\n  ",
           "parts":[
              "What is pandas?",
              "Loading a DataFrame",
              "Inspecting a DataFrame",
              "Selecting columns",
              "Two methods for selecting columns",
              "Correcting column selection errors",
              "More column selection mistakes",
              "Selecting rows with logic",
              "Logical testing",
              "Selecting missing puppies",
              "Narrowing the list of suspects"
           ]
        },
        {
           "title":"\n          Plotting Data with matplotlib\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Get ready to visualize your data! You'll create line plots with another Python module: matplotlib.  Using line plots, you'll analyze the letter frequencies from the ransom note and several handwriting samples to determine the kidnapper.\n  ",
           "parts":[
              "Creating line plots",
              "Working hard",
              "Or hardly working?",
              "Adding text to plots",
              "Adding a legend",
              "Adding labels",
              "Adding floating text",
              "Styling graphs",
              "Tracking crime statistics",
              "Playing with styles",
              "Identifying Bayes' kidnapper"
           ]
        },
        {
           "title":"\n          Different Types of Plots\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you'll learn how to create three new plot types: scatter plots, bar plots, and histograms.  You'll use these tools to locate where the kidnapper is hiding and rescue Bayes, the Golden Retriever.\n  ",
           "parts":[
              "Making a scatter plot",
              "Charting cellphone data",
              "Modifying a scatterplot",
              "Making a bar chart",
              "Build a simple bar chart",
              "Where did the time go?",
              "Making a histogram",
              "Modifying histograms",
              "Heroes with histograms",
              "Recap of the rescue"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Data Analyst with Python",
        "Data Skills for Business",
        "Python Programmer"
     ]
  },
  {
     "title":"Introduction to Data Visualization with Matplotlib",
     "description":"Learn how to create, customize, and share data visualizations using Matplotlib.",
     "detailDescription":"Visualizing data in plots and figures exposes the underlying patterns in the data and provides insights. Good visualizations also help you communicate your data to others, and are useful to data analysts and other consumers of the data. In this course, you will learn how to use Matplotlib, a powerful Python data visualization library. Matplotlib provides the building blocks to create rich visualizations of many different kinds of datasets. You will learn how to create visualizations for different kinds of data and how to customize, automate, and share these visualizations.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Matplotlib\n        ",
           "index":"1",
           "description":"\n    This chapter introduces the Matplotlib visualization library and demonstrates how to use it with data.\n  ",
           "parts":[
              "Introduction to data visualization with Matplotlib",
              "Using the matplotlib.pyplot interface",
              "Adding data to an Axes object",
              "Customizing your plots",
              "Customizing data appearance",
              "Customizing axis labels and adding titles",
              "Small multiples",
              "Creating a grid of subplots",
              "Creating small multiples with plt.subplots",
              "Small multiples with shared y axis"
           ]
        },
        {
           "title":"\n          Plotting time-series\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Time series data is data that is recorded. Visualizing this type of data helps clarify trends and illuminates relationships between data.\n  ",
           "parts":[
              "Plotting time-series data",
              "Read data with a time index",
              "Plot time-series data",
              "Using a time index to zoom in",
              "Plotting time-series with different variables",
              "Plotting two variables",
              "Defining a function that plots time-series data",
              "Using a plotting function",
              "Annotating time-series data",
              "Annotating a plot of time-series data",
              "Plotting time-series: putting it all together"
           ]
        },
        {
           "title":"\n          Quantitative comparisons and statistical visualizations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Visualizations can be used to compare data in a quantitative manner. This chapter explains several methods for quantitative visualizations.\n  ",
           "parts":[
              "Quantitative comparisons: bar-charts",
              "Bar chart",
              "Stacked bar chart",
              "Quantitative comparisons: histograms",
              "Creating histograms",
              "\"Step\" histogram",
              "Statistical plotting",
              "Adding error-bars to a bar chart",
              "Adding error-bars to a plot",
              "Creating boxplots",
              "Quantitative comparisons: scatter plots",
              "Simple scatter plot",
              "Encoding time by color"
           ]
        },
        {
           "title":"\n          Sharing visualizations with others\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter shows you how to share your visualizations with others: how to save your figures as files, how to adjust their look and feel, and how to automate their creation based on input data.\n  ",
           "parts":[
              "Preparing your figures to share with others",
              "Selecting a style for printing",
              "Switching between styles",
              "Saving your visualizations",
              "Saving a file several times",
              "Save a figure with different sizes",
              "Automating figures from data",
              "Unique values of a column",
              "Automate your visualization",
              "Where to go next"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Analyst with Python",
        "Data Scientist with Python",
        "Data Visualization with Python"
     ]
  },
  {
     "title":"Feature Engineering for Machine Learning in Python",
     "description":"Create new features to improve the performance of your Machine Learning models.",
     "detailDescription":"Every day you read about the amazing breakthroughs in how the newest applications of machine learning are changing the world. Often this reporting glosses over the fact that a huge amount of data munging and feature engineering must be done before any of these fancy models can be used. In this course, you will learn how to do just that. You will work with Stack Overflow Developers survey, and historic US presidential inauguration addresses, to understand how best to preprocess and engineer features from categorical, continuous, and unstructured data. This course will give you hands-on experience on how to prepare any data for your own machine learning models.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Creating Features\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will explore what feature engineering is and how to get started with applying it to real-world data. You will load, explore and visualize a survey response dataset, and in doing so you will learn about its underlying data types and why they have an influence on how you should engineer your features. Using the pandas package you will create new features from both categorical and continuous columns.\n  ",
           "parts":[
              "Why generate features?",
              "Getting to know your data",
              "Selecting specific data types",
              "Dealing with categorical features",
              "One-hot encoding and dummy variables",
              "Dealing with uncommon  categories",
              "Numeric variables",
              "Binarizing columns",
              "Binning values"
           ]
        },
        {
           "title":"\n          Dealing with Messy Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces you to the reality of messy and incomplete data. You will learn how to find where your data has missing values and explore multiple approaches on how to deal with them. You will also use string manipulation techniques to deal with unwanted characters in your dataset.\n  ",
           "parts":[
              "Why do missing values exist?",
              "How sparse is my data?",
              "Finding the missing values",
              "Dealing with missing values (I)",
              "Listwise deletion",
              "Replacing missing values with constants",
              "Dealing with missing values (II)",
              "Filling continuous missing values",
              "Imputing values in predictive models",
              "Dealing with other data issues",
              "Dealing with stray characters (I)",
              "Dealing with stray characters (II)",
              "Method chaining"
           ]
        },
        {
           "title":"\n          Conforming to Statistical Assumptions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will focus on analyzing the underlying distribution of your data and whether it will impact your machine learning pipeline. You will learn how to deal with skewed data and situations where outliers may be negatively impacting your analysis.\n  ",
           "parts":[
              "Data distributions",
              "What does your data look like? (I)",
              "What does your data look like? (II)",
              "When don't you have to transform your data?",
              "Scaling and transformations",
              "Normalization",
              "Standardization",
              "Log transformation",
              "When can you use normalization?",
              "Removing outliers",
              "Percentage based outlier removal",
              "Statistical outlier removal",
              "Scaling and transforming new data",
              "Train and testing transformations (I)",
              "Train and testing transformations (II)"
           ]
        },
        {
           "title":"\n          Dealing with Text Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Finally, in this chapter, you will work with unstructured text data, understanding ways in which you can engineer columnar features out of a text corpus. You will compare how different approaches may impact how much context is being extracted from a text, and how to balance the need for context, without too many features being created.\n  ",
           "parts":[
              "Encoding text",
              "Cleaning up your text",
              "High level text features",
              "Word counts",
              "Counting words (I)",
              "Counting words (II)",
              "Limiting your features",
              "Text to DataFrame",
              "Term frequency-inverse document frequency",
              "Tf-idf",
              "Inspecting Tf-idf values",
              "Transforming unseen data",
              "N-grams",
              "Using longer n-grams",
              "Finding the most common words",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "pandas Foundations",
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Creating Robust Workflows in Python",
     "description":"Learn to develop a set of principles for your data science and software development projects.",
     "detailDescription":"The decisions we make in life are guided by our principles. No one is born with a life philosophy, instead everyone creates their own over time. In this course, you will develop a set of principles for your data science and software development projects. These principles will save time, prevent frustration, and build your confidence as a data scientist and software developer. In addition to best practices in the Python programming language, You will learn to leverage hidden gems in the Python standard library and well-known tools from Python's excellent ecosystem, such as pandas and scikit-learn. The time you invest in this course will yield dividends for you and others throughout your career. Your colleagues, community members, and future self will thank you.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Python Programming Principles\n        ",
           "index":"1",
           "description":"\n    In this chapter, we will discuss three principles that guide decisions made by Python programmers. You will put these principles into practice in the coding exercises and throughout the rest of the course!\n  ",
           "parts":[
              "Don't repeat yourself",
              "Functions and iteration",
              "Find matches",
              "Dataset dimensions",
              "Modularity",
              "Extract words",
              "Most frequent words",
              "Abstraction",
              "Instance method",
              "Class method"
           ]
        },
        {
           "title":"\n          Documentation and Tests\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Documentation and tests are often overlooked, despite being essential to the success of all projects. In this chapter, you will learn how to include documentation in our code and practice Test-Driven Development (TDD), a process that puts tests first!\n  ",
           "parts":[
              "Type hints",
              "TextFile hints",
              "MatchFinder hints",
              "Docstrings",
              "Get matches docstring",
              "Obtain words docstring",
              "Reports",
              "Build notebooks",
              "Convert notebooks",
              "Pytest",
              "Parametrize",
              "Raises"
           ]
        },
        {
           "title":"\n          Shell superpowers\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Shell scripting is an essential part of any Python workflow. In this chapter, you will learn how to build command-line interfaces (CLIs) for Python programs and to automate common tasks related to version control, virtual environments, and Python packaging.\n  ",
           "parts":[
              "Command-line interfaces",
              "Argparse nbuild()",
              "Docopt nbuild()",
              "Git version control",
              "Commit added files",
              "Commit modified files",
              "Virtual environments",
              "List installed packages",
              "Show package information",
              "Persistence and packaging",
              "Pickle dataframes",
              "Pickle models"
           ]
        },
        {
           "title":"\n          Projects, pipelines, and parallelism\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter of this course, you will learn how to facilitate and standardize project setup using project templates. You will also consider the benefits of zipped executable projects, Jupyter notebooks parameterization, and parallel computing.\n  ",
           "parts":[
              "Project templates",
              "Set up template",
              "Create project",
              "Executable projects",
              "Zipapp",
              "Argparse main()",
              "Notebook workflows",
              "Parametrize notebooks",
              "Summarize notebooks",
              "Parallel computing",
              "Dask dataframe",
              "Joblib",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)",
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Coding Best Practices with Python"
     ]
  },
  {
     "title":"Foundations of Probability in Python",
     "description":"Learn fundamental probability concepts like random variables, mean and variance, probability distributions, and conditional probabilities.",
     "detailDescription":"Probability is the study of regularities that emerge in the outcomes of random experiments. In this course, you'll learn about fundamental probability concepts like random variables (starting with the classic coin flip example) and how to calculate mean and variance, probability distributions, and conditional probability. We'll also explore two very important results in probability: the law of large numbers and the central limit theorem. Since probability is at the core of data science and machine learning, these concepts will help you understand and apply models more robustly. Chances are everywhere, and the study of probability will change the way you see the world. Let’s get random!",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Let's start flipping coins\n        ",
           "index":"1",
           "description":"\n    A coin flip is the classic example of a random experiment. The possible outcomes are heads or tails. This type of experiment, known as a Bernoulli or binomial trial, allows us to study problems with two possible outcomes, like “yes” or “no” and “vote” or “no vote.” This chapter introduces Bernoulli experiments, binomial distributions to model multiple Bernoulli trials, and probability simulations with the scipy library.\n  ",
           "parts":[
              "Let’s flip a coin in Python",
              "Flipping coins",
              "Using binom to flip even more coins",
              "Probability mass and distribution functions",
              "Predicting the probability of defects",
              "Predicting employment status",
              "Predicting burglary conviction rate",
              "Expected value, mean, and variance",
              "Calculating the expected value and variance",
              "Calculating the sample mean",
              "Checking the result",
              "Calculating the mean and variance of a sample"
           ]
        },
        {
           "title":"\n          Calculate some probabilities\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll learn to calculate various kinds of probabilities, such as the probability of the intersection of two events and the sum of probabilities of two events, and to simulate those situations. You'll also learn about conditional probability and how to apply Bayes' rule.\n  ",
           "parts":[
              "Calculating probabilities of two events",
              "Any overlap?",
              "Measuring a sample",
              "Joint probabilities",
              "Deck of cards",
              "Conditional probabilities",
              "Delayed flights",
              "Contingency table",
              "More cards",
              "Total probability law",
              "Formula 1 engines",
              "Voters",
              "Bayes' rule",
              "Conditioning",
              "Factories and parts",
              "Swine flu blood test"
           ]
        },
        {
           "title":"\n          Important probability distributions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Until now we've been working with binomial distributions, but there are many probability distributions a random variable can take. In this chapter we'll introduce three more that are related to the binomial distribution: the normal, Poisson, and geometric distributions.\n  ",
           "parts":[
              "Normal distributions",
              "Range of values",
              "Plotting normal distributions",
              "Within three standard deviations",
              "Normal probabilities",
              "Restaurant spending example",
              "Smartphone battery example",
              "Adults' heights example",
              "Poisson distributions",
              "ATM example",
              "Highway accidents example",
              "Generating and plotting Poisson distributions",
              "Geometric distributions",
              "Catching salmon example",
              "Free throws example",
              "Generating and plotting geometric distributions"
           ]
        },
        {
           "title":"\n          Probability meets statistics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    No that you know how to calculate probabilities and important properties of probability distributions, we'll introduce two important results: the law of large numbers and the central limit theorem. This will expand your understanding on how the sample mean converges to the population mean as more data is available and how the sum of random variables behaves under certain conditions.\n\nWe will also explore connections between linear and logistic regressions as applications of probability and statistics in data science.\n  ",
           "parts":[
              "From sample mean to population mean",
              "Generating a sample",
              "Calculating the sample mean",
              "Plotting the sample mean",
              "Adding random variables",
              "Sample means",
              "Sample means follow a normal distribution",
              "Adding dice rolls",
              "Linear regression",
              "Fitting a model",
              "Predicting test scores",
              "Studying residuals",
              "Logistic regression",
              "Fitting a logistic model",
              "Predicting if students will pass",
              "Passing two tests",
              "Wrapping up"
           ]
        }
     ],
     "prerequistes":[
        "Statistical Thinking in Python (Part 1)"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Writing Efficient Code with pandas",
     "description":"Learn efficient techniques in pandas to optimize your Python code.",
     "detailDescription":"The ability to efficiently work with big datasets and extract valuable information is an indispensable tool for every aspiring data scientist. When working with a small amount of data, we often don’t realize how slow code execution can be. This course will build on your knowledge of Python and the pandas library and introduce you to efficient built-in pandas functions to perform tasks faster. Pandas’ built-in functions allow you to tackle the simplest tasks, like targeting specific entries and features from the data, to the most complex tasks, like applying functions on groups of entries, much faster than Python's usual methods. By the end of this course, you will be able to apply a function to data based on a feature value, iterate through big datasets rapidly, and manipulate data belonging to different groups efficiently. You will apply these methods on a variety of real-world datasets, such as poker hands or restaurant tips.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Selecting columns and rows efficiently\n        ",
           "index":"1",
           "description":"\n    This chapter will give you an overview of why efficient code matters and selecting specific and random rows and columns efficiently.\n  ",
           "parts":[
              "The need for efficient coding I",
              "What does time.time() measure?",
              "Measuring time I",
              "Measuring time II",
              "Locate rows: .iloc[] and .loc[]",
              "Row selection: loc[] vs iloc[]",
              "Column selection: .iloc[] vs by name",
              "Select random rows",
              "Random row selection",
              "Random column selection"
           ]
        },
        {
           "title":"\n          Replacing values in a DataFrame\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter shows the usage of the replace() function for replacing one or multiple values using lists and dictionaries. \n  ",
           "parts":[
              "Replace scalar values using .replace()",
              "Replacing scalar values I",
              "Replace scalar values II",
              "Replace values using lists",
              "Replace multiple values I",
              "Replace multiple values II",
              "Replace values using dictionaries",
              "Replace single values I",
              "Replace single values II",
              "Replace multiple values III",
              "Most efficient method for scalar replacement"
           ]
        },
        {
           "title":"\n          Efficient iterating\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter presents different ways of iterating through a Pandas DataFrame and why vectorization is the most efficient way to achieve it.\n  ",
           "parts":[
              "Looping using the .iterrows() function",
              "Create a generator for a pandas DataFrame",
              "The iterrows() function for looping",
              "Looping using the .apply() function",
              ".apply() function in every cell",
              ".apply() for rows iteration",
              "Vectorization over pandas series",
              "Why vectorization in pandas is so fast?",
              "pandas vectorization in action",
              "Vectorization with NumPy arrays using  .values()",
              "Best method of vectorization",
              "Vectorization methods for looping a DataFrame"
           ]
        },
        {
           "title":"\n          Data manipulation using .groupby()\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter describes the groupby() function and how we can use it to transform values in place, replace missing values and apply complex functions group-wise. \n  ",
           "parts":[
              "Data transformation using .groupby().transform",
              "The min-max normalization using .transform()",
              "Transforming values to probabilities",
              "Validation of normalization",
              "When to use transform()?",
              "Missing value imputation using  transform()",
              "Identifying missing values",
              "Missing value imputation",
              "Data filtration using the filter() function",
              "When to use filtration?",
              "Data filtration",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[
        "Coding Best Practices with Python"
     ]
  },
  {
     "title":"Python for Spreadsheet Users",
     "description":"Use your knowledge of common spreadsheet functions and techniques to explore Python!",
     "detailDescription":"Are you looking for a better solution than the one you’ve built in a spreadsheet? If so, then Python for Spreadsheet Users is a great introduction to the Python language, and will put you on the right path towards automating repetitive work, diving deeper into your data, and widening the scope of what you are capable of accomplishing. Throughout the course, we’ll draw parallels to common spreadsheet functions and techniques, so you’ll always have a familiar reference point as you dive head first into Python.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Diving In\n        ",
           "index":"1",
           "description":"\n    Let's get right into it! In this chapter, you'll become acclimated with Python syntax, loading your data into a Python session, and how to explore and edit this data to answer business questions.\n  ",
           "parts":[
              "Welcome to Python!",
              "Importing packages",
              "Loading data",
              "Looking at data with print()",
              "DataFrames and their methods",
              "The .head() method",
              ".info() and .describe() methods",
              "The .sort_values() method",
              "Filtering rows and creating columns",
              "Filtering",
              "Creating columns",
              "Putting it all together"
           ]
        },
        {
           "title":"\n          Pivoting in Python\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The pivot table is a core tool in the savvy spreadsheet user's arsenal. In this chapter, we'll focus on simply recreating this functionality in Python using some handy DataFrame methods.\n  ",
           "parts":[
              "Grouping and summing: the beginner's pivot table",
              "Pure summary with .sum()",
              ".groupby() and .sum() together",
              "Summarizing and sorting values",
              "Grouping by multiple columns",
              "Which is a list?",
              "Movie genre performance by location",
              "What do seniors like?",
              "More Useful Summary Tools",
              "Best-selling movie by location",
              "Which movie averages the most sales"
           ]
        },
        {
           "title":"\n          Working with Multiple Sheets\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will focus on how to import and manage multiple sheets from a workbook, as well as how to join these sheets together using the Python equivalent of a VLOOKUP: the left join.\n  ",
           "parts":[
              "Working with multiple sheets",
              "pd.ExcelFile() function",
              ".sheet_names attribute",
              ".parse() method",
              "Preparing to put tables together",
              ".str.lower() and .str.title()",
              ".str.strip()",
              "Selecting and .drop()",
              "Merging: The VLOOKUP of Python",
              "Merging for ticket prices",
              "Merging for theater locations",
              "Putting it all together again"
           ]
        },
        {
           "title":"\n          Plotting Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you're able to import and manipulate your data in Python, let's shift our focus to visualizing this data so that our insights are easily communicable to others.\n  ",
           "parts":[
              "How visualization works in Python",
              "How to build a graph in Python",
              "Top grossing films",
              "Best genres",
              "Building up the barplot",
              "Put a title on it",
              "Label your axes!",
              "Make it pretty with sns",
              "The power of hue",
              "Interpreting hue",
              "Genre by market",
              "Genre by ticket type",
              "Wrapping up"
           ]
        }
     ],
     "prerequistes":[
        "Pivot Tables in Spreadsheets"
     ],
     "tracks":[

     ]
  },
  {
     "title":"AI Fundamentals",
     "description":"Learn the fundamentals of AI. No programming experience required!",
     "detailDescription":"So what is all this AI fuss about? Machine Learning, Deep Learning, Predictive Analytics -- what is the reality behind the hype? How do machines actually learn and what are their limits? How can we use Machine Learning to recognize written digits, predict customer churn and find structure in Elon Musk's tweets? All this -- and much more -- is the topic of this course, which will introduce you to the world of AI in a gentle, but firm and very practical manner.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to AI\n        ",
           "index":"1",
           "description":"\n    Understand the definition of AI ( “general” and “narrow”), the relationship between AI and Machine Learning, and will the robots take over the world - soon?\n  ",
           "parts":[
              "Do androids dream of electric sheep?",
              "General vs Narrow AI",
              "Why Python?",
              "The elephant in the room",
              "All models are wrong but some are useful",
              "Parameters & hyper-parameters",
              "Too much of a good thing",
              "Three flavors of Machine Learning",
              "Guess the flavor I",
              "Guess the flavor II",
              "Simple digit recognition"
           ]
        },
        {
           "title":"\n          Supervised Learning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn about supervised learning, work with labeled data and train regression models.\n  ",
           "parts":[
              "Supervised Learning Fundamentals",
              "Regression or Classification I",
              "When regression means classification",
              "Training and evaluating classification models",
              "SPAMtastic!",
              "Hold-out",
              "Training and evaluating regression models",
              "Tailor made",
              "Going non-linear"
           ]
        },
        {
           "title":"\n          Unsupervised Learning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn about unsupervised learning, divide data into clusters, detect anomalies and select the right model for the job.\n  ",
           "parts":[
              "Dimensionality reduction",
              "Principal Component Analysis",
              "Visitors from outer space",
              "Clustering",
              "Lucky number K",
              "Elbow reading",
              "DBSCAN",
              "Anomaly detection",
              "How unsupervised really?",
              "The go-to algorithm",
              "The odd one out",
              "Elon's tweets",
              "Selecting the right model",
              "Fruits of knowledge",
              "Predicting customer churn"
           ]
        },
        {
           "title":"\n          Deep Learning & Beyond\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn about deep learning, create your first neural networks, and train a model to recognize digits.\n  ",
           "parts":[
              "Deep Learning & Beyond",
              "The nucleus",
              "How to train your dragon",
              "Your first neural net",
              "Deep Learning",
              "Layers",
              "Guess the architecture",
              "Rolling in the deep",
              "Convolutional Neural Networks",
              "The Beauty of the Beast",
              "One-liner modeling",
              "One-line evaluation",
              "Deep Learning for Digit Recognition",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Data Skills for Business"
     ]
  },
  {
     "title":"Analyzing Marketing Campaigns with pandas",
     "description":"Build up your pandas skills and answer marketing questions by merging, slicing, visualizing, and more!",
     "detailDescription":"One of the biggest challenges when studying data science technical skills is understanding how those skills and concepts translate into real jobs. Whether you're looking to level up in your marketing job by incorporating Python and pandas or you're trying to get a handle on what kinds of work a data scientist in a marketing organization might do, this course is a great match for you. We'll practice translating common business questions into measurable outcomes, including \"How did this campaign perform?\", \"Which channel is referring the most subscribers?\", \"Why is a particular channel underperforming?\" and more using a fake marketing dataset based on the data of an online subscription business. This course will build on Python and pandas fundamentals, such as merging/slicing datasets, groupby(), correcting data types and visualizing results using matplotlib.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Pandas\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will review pandas basics including importing datasets, exploratory analysis, and basic plotting. \n  ",
           "parts":[
              "Introduction to pandas for marketing",
              "Importing the dataset",
              "Examining the data",
              "Data types and data merging",
              "Updating the data type of a column",
              "Adding new columns",
              "Date columns",
              "Initial exploratory analysis",
              "Daily marketing reach by channel",
              "Visualizing daily marketing reach"
           ]
        },
        {
           "title":"\n          Exploratory Analysis & Summary Statistics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about common marketing metrics and how to calculate them using pandas. You will also visualize your results and practice user segmentation. \n  ",
           "parts":[
              "Introduction to common marketing metrics",
              "Calculating conversion rate",
              "Calculating retention rate",
              "Customer segmentation",
              "Comparing language conversion rate (I)",
              "Comparing language conversion rate (II)",
              "Aggregating by date",
              "Plotting campaign results (I)",
              "Visualize conversion rate by language",
              "Creating daily conversion rate DataFrame",
              "Setting up our data to visualize daily conversion",
              "Visualize daily conversion rate",
              "Plotting campaign results (II)",
              "Marketing channels across age groups",
              "Grouping and counting by multiple columns",
              "Analyzing retention rates for the campaign"
           ]
        },
        {
           "title":"\n          Conversion Attribution\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will build functions to automate common marketing analysis and determine why certain marketing channels saw lower than usual conversion rates during late January. \n  ",
           "parts":[
              "Building functions to automate analysis",
              "Building a conversion function",
              "Test and visualize conversion function",
              "Plotting function",
              "Putting it all together",
              "Identifying inconsistencies",
              "House ads conversion rate",
              "Analyzing House ads conversion rate",
              "House ads conversion by language",
              "Creating a DataFrame for house ads",
              "Confirming house ads error",
              "Resolving inconsistencies",
              "Setting up conversion indexes",
              "Analyzing user preferences",
              "Creating a DataFrame based on indexes",
              "Assessing bug impact"
           ]
        },
        {
           "title":"\n          Personalization A/B Test\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will analyze an A/B test and learn about the importance of segmentation when interpreting the results of a test.  \n  ",
           "parts":[
              "A/B testing for marketing",
              "Determining key metrics",
              "Test allocation",
              "Comparing conversion rates",
              "Calculating lift & significance testing",
              "Creating a lift function",
              "Evaluating statistical significance",
              "A/B testing & segmentation",
              "Building an A/B test segmenting function",
              "Using your segmentation function",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python",
        "pandas Foundations"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to TensorFlow in Python",
     "description":"Learn the fundamentals of neural networks and how to build deep learning models using TensorFlow.",
     "detailDescription":"Not long ago, cutting-edge computer vision algorithms couldn’t differentiate between images of cats and dogs. Today, a skilled data scientist equipped with nothing more than a laptop can classify tens of thousands of objects with greater accuracy than the human eye. In this course, you will use TensorFlow 2.1 to develop, train, and make predictions with the models that have powered major advances in recommendation systems, image classification, and FinTech. You will learn both high-level APIs, which will enable you to design and train deep learning models in 15 lines of code, and low-level APIs, which will allow you to move beyond off-the-shelf routines. You will also learn to accurately predict housing prices, credit card borrower defaults, and images of sign language gestures.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to TensorFlow\n        ",
           "index":"1",
           "description":"\n    Before you can build advanced models in TensorFlow 2.0, you will first need to understand the basics. In this chapter, you’ll learn how to define constants and variables, perform tensor addition and multiplication, and compute derivatives. Knowledge of linear algebra will be helpful, but not necessary.\n  ",
           "parts":[
              "Constants and variables",
              "Defining data as constants",
              "Defining variables",
              "Basic operations",
              "Performing element-wise multiplication",
              "Making predictions with matrix multiplication",
              "Summing over tensor dimensions",
              "Advanced operations",
              "Reshaping tensors",
              "Optimizing with gradients",
              "Working with image data"
           ]
        },
        {
           "title":"\n          Linear models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to build, solve, and make predictions with models in TensorFlow 2.0. You will focus on a simple class of models – the linear regression model – and will try to predict housing prices. By the end of the chapter, you will know how to load and manipulate data, construct loss functions, perform minimization, make predictions, and reduce resource use with batch training.\n  ",
           "parts":[
              "Input data",
              "Load data using pandas",
              "Setting the data type",
              "Loss functions",
              "Loss functions in TensorFlow",
              "Modifying the loss function",
              "Linear regression",
              "Set up a linear regression",
              "Train a linear model",
              "Multiple linear regression",
              "Batch training",
              "Preparing to batch train",
              "Training a linear model in batches"
           ]
        },
        {
           "title":"\n          Neural Networks\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The previous chapters taught you how to build models in TensorFlow 2.0. In this chapter, you will apply those same tools to build, train, and make predictions with neural networks. You will learn how to define dense layers, apply activation functions, select an optimizer, and apply regularization to reduce overfitting. You will take advantage of TensorFlow's flexibility by using both low-level linear algebra and high-level Keras API operations to define and train models.\n  ",
           "parts":[
              "Dense layers",
              "The linear algebra of dense layers",
              "The low-level approach with multiple examples",
              "Using the dense layer operation",
              "Activation functions",
              "Binary classification problems",
              "Multiclass classification problems",
              "Optimizers",
              "The dangers of local minima",
              "Avoiding local minima",
              "Training a network in TensorFlow",
              "Initialization in TensorFlow",
              "Defining the model and loss function",
              "Training neural networks with TensorFlow"
           ]
        },
        {
           "title":"\n          High Level APIs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter, you'll use high-level APIs in TensorFlow 2.0 to train a sign language letter classifier. You will use both the sequential and functional Keras APIs to train, validate, make predictions with, and evaluate models. You will also learn how to use the Estimators API to streamline the model definition and training process, and to avoid errors.\n  ",
           "parts":[
              "Defining neural networks with Keras",
              "The sequential model in Keras",
              "Compiling a sequential model",
              "Defining a multiple input model",
              "Training and validation with Keras",
              "Training with Keras",
              "Metrics and validation with Keras",
              "Overfitting detection",
              "Evaluating models",
              "Training models with the Estimators API",
              "Preparing to train with Estimators",
              "Defining Estimators",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Deep Learning in Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Model Validation in Python",
     "description":"Learn the basics of model validation, validation techniques, and begin creating validated and high performing models.",
     "detailDescription":"Machine learning models are easier to implement now more than ever before. Without proper validation, the results of running new data through a model might not be as accurate as expected. Model validation allows analysts to confidently answer the question, how good is your model? We will answer this question for classification models using the complete set of tic-tac-toe endgame scenarios, and for regression models using fivethirtyeight’s ultimate Halloween candy power ranking dataset. In this course, we will cover the basics of model validation, discuss various validation techniques, and begin to develop tools for creating validated and high performing models.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basic Modeling in scikit-learn\n        ",
           "index":"1",
           "description":"\n    Before we can validate models, we need an understanding of how to create and work with them. This chapter provides an introduction to running regression and classification models in scikit-learn. We will use this model building foundation throughout the remaining chapters. \n  ",
           "parts":[
              "Introduction to model validation",
              "Modeling steps",
              "Seen vs. unseen data",
              "Regression models",
              "Set parameters and fit a model",
              "Feature importances",
              "Classification models",
              "Classification predictions",
              "Reusing model parameters",
              "Random forest classifier"
           ]
        },
        {
           "title":"\n          Validation Basics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter focuses on the basics of model validation. From splitting data into training, validation, and testing datasets, to creating an understanding of the bias-variance tradeoff, we build the foundation for the techniques of K-Fold and Leave-One-Out validation practiced in chapter three. \n  ",
           "parts":[
              "Creating train, test, and validation datasets",
              "Create one holdout set",
              "Create two holdout sets",
              "Why use holdout sets",
              "Accuracy metrics: regression models",
              "Mean absolute error",
              "Mean squared error",
              "Performance on data subsets",
              "Classification metrics",
              "Confusion matrices",
              "Confusion matrices, again",
              "Precision vs. recall",
              "The bias-variance tradeoff",
              "Error due to under/over-fitting",
              "Am I underfitting?"
           ]
        },
        {
           "title":"\n          Cross Validation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Holdout sets are a great start to model validation. However, using a single train and test set if often not enough. Cross-validation is considered the gold standard when it comes to validating model performance and is almost always used when tuning model hyper-parameters. This chapter focuses on performing cross-validation to validate model performance. \n  ",
           "parts":[
              "The problems with holdout sets",
              "Two samples",
              "Potential problems",
              "Cross-validation",
              "scikit-learn's KFold()",
              "Using KFold indices",
              "sklearn's cross_val_score()",
              "scikit-learn's methods",
              "Implement cross_val_score()",
              "Leave-one-out-cross-validation (LOOCV)",
              "When to use LOOCV",
              "Leave-one-out-cross-validation"
           ]
        },
        {
           "title":"\n          Selecting the best model with Hyperparameter tuning. \n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The first three chapters focused on model validation techniques. In chapter 4 we apply these techniques, specifically cross-validation, while learning about hyperparameter tuning. After all, model validation makes tuning possible and helps us select the overall best model. \n  ",
           "parts":[
              "Introduction to hyperparameter tuning",
              "Creating Hyperparameters",
              "Running a model using ranges",
              "RandomizedSearchCV",
              "Preparing for RandomizedSearch",
              "Implementing RandomizedSearchCV",
              "Selecting your final model",
              "Best classification accuracy",
              "Selecting the best precision model",
              "Course completed!"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Hyperparameter Tuning in Python",
     "description":"Learn to tune hyperparameters in Python.",
     "detailDescription":"Building powerful machine learning models depends heavily on the set of hyperparameters used. But with increasingly complex models with lots of options, how do you efficiently find the best settings for your particular problem? In this course you will get practical experience in using some common methodologies for automated hyperparameter tuning in Python using Scikit Learn. These include Grid Search, Random Search & advanced optimization methodologies including Bayesian & Genetic algorithms . You will use a dataset predicting credit card defaults as you build skills to dramatically increase the efficiency and effectiveness of your machine learning model building.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Hyperparameters and Parameters\n        ",
           "index":"1",
           "description":"\n    In this introductory chapter you will learn the difference between hyperparameters and parameters. You will practice extracting and analyzing parameters, setting hyperparameter values for several popular machine learning algorithms. Along the way you will learn some best practice tips & tricks for choosing which hyperparameters to tune and what values to set & build learning curves to analyze your hyperparameter choices.\n  ",
           "parts":[
              "Introduction & 'Parameters'",
              "Parameters in Logistic Regression",
              "Extracting a Logistic Regression parameter",
              "Extracting a Random Forest parameter",
              "Introducing Hyperparameters",
              "Hyperparameters in Random Forests",
              "Exploring Random Forest Hyperparameters",
              "Hyperparameters of KNN",
              "Setting & Analyzing Hyperparameter Values",
              "Automating Hyperparameter Choice",
              "Building Learning Curves"
           ]
        },
        {
           "title":"\n          Grid search\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces you to a popular automated hyperparameter tuning methodology called Grid Search. You will learn what it is, how it works and practice undertaking a Grid Search using Scikit Learn. You will then learn how to analyze the output of a Grid Search & gain practical experience doing this.\n  ",
           "parts":[
              "Introducing Grid Search",
              "Build Grid Search functions",
              "Iteratively tune multiple hyperparameters",
              "How Many Models?",
              "Grid Search with Scikit Learn",
              "GridSearchCV inputs",
              "GridSearchCV with Scikit Learn",
              "Understanding a grid search output",
              "Using the best outputs",
              "Exploring the grid search results",
              "Analyzing the best results",
              "Using the best results"
           ]
        },
        {
           "title":"\n          Random Search\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will be introduced to another popular automated hyperparameter tuning methodology called Random Search. You will learn what it is, how it works and importantly how it differs from grid search. You will learn some advantages and disadvantages of this method and when to choose this method compared to Grid Search. You will practice undertaking a Random Search with Scikit Learn as well as visualizing & interpreting the output.\n  ",
           "parts":[
              "Introducing Random Search",
              "Randomly Sample Hyperparameters",
              "Randomly Search with Random Forest",
              "Visualizing a Random Search",
              "Random Search in Scikit Learn",
              "RandomSearchCV inputs",
              "The RandomizedSearchCV Object",
              "RandomSearchCV in Scikit Learn",
              "Comparing Grid and Random Search",
              "Comparing Random & Grid Search",
              "Grid and Random Search Side by Side"
           ]
        },
        {
           "title":"\n          Informed Search\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter you will be given a taste of more advanced hyperparameter tuning methodologies known as ''informed search''. This includes a methodology known as Coarse To Fine as well as Bayesian & Genetic hyperparameter tuning algorithms. You will learn how informed search differs from uninformed search and gain practical skills with each of the mentioned methodologies, comparing and contrasting them as you go.\n  ",
           "parts":[
              "Informed Search: Coarse to Fine",
              "Visualizing Coarse to Fine",
              "Coarse to Fine Iterations",
              "Informed Search: Bayesian Statistics",
              "Bayes Rule in Python",
              "Bayesian Hyperparameter tuning with Hyperopt",
              "Informed Search: Genetic Algorithms",
              "Genetic Hyperparameter Tuning with TPOT",
              "Analysing TPOT's stability",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python",
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Introduction to Data Visualization with Seaborn",
     "description":"Learn how to create informative and attractive visualizations in Python using the Seaborn library.",
     "detailDescription":"Seaborn is a powerful Python library that makes it easy to create informative and attractive visualizations. This course provides an introduction to Seaborn and teaches you how to visualize your data using plots such as scatter plots, box plots, and bar plots. You’ll do this while exploring survey responses about student hobbies and the factors that are associated with academic success. You’ll also learn about some of Seaborn’s advantages as a statistical visualization tool, such as how it automatically calculates confidence intervals. By the end of the course, you will be able to use Seaborn in a variety of situations to explore your data and effectively communicate the results of your data analyses to others.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Seaborn\n        ",
           "index":"1",
           "description":"\n    What is Seaborn, and when should you use it? In this chapter, you will find out! Plus, you will learn how to create scatter plots and count plots with both lists of data and pandas DataFrames. You will also be introduced to one of the big advantages of using Seaborn - the ability to easily add a third variable to your plots by using color to represent different subgroups.\n  ",
           "parts":[
              "Introduction to Seaborn",
              "Making a scatter plot with lists",
              "Making a count plot with a list",
              "Using pandas with Seaborn",
              "\"Tidy\" vs. \"untidy\" data",
              "Making a count plot with a DataFrame",
              "Adding a third variable with hue",
              "Hue and scatter plots",
              "Hue and count plots"
           ]
        },
        {
           "title":"\n          Visualizing Two Quantitative Variables\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will create and customize plots that visualize the relationship between two quantitative variables. To do this, you will use scatter plots and line plots to explore how the level of air pollution in a city changes over the course of a day and how horsepower relates to fuel efficiency in cars. You will also see another big advantage of using Seaborn - the ability to easily create subplots in a single figure!\n  ",
           "parts":[
              "Introduction to relational plots and subplots",
              "Creating subplots with col and row",
              "Creating two-factor subplots",
              "Customizing scatter plots",
              "Changing the size of scatter plot points",
              "Changing the style of scatter plot points",
              "Introduction to line plots",
              "Interpreting line plots",
              "Visualizing standard deviation with line plots",
              "Plotting subgroups in line plots"
           ]
        },
        {
           "title":"\n          Visualizing a Categorical and a Quantitative Variable\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Categorical variables are present in nearly every dataset, but they are especially prominent in survey data. In this chapter, you will learn how to create and customize categorical plots such as box plots, bar plots, count plots, and point plots. Along the way, you will explore survey data from young people about their interests, students about their study habits, and adult men about their feelings about masculinity.\n  ",
           "parts":[
              "Count plots and bar plots",
              "Count plots",
              "Bar plots with percentages",
              "Customizing bar plots",
              "Box plots",
              "Create and interpret a box plot",
              "Omitting outliers",
              "Adjusting the whiskers",
              "Point plots",
              "Customizing point plots",
              "Point plots with subgroups"
           ]
        },
        {
           "title":"\n          Customizing Seaborn Plots\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you will learn how to add informative plot titles and axis labels, which are one of the most important parts of any data visualization! You will also learn how to customize the style of your visualizations in order to more quickly orient your audience to the key takeaways. Then, you will put everything you have learned together for the final exercises of the course!\n  ",
           "parts":[
              "Changing plot style and color",
              "Changing style and palette",
              "Changing the scale",
              "Using a custom palette",
              "Adding titles and labels: Part 1",
              "FacetGrids vs. AxesSubplots",
              "Adding a title to a FacetGrid object",
              "Adding titles and labels: Part 2",
              "Adding a title and axis labels",
              "Rotating x-tick labels",
              "Putting it all together",
              "Box plot with subgroups",
              "Bar plot with subgroups and subplots",
              "Well done! What's next?"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Data Science in Python"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Analyst with Python",
        "Data Scientist with Python",
        "Data Visualization with Python"
     ]
  },
  {
     "title":"Ensemble Methods in Python",
     "description":"Learn how to build advanced and effective machine learning models in Python using ensemble techniques such as bagging, boosting, and stacking.",
     "detailDescription":"Continue your machine learning journey by diving into the wonderful world of ensemble learning methods! These are an exciting class of machine learning techniques that combine multiple individual algorithms to boost performance and solve complex problems at scale across different industries. Ensemble techniques regularly win online machine learning competitions as well! In this course, you’ll learn all about these advanced ensemble techniques, such as bagging, boosting, and stacking. You’ll apply them to real-world datasets using cutting edge Python machine learning libraries such as scikit-learn, XGBoost, CatBoost, and mlxtend.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Combining Multiple Models\n        ",
           "index":"1",
           "description":"\n    Do you struggle to determine which of the models you built is the best for your problem? You should give up on that, and use them all instead! In this chapter, you'll learn how to combine multiple models into one using \"Voting\" and \"Averaging\". You'll use these to predict the ratings of apps on the Google Play Store, whether or not a Pokémon is legendary, and which characters are going to die in Game of Thrones!\n  ",
           "parts":[
              "Introduction to ensemble methods",
              "Exploring Google apps data",
              "Predicting the rating of an app",
              "Voting",
              "Choosing the best model",
              "Assembling your first ensemble",
              "Evaluating your ensemble",
              "Averaging",
              "Journey to Westeros",
              "Predicting GoT deaths",
              "Soft vs. hard voting"
           ]
        },
        {
           "title":"\n          Bagging\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Bagging is the ensemble method behind powerful machine learning algorithms such as random forests. In this chapter you'll learn the theory behind this technique and build your own bagging models using scikit-learn.\n  ",
           "parts":[
              "The strength of “weak” models",
              "Restricted and unrestricted decision trees",
              "\"Weak\" decision tree",
              "Bootstrap aggregating",
              "Training with bootstrapping",
              "A first attempt at bagging",
              "BaggingClassifier: nuts and bolts",
              "Bagging: the scikit-learn way",
              "Checking the out-of-bag score",
              "Bagging parameters: tips and tricks",
              "Exploring the UCI SECOM data",
              "A more complex bagging model",
              "Tuning bagging hyperparameters"
           ]
        },
        {
           "title":"\n          Boosting\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Boosting is class of ensemble learning algorithms that includes award-winning models such as AdaBoost. In this chapter, you'll learn about this award-winning model, and use it to predict the revenue of award-winning movies! You'll also learn about gradient boosting algorithms such as CatBoost and XGBoost.\n  ",
           "parts":[
              "The effectiveness of gradual learning",
              "Introducing the movie database",
              "Exploring movie features",
              "Predicting movie revenue",
              "Boosting for predicted revenue",
              "Adaptive boosting: award winning model",
              "Your first AdaBoost model",
              "Tree-based AdaBoost regression",
              "Making the most of AdaBoost",
              "Gradient boosting",
              "Revisiting Google app reviews",
              "Sentiment analysis with GBM",
              "Gradient boosting flavors",
              "Movie revenue prediction with CatBoost",
              "Boosting contest: Light vs Extreme"
           ]
        },
        {
           "title":"\n          Stacking\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Get ready to see how things stack up! In this final chapter you'll learn about the stacking ensemble method. You'll learn how to implement it from scratch as well as using the mlxtend library! You'll apply stacking to predict the edibility of North American mushrooms, and revisit the ratings of Google apps with this more advanced approach.\n  ",
           "parts":[
              "The intuition behind stacking",
              "Exploring the mushroom dataset",
              "Predicting mushroom edibility",
              "K-nearest neighbors for mushrooms",
              "Build your first stacked ensemble",
              "Applying stacking to predict app ratings",
              "Building the second-layer classifier",
              "Stacked predictions for app ratings",
              "Let’s mlxtend it!",
              "A first attempt with mlxtend",
              "Back to regression with stacking",
              "Mushrooms: a matter of life or death",
              "Ensembling it all together"
           ]
        }
     ],
     "prerequistes":[
        "Linear Classifiers in Python",
        "Machine Learning with Tree-Based Models in Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Designing Machine Learning Workflows in Python",
     "description":"Learn to build pipelines that stand the test of time.",
     "detailDescription":"Deploying machine learning models in production seems easy with modern tools, but often ends in disappointment as the model performs worse in production than in development. This course will give you four superpowers that will make you stand out from the data science crowd and build pipelines that stand the test of time: how to exhaustively tune every aspect of your model in development; how to make the best possible use of available domain expertise; how to monitor your model in performance and deal with any performance deterioration; and finally how to deal with poorly or scarcely labelled data. Digging deep into the cutting edge of sklearn, and dealing with real-life datasets from hot areas like personalized healthcare and cybersecurity, this course reveals a view of machine learning from the frontline.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The Standard Workflow\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will be reminded of the basics of a supervised learning workflow, complete with model fitting, tuning and selection, feature engineering and selection, and data splitting techniques. You will understand how these steps in a workflow depend on each other, and recognize how they can all contribute to, or fight against overfitting: the data scientist's worst enemy. By the end of the chapter, you will already be fluent in supervised learning, and ready to take the dive towards more advanced material in later chapters.\n  ",
           "parts":[
              "Supervised learning pipelines",
              "Feature engineering",
              "Your first pipeline",
              "Model complexity and overfitting",
              "Grid search CV for model complexity",
              "Number of trees and estimators",
              "Feature engineering and overfitting",
              "Categorical encodings",
              "Feature transformations",
              "Bringing it all together"
           ]
        },
        {
           "title":"\n          The Human in the Loop\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapter, you perfected your knowledge of the standard supervised learning workflows. In this chapter, you will critically examine the ways in which expert knowledge is incorporated in supervised learning. This is done through the identification of the appropriate unit of analysis which might require feature engineering across multiple data sources, through the sometimes imperfect process of labeling examples, and through the specification of a loss function that captures the true business value of errors made by your machine learning model.\n  ",
           "parts":[
              "Data fusion",
              "Is the source or the destination bad?",
              "Feature engineering on grouped data",
              "Imperfect labels",
              "Turning a heuristic into a classifier",
              "Combining heuristics",
              "Dealing with label noise",
              "Loss functions Part I",
              "Reminder of performance metrics",
              "Real-world cost analysis",
              "Confusion matrix calculations",
              "Loss functions Part II",
              "Default thresholding",
              "Optimizing the threshold",
              "Bringing it all together"
           ]
        },
        {
           "title":"\n          Model Lifecycle Management\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapter, you employed different ways of incorporating feedback from experts in your workflow, and evaluating it in ways that are aligned with business value. Now it is time for you to practice the skills needed to productize your model and ensure it continues to perform well thereafter by iteratively improving it. You will also learn to diagnose dataset shift and mitigate the effect that a changing environment can have on your model's accuracy. \n  ",
           "parts":[
              "From workflows to pipelines",
              "Your first pipeline - again!",
              "Custom scorers in pipelines",
              "Model deployment",
              "Pickles",
              "Custom function transformers in pipelines",
              "Iterating without overfitting",
              "Challenge the champion",
              "Cross-validation statistics",
              "Dataset shift",
              "Tuning the window size",
              "Bringing it all together"
           ]
        },
        {
           "title":"\n          Unsupervised Workflows\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapters you established a solid foundation in supervised learning, complete with knowledge of deploying models in production but always assumed you a labeled dataset would be available for your analysis. In this chapter, you take on the challenge of modeling data without any, or with very few, labels. This takes you into a journey into anomaly detection, a kind of unsupervised modeling, as well as distance-based learning, where beliefs about what constitutes similarity between two examples can be used in place of labels to help you achieve levels of accuracy comparable to a supervised workflow. Upon completing this chapter, you will clearly stand out from the crowd of data scientists in confidently knowing what tools to use to modify your workflow in order to overcome common real-world challenges. \n  ",
           "parts":[
              "Anomaly detection",
              "A simple outlier",
              "LoF contamination",
              "Novelty detection",
              "A simple novelty",
              "Three novelty detectors",
              "Contamination revisited",
              "Distance-based learning",
              "Find the neighbor",
              "Not all metrics agree",
              "Unstructured data",
              "Restricted Levenshtein",
              "Bringing it all together",
              "Concluding remarks"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)",
        "Supervised Learning with scikit-learn",
        "Unsupervised Learning in Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Practicing Statistics Interview Questions in Python",
     "description":"Prepare for your next statistics interview by reviewing concepts like conditional probabilities, A/B testing, the bias-variance tradeoff, and more.",
     "detailDescription":"Are you looking to land that next job or hone your statistics interview skills to stay sharp? Get ready to master classic interview concepts ranging from conditional probabilities to A/B testing to the bias-variance tradeoff, and much more! You’ll work with a diverse collection of datasets including web-based experiment results and Australian weather data. Following the course, you’ll be able to confidently walk into your next interview and tackle any statistics questions with the help of Python!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Probability and Sampling Distributions\n        ",
           "index":"1",
           "description":"\n    This chapter kicks the course off by reviewing conditional probabilities, Bayes' theorem, and central limit theorem. Along the way, you will learn how to handle questions that work with commonly referenced probability distributions.\n  ",
           "parts":[
              "Conditional probabilities",
              "Setting up problems",
              "Bayes' theorem applied",
              "Central limit theorem",
              "Samples from a rolled die",
              "Simulating central limit theorem",
              "Probability distributions",
              "Bernoulli distribution",
              "Binomial distribution",
              "Normal distribution"
           ]
        },
        {
           "title":"\n          Exploratory Data Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will prepare for statistical concepts related to exploratory data analysis. The topics include descriptive statistics, dealing with categorical variables, and relationships between variables.  The exercises will prepare you for an analytical assessment or stats-based coding question.\n  ",
           "parts":[
              "Descriptive statistics",
              "Mean or median",
              "Standard deviation by hand",
              "Categorical data",
              "Encoding techniques",
              "Exploring laptop prices",
              "Two or more variables",
              "Types of relationships",
              "Pearson correlation",
              "Sensitivity to outliers"
           ]
        },
        {
           "title":"\n          Statistical Experiments and Significance Testing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Prepare to dive deeper into crucial concepts regarding experiments and testing by reviewing confidence intervals, hypothesis testing, multiple tests, and the role that power and sample size play. We'll also discuss types of errors, and what they mean in practice.\n  ",
           "parts":[
              "Confidence intervals",
              "Confidence interval by hand",
              "Applying confidence intervals",
              "Hypothesis testing",
              "One tailed z-test",
              "Two tailed t-test",
              "Power and sample size",
              "Effect on type II error",
              "Calculating sample size",
              "Visualizing the relationship",
              "Multiple testing",
              "Calculating error rates",
              "Bonferroni correction"
           ]
        },
        {
           "title":"\n          Regression and Classification\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Wrapping up, we'll address concepts related closely to regression and classification models. The chapter begins by reviewing fundamental machine learning algorithms and quickly ramps up to model evaluation, dealing with special cases, and the bias-variance tradeoff. \n  ",
           "parts":[
              "Regression models",
              "Linear regression",
              "Logistic regression",
              "Evaluating models",
              "Regression evaluation",
              "Classification evaluation",
              "Missing data and outliers",
              "Handling null values",
              "Identifying outliers",
              "Bias-variance tradeoff",
              "Test and training error",
              "Visualizing the tradeoff",
              "Wrapping up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python",
        "Statistical Thinking in Python (Part 1)"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Deep Learning with Keras",
     "description":"Learn to start developing deep learning models with Keras.",
     "detailDescription":"Deep learning is here to stay! It's the go-to technique to solve complex problems that arise with unstructured data and an incredible tool for innovation. Keras is one of the frameworks that make it easier to start developing deep learning models, and it's versatile enough to build industry-ready models in no time. In this course, you will learn regression and save the earth by predicting asteroid trajectories, apply binary classification to distinguish between real and fake dollar bills, use multiclass classification to decide who threw which dart at a dart board, learn to use neural networks to reconstruct noisy images and much more. Additionally, you will learn how to better control your models during training and how to tune them to boost their performance.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introducing Keras\n        ",
           "index":"1",
           "description":"\n    In this first chapter, you will get introduced to neural networks, understand what kind of problems they can solve, and when to use them. You will also build several networks and save the earth by training a regression model that approximates the orbit of a meteor that is approaching us!\n  ",
           "parts":[
              "What is Keras?",
              "Describing Keras",
              "Would you use deep learning?",
              "Your first neural network",
              "Hello nets!",
              "Counting parameters",
              "Build as shown!",
              "Surviving a meteor strike",
              "Specifying a model",
              "Training",
              "Predicting the orbit!"
           ]
        },
        {
           "title":"\n          Going Deeper\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    By the end of this chapter, you will know how to solve binary, multi-class, and multi-label problems with neural networks. All of this by solving problems like detecting fake dollar bills, deciding who threw which dart at a board, and building an intelligent system to water your farm. You will also be able to plot model training metrics and to stop training and save your models when they no longer improve.\n  ",
           "parts":[
              "Binary classification",
              "Exploring dollar bills",
              "A binary classification model",
              "Is this dollar bill fake ?",
              "Multi-class classification",
              "A multi-class model",
              "Prepare your dataset",
              "Training on dart throwers",
              "Softmax predictions",
              "Multi-label classification",
              "An irrigation machine",
              "Training with multiple labels",
              "Keras callbacks",
              "The history callback",
              "Early stopping your model",
              "A combination of callbacks"
           ]
        },
        {
           "title":"\n          Improving Your Model Performance\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the previous chapters, you've trained a lot of models! You will now learn how to interpret learning curves to understand your models as they train. You will also visualize the effects of activation functions, batch-sizes, and batch-normalization. Finally, you will learn how to perform automatic hyperparameter optimization to your Keras models using sklearn.\n  ",
           "parts":[
              "Learning curves",
              "Learning the digits",
              "Is the model overfitting?",
              "Do we need more data?",
              "Activation functions",
              "Different activation functions",
              "Comparing activation functions",
              "Comparing activation functions II",
              "Batch size and batch normalization",
              "Changing batch sizes",
              "Batch normalizing  a familiar model",
              "Batch normalization effects",
              "Hyperparameter tuning",
              "Preparing a model for tuning",
              "Tuning the model parameters",
              "Training with cross-validation"
           ]
        },
        {
           "title":"\n          Advanced Model Architectures\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It's time to get introduced to more advanced architectures! You will create an autoencoder to reconstruct noisy images, visualize convolutional neural network activations, use deep pre-trained models to classify images and learn more about recurrent neural networks and working with text as you build a network that predicts the next word in a sentence.\n  ",
           "parts":[
              "Tensors, layers, and autoencoders",
              "It's a flow of tensors",
              "Neural separation",
              "Building an autoencoder",
              "De-noising like an autoencoder",
              "Intro to CNNs",
              "Building a CNN model",
              "Looking at convolutions",
              "Preparing your input image",
              "Using a real world model",
              "Intro to LSTMs",
              "Text prediction with LSTMs",
              "Build your LSTM model",
              "Decode your predictions",
              "Test your model!",
              "You're done!"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Deep Learning in Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Fraud Detection in Python",
     "description":"Learn how to detect fraud using Python.",
     "detailDescription":"A typical organization loses an estimated 5% of its yearly revenue to fraud. In this course, you will learn how to fight fraud by using data. For example, you'll learn how to apply supervised learning algorithms to detect fraudulent behavior similar to past ones, as well as unsupervised learning methods to discover new types of fraud activities. Moreover, in fraud analytics you often deal with highly imbalanced datasets when classifying fraud versus non-fraud, and during this course you will pick up some techniques on how to deal with that. The course provides a mix of technical and theoretical insights and shows you hands-on how to practically implement fraud detection models. In addition, you will get tips and advice from real-life experience to help you prevent making common mistakes in fraud analytics.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction and preparing your data\n        ",
           "index":"1",
           "description":"\n    In this chapter, you''ll learn about the typical challenges associated with fraud detection, and will learn how to resample your data in a smart way, to tackle problems with imbalanced data.\n  ",
           "parts":[
              "Introduction to fraud detection",
              "Checking the fraud to non-fraud ratio",
              "Plotting your data",
              "Increasing successful detections using data resampling",
              "Resampling methods for imbalanced data",
              "Applying SMOTE",
              "Compare SMOTE to original data",
              "Fraud detection algorithms in action",
              "Exploring the traditional way to catch fraud",
              "Using ML classification to catch fraud",
              "Logistic regression combined with SMOTE",
              "Using a pipeline"
           ]
        },
        {
           "title":"\n          Fraud detection using labelled data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you're familiar with the main challenges of fraud detection, you're about to learn how to flag fraudulent transactions with supervised learning. You will use classifiers, adjust them and compare them to find the most efficient fraud detection model.\n  ",
           "parts":[
              "Review of classification methods",
              "Natural hit rate",
              "Random Forest Classifier - part 1",
              "Random Forest Classifier - part 2",
              "Performance evaluation",
              "Performance metrics for the RF model",
              "Plotting the Precision Recall Curve",
              "Adjusting your algorithm weights",
              "Model adjustments",
              "Adjusting your Random Forest to fraud detection",
              "GridSearchCV to find optimal parameters",
              "Model results using GridSearchCV",
              "Ensemble methods",
              "Logistic Regression",
              "Voting Classifier",
              "Adjust weights within the Voting Classifier"
           ]
        },
        {
           "title":"\n          Fraud detection using unlabelled data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter focuses on using unsupervised learning techniques to detect fraud. You will segment customers, use K-means clustering  and other clustering algorithms to find suspicious occurrences in your data.\n  ",
           "parts":[
              "Normal versus abnormal behavior",
              "Exploring your data",
              "Customer segmentation",
              "Using statistics to define normal behavior",
              "Clustering methods to detect fraud",
              "Scaling the data",
              "K-means clustering",
              "Elbow method",
              "Assigning fraud versus non-fraud",
              "Detecting outliers",
              "Checking model results",
              "Other clustering fraud detection methods",
              "DB scan",
              "Assessing smallest clusters",
              "Checking results"
           ]
        },
        {
           "title":"\n          Fraud detection using text\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you will use text data, text mining and topic modeling to detect fraudulent behavior.\n  ",
           "parts":[
              "Using text data",
              "Word search with dataframes",
              "Using list of terms",
              "Creating a flag",
              "Text mining to detect fraud",
              "Removing stopwords",
              "Cleaning text data",
              "Topic modeling on fraud",
              "Create dictionary and corpus",
              "LDA model",
              "Flagging fraud based on topics",
              "Interpreting the topic model",
              "Finding fraudsters based on topic",
              "Lesson 5: Recap"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn",
        "Unsupervised Learning in Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Working with the Class System in Python",
     "description":"Learn the fundamentals of object-oriented programming: classes, objects, methods, inheritance, polymorphism, and others!",
     "detailDescription":"Object-oriented programming (OOP) is a powerful programming paradigm that reduces the complexity of systems as is employs heavy re-usability of code. OOP leverages the concept of objects and classes. Objects may contain data (known as attributes, stored as instance or class variables) as well as procedures (defined as methods). Objects are generated from blueprints known as classes, which specify the attributes and methods to be generated at the time of object instantiation. This course introduces the internals of classes and the utilization of objects, as well as important object-oriented programming fundamentals such as inheritance, polymorphism, and composition.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Getting ready for object-oriented programming\n        ",
           "index":"1",
           "description":"\n    In this chapter we quickly review functions and data structures, as they are building blocks of object-oriented programming. Then we transition into the conceptual definition of objects and classes.\n  ",
           "parts":[
              "Intro to Object Oriented Programming in Python",
              "Understanding Object Dependencies",
              "Creating functions",
              "Creating a complex data type",
              "Introduction to NumPy Internals",
              "What are NumPy Arrays most similar to?",
              "Create a function that returns a NumPy array",
              "Introduction to Objects",
              "Creating a class",
              "Difference between a class and an object"
           ]
        },
        {
           "title":"\n          Deep dive into classes and objects\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Here, we dive deep into the internals of classes, instantiation of objects, the initialization method, instance variables, class variables, overriding class variables, and methods.\n  ",
           "parts":[
              "Intro to Classes",
              "Understanding what we're building",
              "Object: Instance of a Class",
              "Initializing a Class and Self",
              "The Init Method",
              "Instance Variables",
              "Multiple Instance Variables",
              "More on Self and Passing in Variables",
              "Class Variables",
              "Overriding Class Variables",
              "Methods in Classes",
              "Methods I",
              "Methods II",
              "Methods III"
           ]
        },
        {
           "title":"\n          Fancy classes, fancy objects\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We create fancier classes with sophisticated methods such as importing datasets, getting descriptive statistics, and renaming columns. Also, we cover best practices for creating and documenting classes according to PEP-8.\n  ",
           "parts":[
              "Working with a DataSet to Create DataFrames",
              "Return Statement I",
              "Return Statement II: The Return of the DataShell",
              "Return Statement III: A More Powerful DataShell",
              "Renaming Columns and the Five-Figure Summary",
              "Data as Attributes",
              "Renaming Columns",
              "Self-Describing DataShells",
              "OOP Best Practices",
              "Naming classes",
              "Got Characters?",
              "Which class has appropriate docstrings?"
           ]
        },
        {
           "title":"\n          Inheritance, polymorphism and composition\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter we cover inheritance, which is when we create a class that employs (or 'inherits') all class variables and methods from a 'parent' class. We also cover polymorphism, which is when multiple classes inherit from a single class. Finally, we cover composition, which is when classes employ specific class functionality from other classes without necessarily inheriting from them.\n  ",
           "parts":[
              "Inheritance",
              "Why Inheritance?",
              "Is-A or Has-A",
              "Animal Inheritance",
              "Vertebrate Inheritance",
              "Inheritance with DataShells",
              "Abstract Class DataShell I",
              "Abstract Class DataShell II",
              "Composition",
              "Composition and Inheritance I",
              "Composition and Inheritance II",
              "Wrapping Up OOP"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 1)"
     ],
     "tracks":[
        "Coding Best Practices with Python"
     ]
  },
  {
     "title":"Analyzing Social Media Data in Python",
     "description":"In this course, you'll learn how to collect Twitter data and analyze Twitter text, networks, and geographical origin.",
     "detailDescription":"Twitter produces hundreds of million messages per day, with people around the world discussing sports, politics, business, and entertainment. You can access thousands of messages flowing in this stream in a matter of minutes. In this course, you will learn how to collect Twitter data and analyze tweet text, Twitter networks, and the geographical origin of the tweet. We'll be doing this with datasets on tech companies, data science hashtags, and the 2018 State of the Union address. Using these methods, you will be able to inform business and political decision-making by discovering the prevalence of important topics, the diversity of discussion networks, and a topic's geographical reach.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basics of Analyzing Twitter Data\n        ",
           "index":"1",
           "description":"\n    Why analyze Twitter, how to access Twitter APIs, and understanding Twitter JSON.\n  ",
           "parts":[
              "Analyzing Twitter data",
              "Why Analyze Twitter Data?",
              "Uses of Twitter analysis",
              "Collecting data through the Twitter API",
              "Twitter APIs",
              "Setting up tweepy authentication",
              "Collecting data on keywords",
              "Understanding Twitter JSON",
              "Loading and accessing tweets",
              "Accessing user data",
              "Accessing retweet data"
           ]
        },
        {
           "title":"\n          Processing Twitter text\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    How to process Twitter text.\n  ",
           "parts":[
              "Processing Twitter Text",
              "Tweet Items and Tweet Flattening",
              "A tweet flattening function",
              "Loading tweets into a DataFrame",
              "Counting words",
              "Finding keywords",
              "Looking for text in all the wrong places",
              "Comparing #python to #rstats",
              "Time Series",
              "Creating time series data frame",
              "Generating mean frequency",
              "Plotting mean frequency",
              "Sentiment Analysis",
              "Loading VADER",
              "Calculating sentiment scores",
              "Plotting sentiment scores"
           ]
        },
        {
           "title":"\n          Twitter Networks\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Network analysis with Twitter data.\n  ",
           "parts":[
              "Twitter Networks",
              "Types of Twitter networks",
              "Which direction is the arrow?",
              "Importing and visualizing Twitter networks",
              "Creating retweet network",
              "Creating reply network",
              "Visualizing retweet network",
              "Individual-level network metrics",
              "In-degree centrality",
              "Betweenness Centrality",
              "Ratios"
           ]
        },
        {
           "title":"\n          Putting Twitter data on the map\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    How to map Twitter data.\n  ",
           "parts":[
              "Maps and Twitter Data",
              "Motivations",
              "Comparisons",
              "Geographical Data in Twitter JSON",
              "Coordinates and bounding boxes",
              "Accessing user-defined location",
              "Accessing bounding box",
              "Calculating the centroid",
              "Creating Twitter maps",
              "Creating Basemap map",
              "Plotting centroid coordinates",
              "Coloring by sentiment",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Cleaning Data with PySpark",
     "description":"Learn how to clean data with Apache Spark in Python.",
     "detailDescription":"Working with data is tricky - working with millions or even billions of rows is worse. Did you receive some data processing code written on a laptop with fairly pristine data? Chances are you’ve probably been put in charge of moving a basic data process from prototype to production. You may have worked with real world datasets, with missing fields, bizarre formatting, and orders of magnitude more data. Even if this is all new to you, this course helps you learn what’s needed to prepare data processes using Python with Apache Spark. You’ll learn terminology, methods, and some best practices to create a performant, maintainable, and understandable data processing platform.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          DataFrame details\n        ",
           "index":"1",
           "description":"\n    A review of DataFrame fundamentals and the importance of data cleaning.\n  ",
           "parts":[
              "Intro to data cleaning with Apache Spark",
              "Data cleaning review",
              "Defining a schema",
              "Immutability and lazy processing",
              "Immutability review",
              "Using lazy processing",
              "Understanding Parquet",
              "Saving a DataFrame in Parquet format",
              "SQL and Parquet"
           ]
        },
        {
           "title":"\n          Manipulating DataFrames in the real world\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    A look at various techniques to modify the contents of DataFrames in Spark.\n  ",
           "parts":[
              "DataFrame column operations",
              "Filtering column content with Python",
              "Filtering Question #1",
              "Filtering Question #2",
              "Modifying DataFrame columns",
              "Conditional DataFrame column operations",
              "when() example",
              "When / Otherwise",
              "User defined functions",
              "Understanding user defined functions",
              "Using user defined functions in Spark",
              "Partitioning and lazy processing",
              "Adding an ID Field",
              "IDs with different partitions",
              "More ID tricks"
           ]
        },
        {
           "title":"\n          Improving Performance\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Improve data cleaning tasks by increasing performance or reducing resource requirements.\n  ",
           "parts":[
              "Caching",
              "Caching a DataFrame",
              "Removing a DataFrame from cache",
              "Improve import performance",
              "File size optimization",
              "File import performance",
              "Cluster configurations",
              "Reading Spark configurations",
              "Writing Spark configurations",
              "Performance improvements",
              "Normal joins",
              "Using broadcasting on Spark joins",
              "Comparing broadcast vs normal joins"
           ]
        },
        {
           "title":"\n          Complex processing and data pipelines\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to process complex real-world data using Spark and the basics of pipelines.\n  ",
           "parts":[
              "Introduction to data pipelines",
              "Quick pipeline",
              "Pipeline data issue",
              "Data handling techniques",
              "Removing commented lines",
              "Removing invalid rows",
              "Splitting into columns",
              "Further parsing",
              "Data validation",
              "Validate rows via join",
              "Examining invalid rows",
              "Final analysis and delivery",
              "Dog parsing",
              "Per image count",
              "Percentage dog pixels",
              "Congratulations and next steps"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python",
        "Introduction to PySpark"
     ],
     "tracks":[
        "Big Data with PySpark"
     ]
  },
  {
     "title":"Streamlined Data Ingestion with pandas",
     "description":"Learn to acquire data from common file formats and systems such as CSV files, spreadsheets, JSON, SQL databases, and APIs.",
     "detailDescription":"Before you can analyze data, you first have to acquire it. This course teaches you how to build pipelines to import data kept in common storage formats. You’ll use pandas, a major Python library for analytics, to get data from a variety of sources, from spreadsheets of survey responses, to a database of public service requests, to an API for a popular review site. Along the way, you’ll learn how to fine-tune imports to get only what you need and to address issues like incorrect data types. Finally, you’ll assemble a custom dataset from a mix of sources.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Importing Data from Flat Files\n        ",
           "index":"1",
           "description":"\n    Practice using pandas to get just the data you want from flat files, learn how to wrangle data types and handle errors, and look into some U.S. tax data along the way.\n  ",
           "parts":[
              "Introduction to flat files",
              "Get data from CSVs",
              "Get data from other flat files",
              "Modifying flat file imports",
              "Import a subset of columns",
              "Import a file in chunks",
              "Handling errors and missing data",
              "Specify data types",
              "Set custom NA values",
              "Skip bad data"
           ]
        },
        {
           "title":"\n          Importing Data From Excel Files\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Automate data imports from that staple of office life, Excel files. Import part or all of a workbook and ensure boolean and datetime data are properly loaded, all while learning about how other people are learning to code.\n  ",
           "parts":[
              "Introduction to spreadsheets",
              "Get data from a spreadsheet",
              "Load a portion of a spreadsheet",
              "Getting data from multiple worksheets",
              "Select a single sheet",
              "Select multiple sheets",
              "Work with multiple spreadsheets",
              "Modifying imports: true/false data",
              "Set Boolean columns",
              "Set custom true/false values",
              "Modifying imports: parsing dates",
              "Parse simple dates",
              "Get datetimes from multiple columns",
              "Parse non-standard date formats"
           ]
        },
        {
           "title":"\n          Importing Data from Databases\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Combine pandas with the powers of SQL to find out just how many problems New Yorkers have with their housing. This chapter features introductory SQL topics like WHERE clauses, aggregate functions, and basic joins.\n  ",
           "parts":[
              "Introduction to databases",
              "Connect to a database",
              "Load entire tables",
              "Refining imports with SQL queries",
              "Selecting columns with SQL",
              "Selecting rows",
              "Filtering on multiple conditions",
              "More complex SQL queries",
              "Getting distinct values",
              "Counting in groups",
              "Working with aggregate functions",
              "Loading multiple tables with joins",
              "Joining tables",
              "Joining and filtering",
              "Joining, filtering, and aggregating"
           ]
        },
        {
           "title":"\n          Importing JSON Data and Working with APIs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to work with JSON data and web APIs by exploring a public dataset and getting cafe recommendations from Yelp. End by learning some techniques to combine datasets once they have been loaded into data frames.\n  ",
           "parts":[
              "Introduction to JSON",
              "Load JSON data",
              "Work with JSON orientations",
              "Introduction to APIs",
              "Get data from an API",
              "Set API parameters",
              "Set request headers",
              "Working with nested JSONs",
              "Flatten nested JSONs",
              "Handle deeply nested data",
              "Combining multiple datasets",
              "Append data frames",
              "Merge data frames",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python",
        "Introduction to SQL"
     ],
     "tracks":[
        "Data Analyst with Python",
        "Data Engineer with Python",
        "Importing & Cleaning Data with Python"
     ]
  },
  {
     "title":"Feature Engineering for NLP in Python",
     "description":"Learn techniques to extract useful information from text and process them into a format suitable for machine learning.",
     "detailDescription":"In this course, you will learn techniques that will allow you to extract useful information from text and process them into a format suitable for applying ML models. More specifically, you will learn about POS tagging, named entity recognition, readability scores, the n-gram and tf-idf models, and how to implement them using scikit-learn and spaCy. You will also learn to compute how similar two documents are to each other. In the process, you will predict the sentiment of movie reviews and build movie and Ted Talk recommenders. Following the course, you will be able to engineer critical features out of any text and solve some of the most challenging problems in data science!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basic features and readability scores\n        ",
           "index":"1",
           "description":"\n    Learn to compute basic features such as number of words, number of characters, average word length and number of special characters (such as Twitter hashtags and mentions).  You will also learn to compute readability scores and determine the amount of education required to comprehend a piece of text.\n  ",
           "parts":[
              "Introduction to NLP feature engineering",
              "Data format for ML algorithms",
              "One-hot encoding",
              "Basic feature extraction",
              "Character count of Russian tweets",
              "Word count of TED talks",
              "Hashtags and mentions in Russian tweets",
              "Readability tests",
              "Readability of 'The Myth of Sisyphus'",
              "Readability of various publications"
           ]
        },
        {
           "title":"\n          Text preprocessing, POS tagging and NER\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about tokenization and lemmatization. You will then learn how to perform text cleaning, part-of-speech tagging, and named entity recognition using the spaCy library. Upon mastering these concepts, you will proceed to make the Gettysburg address machine-friendly, analyze noun usage in fake news, and identify people mentioned in a TechCrunch article.\n  ",
           "parts":[
              "Tokenization and Lemmatization",
              "Identifying lemmas",
              "Tokenizing the Gettysburg Address",
              "Lemmatizing the Gettysburg address",
              "Text cleaning",
              "Cleaning a blog post",
              "Cleaning TED talks in a dataframe",
              "Part-of-speech tagging",
              "POS tagging in Lord of the Flies",
              "Counting nouns in a piece of text",
              "Noun usage in fake news",
              "Named entity recognition",
              "Named entities in a sentence",
              "Identifying people mentioned in a news article"
           ]
        },
        {
           "title":"\n          N-Gram models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn about n-gram modeling and use it to perform sentiment analysis on movie reviews.\n  ",
           "parts":[
              "Building a bag of words model",
              "Word vectors with a given vocabulary",
              "BoW model for movie taglines",
              "Analyzing dimensionality and preprocessing",
              "Mapping feature indices with feature names",
              "Building a BoW Naive Bayes classifier",
              "BoW vectors for movie reviews",
              "Predicting the sentiment of a movie review",
              "Building n-gram models",
              "n-gram models for movie tag lines",
              "Higher order n-grams for sentiment analysis",
              "Comparing performance of n-gram models"
           ]
        },
        {
           "title":"\n          TF-IDF and similarity scores\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to compute tf-idf weights and the cosine similarity score between two vectors. You will use these concepts to build a movie and a TED Talk recommender. Finally, you will also learn about word embeddings and using word vector representations, you will compute similarities between various Pink Floyd songs.\n  ",
           "parts":[
              "Building tf-idf document vectors",
              "tf-idf weight of commonly occurring words",
              "tf-idf vectors for TED talks",
              "Cosine similarity",
              "Range of cosine scores",
              "Computing dot product",
              "Cosine similarity matrix of a corpus",
              "Building a plot line based recommender",
              "Comparing linear_kernel and cosine_similarity",
              "Plot recommendation engine",
              "The recommender function",
              "TED talk recommender",
              "Beyond n-grams: word embeddings",
              "Generating word vectors",
              "Computing similarity of Pink Floyd songs",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "pandas Foundations",
        "Introduction to Natural Language Processing in Python",
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Scientist with Python",
        "Natural Language Processing in Python"
     ]
  },
  {
     "title":"Experimental Design in Python",
     "description":"Learn about experimental design, and how to explore your data to ask and answer meaningful questions.",
     "detailDescription":"Data is all around us and can help us to understand many things. Making a pretty graph is great, but how can we tell the difference between a few outliers on a graph and a real, reliable effect? Is a trend that we see on a graph a reliable result or just random chance playing tricks? In this course, you will learn how to interrogate datasets in a rigorous way, giving clear answers to your questions. You will learn a range of statistical tests, how to apply them, how to understand their results, and how to deal with their shortcomings. Along the way, you will explore Olympic athlete data and the differences between populations of continents.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The Basics of Statistical Hypothesis Testing\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn how to explore your data and ask meaningful questions. Then, you will discover how to answer these question by using your first statistical hypothesis tests: the t-test, the Chi-Square test, the Fisher exact test, and the Pearson correlation test.\n  ",
           "parts":[
              "Welcome to the course!",
              "Getting started with plotnine",
              "Boxplots",
              "Density plots",
              "Student's t-test",
              "Your first t-test",
              "One-sample t-test",
              "Two-sample t-test",
              "Testing proportion and correlation",
              "Chi-square test",
              "Fisher's exact test",
              "Pearson correlation"
           ]
        },
        {
           "title":"\n          Design Considerations in Experimental Design\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to examine and multiple factors at once, controlling for the effect of confounding variables and examining interactions between variables. You will learn how to use randomization and blocking to build robust tests and how to use the powerful ANOVA method. \n  ",
           "parts":[
              "Confounding variables",
              "Exploring confounding variables",
              "Finding confounding variables",
              "Blocking and randomization",
              "Random sampling",
              "Blocking",
              "Paired t-test",
              "ANOVA",
              "One-way ANOVA",
              "Two-way ANOVA",
              "Interactive effects",
              "Two-way ANOVA with interactive effects",
              "Choosing an appropriate test"
           ]
        },
        {
           "title":"\n          Sample size, Power analysis, and Effect size\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will focus on ways to avoid drawing false conclusions, whether false positives (type I errors) or false negatives (type II errors). Central to avoiding false negatives is understanding the interplay between sample size, power analysis, and effect size. \n  ",
           "parts":[
              "Type I errors",
              "Bonferroni correction",
              "Šídák correction",
              "Sample size",
              "Exploring sample size",
              "Sample size for a t-test",
              "Effect size",
              "Effect size for a t-test",
              "Computing Cohen's d",
              "Effect size for a Fisher exact test",
              "Effect sizes for Pearson correlation",
              "Power",
              "Power analysis for a t-test",
              "Interpreting power analyses"
           ]
        },
        {
           "title":"\n          Testing Normality: Parametric and Non-parametric Tests\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you will examine the assumptions underlying statistical tests and learn about how that influences your experimental design. This will include learning whether a variable follows a normal distribution and when you should use non-parametric statistical tests like the Wilcoxon rank-sum test and the Spearman correlation test. \n  ",
           "parts":[
              "Assumptions and normal distributions",
              "Exploring distributions with summary stats",
              "Q-Q plot",
              "Testing for normality",
              "Shapiro-Wilk test",
              "Choosing tests and normality",
              "Non-parametric tests: Wilcoxon rank-sum test",
              "Wilcoxon rank-sum test",
              "Wilcoxon signed-rank test",
              "Parametric vs non-parametric tests",
              "More non-parametric tests: Spearman correlation",
              "Spearman correlation",
              "Choosing the correct correlation test",
              "Summary"
           ]
        }
     ],
     "prerequistes":[
        "Foundations of Probability in Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Sentiment Analysis in Python",
     "description":"Are customers thrilled with your products or is your service lacking? Learn how to perform an end-to-end sentiment analysis task.",
     "detailDescription":"Have you left a review to express how you feel about a product or a service? And do you have a habit of checking a product’s reviews online before you buy it? This kind of information is valuable not only for you but also for companies. In this course, you will learn how to make sense of the sentiment expressed in various documents. You will use real-world datasets featuring tweets, movie and product reviews, and use Python’s nltk and scikit-learn packages. By the end of the course, you will be able to carry an end-to-end sentiment analysis task based on how US airline passengers expressed their feelings on Twitter.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Sentiment Analysis Nuts and Bolts\n        ",
           "index":"1",
           "description":"\n    Have you ever checked the reviews or ratings of a product or a service before you purchased it? Then you have very likely came face-to-face with sentiment analysis. In this chapter,  you will learn the basic structure of a sentiment analysis problem and start exploring the sentiment of movie reviews. \n  ",
           "parts":[
              "Welcome!",
              "Elements of a sentiment analysis problem",
              "How many positive and negative reviews are there?",
              "Longest and shortest reviews",
              "Sentiment analysis types and approaches",
              "Detecting the sentiment of Tale of Two Cities",
              "Comparing the sentiment of two strings",
              "What is the sentiment of a movie review?",
              "Let's build a word cloud!",
              "Your first word cloud",
              "Which words are in the word cloud?",
              "Word Cloud on movie reviews"
           ]
        },
        {
           "title":"\n          Numeric Features from Reviews\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Imagine you are in the shoes of a company offering a variety of products. You want to know which of your products are bestsellers and most of all - why. We embark on step 1 of understanding the reviews of products, using a dataset with Amazon product reviews. To that end, we transform the text into a numeric form and consider a few complexities in the process.  \n  ",
           "parts":[
              "Bag-of-words",
              "Which statement about BOW is true?",
              "Your first BOW",
              "BOW using product reviews",
              "Getting granular with n-grams",
              "Specify token sequence length with BOW",
              "Size of vocabulary of movies reviews",
              "BOW with n-grams and vocabulary size",
              "Build new features from text",
              "Tokenize a string from GoT",
              "Word tokens from the Avengers",
              "A feature for the length of a review",
              "Can you guess the language?",
              "Identify the language of a string",
              "Detect language of a list of strings",
              "Language detection of product reviews"
           ]
        },
        {
           "title":"\n          More on Numeric Vectors: Transforming Tweets\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter continues the process of understanding product reviews. We will cover additional complexities, especially when working with sentiment analysis data from social media platforms such as Twitter.  We will also learn other ways to obtain numeric features from the text.\n  ",
           "parts":[
              "Stop words",
              "Word cloud of tweets",
              "Airline sentiment with stop words",
              "Multiple text columns",
              "Capturing a token pattern",
              "Specify the token pattern",
              "String operators with the Twitter data",
              "More string operators and Twitter",
              "Stemming and lemmatization",
              "Stems and lemmas from GoT",
              "Stem Spanish reviews",
              "Stems from tweets",
              "TfIdf: More ways to transform text",
              "Your first TfIdf",
              "TfIdf on Twitter airline sentiment data",
              "Tfidf and a BOW on same data"
           ]
        },
        {
           "title":"\n          Let's Predict the Sentiment\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We employ machine learning to predict the sentiment of a review based on the words used in the review.  We use logistic regression and evaluate its performance in a few different ways. These are some solid first models! \n  ",
           "parts":[
              "Let's predict the sentiment!",
              "Logistic regression of movie reviews",
              "Logistic regression using Twitter data",
              "Did we really predict the sentiment well?",
              "Build and assess a model:  movies reviews",
              "Performance metrics of Twitter data",
              "Build and assess a model: product reviews data",
              "Logistic regression: revisted",
              "Predict probabilities of movie reviews",
              "Product reviews with regularization",
              "Regularizing models with Twitter data",
              "Bringing it all together",
              "Step 1: Word cloud and feature creation",
              "Step 2: Building a vectorizer",
              "Step 3: Building a classifier",
              "Wrap up"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)"
     ],
     "tracks":[
        "Natural Language Processing in Python"
     ]
  },
  {
     "title":"Command Line Automation in Python",
     "description":"Learn to automate many common file system tasks and be able to manage and communicate with processes.",
     "detailDescription":"There are certain skills that will stay with you your entire life. One of those skills is learning to automate things. There is a motto for automation that gets straight to the point, \"If it isn't automated...it's broken\". In this course, you learn to adopt this mindset. In one of the many examples, you will create automation code that will traverse a filesystem, find files that match a pattern, and then detect which files are duplicates. Following the course, you will be able to automate many common file system tasks and be able to manage and communicate with Unix processes.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          IPython shell commands\n        ",
           "index":"1",
           "description":"\n    Learn to use powerful IPython shell commands that will enhance your day to day coding.  These commands include  SList objects that can sort and filter shell output all from the comfort of the IPython terminal.\n  ",
           "parts":[
              "Learn the Python interpreter",
              "Execute Python commands",
              "Execute IPython shell commands",
              "Capture IPython Shell output",
              "Using Bash Magic command",
              "Using the ! operator in IPython",
              "Automate with SList",
              "Use SList fields to parse shell output",
              "Find Python files using SLIST grep",
              "Using SList to grep"
           ]
        },
        {
           "title":"\n          Shell commands with subprocess\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn to harness Unix processes with the subprocess module.   By combining the output and input of scripts, processes, and applications, you'll create pipelines to automate complex tasks.\n  ",
           "parts":[
              "Execute shell commands in subprocess",
              "Permissions Check",
              "Reading a creepy AI poem",
              "Running processes script",
              "Capture output of shell commands",
              "Using subprocess Popen",
              "Waiting for processes",
              "Detecting duplicate files with subprocess",
              "Sending input to processes",
              "Counting files in a directory tree",
              "Running a health check",
              "Passing arguments safely to shell commands",
              "Safely find directories",
              "Directory summarizer"
           ]
        },
        {
           "title":"\n          Walking the file system\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Use the pathlib module to perform file system operations in Python.  You'll learn to write tools to walk the filesystem, write files and archive directories all with a few lines of code.\n  ",
           "parts":[
              "Dealing with file systems",
              "Double trouble",
              "Y'all got some renaming to do",
              "Sweet pickle",
              "Find files matching a pattern",
              "Rogue founder code",
              "Is this pattern True?",
              "High-level file and directory operations",
              "Goons over my shammy",
              "Archive Users",
              "Using pathlib",
              "Does it even exist?",
              "File writing one-liner"
           ]
        },
        {
           "title":"\n          Command line functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to use functions to automate complex workflows.  You'll use the click command line tool module to create sophisticated command line tools in a few lines of code.\n  ",
           "parts":[
              "Using functions for automation",
              "Funky clusters",
              "Hello decorator",
              "Debugging decorator",
              "Understand script input",
              "Using python command-line tools",
              "Backwards day",
              "Introduction to Click",
              "Simple yet true",
              "Running a click application from subprocess",
              "Using click to write command line tools",
              "Got a ticket to write",
              "Invoking command line tests",
              "Course Summary"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python",
        "Introduction to Shell"
     ],
     "tracks":[
        "Data Engineer with Python"
     ]
  },
  {
     "title":"Introduction to AWS Boto in Python",
     "description":"Learn about AWS Boto and harnessing cloud technology to optimize your data workflow.",
     "detailDescription":"What if you were no longer constrained by the capabilities of your laptop? What if you could get an SMS when a city garbage truck camera spots a missing a cat? This is all possible with cloud technology. This course will teach you how to integrate Amazon Web Services (AWS) into your data workflow. You’ll learn how to upload data to S3, AWS cloud storage. You’ll use triggers from your analysis to send text messages with AWS SNS. You will use Rekognition to detect objects in an image. And you will use Comprehend to decide if a piece of feedback is negative. By the time you’re done, you will learn how to build a pipeline, subscribe people to it, and send them text messages when an image contains a cat!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Putting Files in the Cloud!\n        ",
           "index":"1",
           "description":"\n    Embark on the world of cloud technology! From learning how AWS works to creating S3 buckets and uploading files to them. You will master the basics of setting up AWS and uploading files to the cloud!\n  ",
           "parts":[
              "Intro to AWS and Boto3",
              "Your first boto3 client",
              "Multiple clients",
              "Removing repetitive work",
              "Diving into buckets",
              "Creating a bucket",
              "Listing buckets",
              "Deleting a bucket",
              "Deleting multiple buckets",
              "Uploading and retrieving files",
              "Putting files in the cloud",
              "Spring cleaning"
           ]
        },
        {
           "title":"\n          Sharing Files Securely.\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Continue your journey in mastering AWS by learning how to upload and share files securely. You will learn how set files to be public or private, and cap off what you learned by generating web-based reports!\n  ",
           "parts":[
              "Keeping objects secure",
              "Making an object public",
              "Uploading a public report",
              "Making multiple files public",
              "Accessing private objects in S3",
              "Generating a presigned URL",
              "Opening a private file",
              "Sharing files through a website",
              "Generate HTML table from Pandas",
              "Upload an HTML file to S3",
              "Case Study: Generating a Report Repository",
              "Combine daily requests for February",
              "Upload aggregated reports for February",
              "Update index to include February",
              "Upload the new index"
           ]
        },
        {
           "title":"\n          Reporting and Notifying!\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Next, you will learn how to automate sharing your findings with the world by building notification triggers for your analysis! You will learn how to harness AWS to send SMS and email notifications to users and cap off what you learned by making custom notifications depending on a user's needs.\n  ",
           "parts":[
              "SNS Topics",
              "Creating a Topic",
              "Creating multiple topics",
              "Deleting multiple topics",
              "SNS Subscriptions",
              "Subscribing to topics",
              "Creating multiple subscriptions",
              "Deleting multiple subscriptions",
              "Sending messages",
              "Sending an alert",
              "Sending a single SMS message",
              "Case Study: Building a notification system",
              "Creating multi-level topics",
              "Different protocols per topic level",
              "Sending multi-level alerts"
           ]
        },
        {
           "title":"\n          Pattern Rekognition\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Finally, you will go beyond uploading, sharing and notifying into rekognizing using AWS Rekognition and other AWS machine learning services to recognize cats, translate language and detect sentiment. You will be capping off your learning journey by applying a real-world use case that mixes everything you've learned! \n  ",
           "parts":[
              "Rekognizing patterns",
              "Cat detector",
              "Multiple cat detector",
              "Parking sign reader",
              "Comprehending text",
              "Detecting language",
              "Translating Get It Done requests",
              "Getting request sentiment",
              "Case Study: Scooting Around!",
              "Scooter community sentiment",
              "Scooter dispatch",
              "Wrap up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python",
        "Intermediate Python",
        "Python Data Science Toolbox (Part 1)",
        "Python Data Science Toolbox (Part 2)"
     ],
     "tracks":[
        "Data Engineer with Python"
     ]
  },
  {
     "title":"Machine Translation in Python",
     "description":"Are you curious about the inner workings of the models that are behind products like Google Translate?",
     "detailDescription":"The need to pack a bilingual dictionary for your European holiday or keeping one on your desk to complete your foreign language homework is a thing of the past. You just hop on the internet and make use of a language translation service to quickly understand what the street sign means or finding out how to greet and thank a foreigner in their language. Behind the language translation services are complex machine translation models. Have you ever wondered how these models work? This course will allow you to explore the inner workings of a machine translation model. You will use Keras, a powerful Python-based deep learning library, to implement a translation model. You will then train the model to perform an English to French translation, and you will be shown techniques to improve your model. At the end of this course, you would have developed an in-depth understanding of machine translation models and appreciate them even more!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to machine translation\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll understand what the encoder-decoder architecture is and how it is used for machine translation. You will also learn about Gated Recurrent Units (GRUs) and how they are used in the encoder-decoder architecture.\n  ",
           "parts":[
              "Introduction to machine translation",
              "Understanding one-hot vectors",
              "Part 1: Exploring the to_categorical() function",
              "Part 2: Exploring the to_categorical() function",
              "Encoder decoder architecture",
              "Part 1: Text reversing model -  Encoder",
              "Part 2: Text reversing model -  Encoder",
              "Complete text reversing model",
              "Understanding sequential models",
              "Part 1: Understanding GRU models",
              "Part 2: Understanding GRU models",
              "Understanding sequential model output"
           ]
        },
        {
           "title":"\n          Implementing an encoder decoder model with Keras\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will implement the encoder-decoder model with the Keras functional API. While doing so, you will learn several useful Keras layers such as RepeatVector and TimeDistributed layers.\n  ",
           "parts":[
              "Implementing the encoder",
              "Part 1: Exploring the dataset",
              "Part 2: Exploring the dataset",
              "Defining the encoder",
              "Implementing the decoder",
              "Understanding the RepeatVector layer",
              "The shape of a RepeatVector layer output",
              "Defining the decoder",
              "Dense and TimeDistributed layers",
              "Part 1: Enter to win amazing prizes",
              "Part 2: Let's play a few more games",
              "Implementing the full encoder decoder model",
              "Part 1: Defining the full model",
              "Part 2: Defining the full model"
           ]
        },
        {
           "title":"\n          Training and generating translations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will train the previously defined model and then use a well-trained model to generate translations. You will see that our model does a good job when translating sentences.\n  ",
           "parts":[
              "Part 1: Preprocessing the Data",
              "Tokenizing sentences with Keras",
              "Controlling the vocabulary with the Tokenizer",
              "Part 2: Preprocessing the Data",
              "Adding special tokens",
              "Padding sentences",
              "Reversing sentences",
              "Training the NMT model",
              "Training the model",
              "Splitting data to training and validation sets",
              "Training the model with validation",
              "Generating translations with the NMT",
              "Part 1: Treasure hunt",
              "Part 2: Treasure hunt",
              "Generating English-French translations"
           ]
        },
        {
           "title":"\n          Teacher Forcing and word embeddings\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about a technique known as Teacher Forcing, which enables translation models to be trained better and faster.  Then you will learn how you can use word embeddings to make the model even better.\n  ",
           "parts":[
              "Introduction to Teacher Forcing",
              "Defining the Teacher Forcing model layers",
              "Defining the Teacher Forcing model",
              "Preprocessing data",
              "Training the model with Teacher Forcing",
              "Training the model",
              "Splitting training and validation data",
              "Training the model with validation",
              "Generating translations from the model",
              "Defining the decoder of the inference model",
              "Link between the trained and inference model",
              "Generating translations",
              "Using word embedding for machine translation",
              "Measuring word vector similarity",
              "Defining the embedding model",
              "Training the word embedding based model",
              "Wrap-up and the final showdown"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Deep Learning in Python"
     ],
     "tracks":[
        "Deep Learning for NLP in Python"
     ]
  },
  {
     "title":"Winning a Kaggle Competition in Python",
     "description":"Learn how to approach and win competitions on Kaggle.",
     "detailDescription":"Kaggle is the most famous platform for Data Science competitions. Taking part in such competitions allows you to work with real-world datasets, explore various machine learning problems, compete with other participants and, finally, get invaluable hands-on experience. In this course, you will learn how to approach and structure any Data Science competition. You will be able to select the correct local validation scheme and to avoid overfitting. Moreover, you will master advanced feature engineering together with model ensembling approaches. All these techniques will be practiced on Kaggle competitions datasets.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Kaggle competitions process\n        ",
           "index":"1",
           "description":"\n    In this first chapter, you will get exposure to the Kaggle competition process. You will train a model and prepare a csv file ready for submission. You will learn the difference between Public and Private test splits, and how to prevent overfitting.\n  ",
           "parts":[
              "Competitions overview",
              "Explore train data",
              "Explore test data",
              "Prepare your first submission",
              "Determine a problem type",
              "Train a simple model",
              "Prepare a submission",
              "Public vs Private leaderboard",
              "What model is overfitting?",
              "Train XGBoost models",
              "Explore overfitting XGBoost"
           ]
        },
        {
           "title":"\n          Dive into the Competition\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you know the basics of Kaggle competitions, you will learn how to study the specific problem at hand. You will practice EDA and get to establish correct local validation strategies. You will also learn about data leakage.\n  ",
           "parts":[
              "Understand the problem",
              "Understand the problem type",
              "Define a competition metric",
              "Initial EDA",
              "EDA statistics",
              "EDA plots I",
              "EDA plots II",
              "Local validation",
              "K-fold cross-validation",
              "Stratified K-fold",
              "Validation usage",
              "Time K-fold",
              "Overall validation score"
           ]
        },
        {
           "title":"\n          Feature Engineering\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will now get exposure to different types of features. You will modify existing features and create new ones. Also, you will treat the missing data accordingly.\n  ",
           "parts":[
              "Feature engineering",
              "Arithmetical features",
              "Date features",
              "Categorical features",
              "Label encoding",
              "One-Hot encoding",
              "Target encoding",
              "Mean target encoding",
              "K-fold cross-validation",
              "Beyond binary classification",
              "Missing data",
              "Find missing data",
              "Impute missing data"
           ]
        },
        {
           "title":"\n          Modeling\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Time to bring everything together and build some models! In this last chapter, you will build a base model before tuning some hyperparameters and improving your results with ensembles. You will then get some final tips and tricks to help you compete more efficiently.\n  ",
           "parts":[
              "Baseline model",
              "Replicate validation score",
              "Baseline based on the date",
              "Baseline based on the gradient boosting",
              "Hyperparameter tuning",
              "Grid search",
              "2D grid search",
              "Model ensembling",
              "Model blending",
              "Model stacking I",
              "Model stacking II",
              "Final tips",
              "Testing Kaggle forum ideas",
              "Select final submissions",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating DataFrames with pandas",
        "Supervised Learning with scikit-learn",
        "Extreme Gradient Boosting with XGBoost"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Image Processing in Python",
     "description":"Learn to process, transform, and manipulate images at your will.",
     "detailDescription":"Images are everywhere! We live in a time where images contain lots of information, which is sometimes difficult to obtain. This is why image pre-processing has become a highly valuable skill, applicable in many use cases. In this course, you will learn to process, transform, and manipulate images at your will, even when they come in thousands. You will also learn to restore damaged images, perform noise reduction, smart-resize images, count the number of dots on a dice, apply facial detection, and much more, using scikit-image. After completing this course, you will be able to apply your knowledge to different domains such as machine learning and artificial intelligence, machine and robotic vision, space and medical image analysis, retailing, and many more. Take the step and dive into the wonderful world that is computer vision!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introducing Image Processing and scikit-image\n        ",
           "index":"1",
           "description":"\n    Jump into digital image structures and learn to process them! Extract data, transform and analyze images using NumPy and Scikit-image. \n\nWith just a few lines of code, you will convert RGB images to grayscale,  get data from them, obtain histograms containing very useful information, and separate objects from the background!\n  ",
           "parts":[
              "Make images come alive with scikit-image",
              "Is this gray or full of color?",
              "RGB to grayscale",
              "NumPy for images",
              "Flipping out",
              "Histograms",
              "Getting started with thresholding",
              "Apply global thresholding",
              "When the background isn't that obvious",
              "Trying other methods",
              "Apply thresholding"
           ]
        },
        {
           "title":"\n          Filters, Contrast, Transformation and Morphology\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will learn to detect object shapes using edge detection filters, improve medical images with contrast enhancement and even enlarge pictures to five times its original size! \n\nYou will also apply morphology to make thresholding more accurate when segmenting images and go to the next level of processing images with Python.\n  ",
           "parts":[
              "Jump into filtering",
              "Edge detection",
              "Blurring to reduce noise",
              "Contrast enhancement",
              "What's the contrast of this image?",
              "Medical images",
              "Aerial image",
              "Let's add some impact and contrast",
              "Transformations",
              "Aliasing, rotating and rescaling",
              "Enlarging images",
              "Proportionally resizing",
              "Morphology",
              "Handwritten letters",
              "Improving thresholded image"
           ]
        },
        {
           "title":"\n          Image restoration, Noise, Segmentation and Contours\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    So far, you have done some very cool things with your image processing skills!\n \nIn this chapter, you will apply image restoration to remove objects, logos, text, or damaged areas in pictures! \nYou will also learn how to apply noise, use segmentation to speed up processing, and find elements in images by their contours. \n  ",
           "parts":[
              "Image restoration",
              "Let's restore a damaged image",
              "Removing logos",
              "Noise",
              "Let's make some noise!",
              "Reducing noise",
              "Reducing noise while preserving edges",
              "Superpixels & segmentation",
              "Number of pixels",
              "Superpixel segmentation",
              "Finding contours",
              "Contouring shapes",
              "Find contours of an image that is not binary",
              "Count the dots in a dice's image"
           ]
        },
        {
           "title":"\n          Advanced Operations, Detecting Faces and Features\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    After completing this chapter, you will have a deeper knowledge of image processing as you will be able to detect edges, corners, and even faces!  You will learn how to detect not just front faces but also face profiles, cat, or dogs. You will apply your skills to more complex real-world applications.\nLearn to master several widely used image processing techniques with very few lines of code! \n  ",
           "parts":[
              "Finding the edges with Canny",
              "Edges",
              "Less edgy",
              "Right around the corner",
              "Perspective",
              "Less corners",
              "Face detection",
              "Is someone there?",
              "Multiple faces",
              "Segmentation and face detection",
              "Real-world applications",
              "Privacy protection",
              "Help Sally restore her graduation photo",
              "Amazing work!"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)"
     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Image Processing with Python",
        "Machine Learning Scientist with Python"
     ]
  },
  {
     "title":"Spoken Language Processing in Python",
     "description":"Learn to load, transform, and transcribe human speech from raw audio files in Python.",
     "detailDescription":"We learn to speak far before we learn to read. Even in the digital age, our main method of communication is speech. Spoken Language Processing with Python will help you load, transform and transcribe audio files. You'll start by seeing what raw audio looks like in Python. And then finish by working through an example business use case, transcribing and classifying phone call data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Spoken Language Processing with Python\n        ",
           "index":"1",
           "description":"\n    Audio files are different from most other types of data. Before you can start working with them, they require some preprocessing. In this chapter, you'll learn the first steps to working with speech files by converting two different audio files into soundwaves and comparing them visually.\n  ",
           "parts":[
              "Introduction to audio data in Python",
              "The right frequency",
              "Importing an audio file with Python",
              "Converting sound wave bytes to integers",
              "The right data type",
              "Bytes to integers",
              "Finding the time stamps",
              "Visualizing sound waves",
              "Staying consistent",
              "Processing audio data with Python"
           ]
        },
        {
           "title":"\n          Using the Python SpeechRecognition library\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Speech recognition is still far from perfect. But the SpeechRecognition library provides an easy way to interact with many speech-to-text APIs. In this section, you'll learn how to use the SpeechRecognition library to easily start converting the spoken language in your audio files to text.\n  ",
           "parts":[
              "SpeechRecognition Python library",
              "Pick the wrong speech_recognition API",
              "Using the SpeechRecognition library",
              "Using the Recognizer class",
              "Reading audio files with SpeechRecognition",
              "From AudioFile to AudioData",
              "Recording the audio we need",
              "Dealing with different kinds of audio",
              "Different kinds of audio",
              "Multiple Speakers 1",
              "Multiple Speakers 2",
              "Working with noisy audio"
           ]
        },
        {
           "title":"\n          Manipulating Audio Files with PyDub\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Not all audio files come in the same shape, size or format. Luckily, the PyDub library by James Robert provides tools which you can use to programmatically alter and change different audio file attributes such as frame rate, number of channels, file format and more. In this chapter, you'll learn how to use this helpful library to ensure all of your audio files are in the right shape for transcription.\n  ",
           "parts":[
              "Introduction to PyDub",
              "Import an audio file with PyDub",
              "Play an audio file with PyDub",
              "Audio parameters with PyDub",
              "Adjusting audio parameters",
              "Manipulating audio files with PyDub",
              "Turning it down... then up",
              "Normalizing an audio file with PyDub",
              "Chopping and changing audio files",
              "Splitting stereo audio to mono with PyDub",
              "Converting and saving audio files with PyDub",
              "Exporting and reformatting audio files",
              "Manipulating multiple audio files with PyDub",
              "An audio processing workflow"
           ]
        },
        {
           "title":"\n          Processing text transcribed from spoken language\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll put everything you've learned together by building a speech processing proof of concept project for a technology company, Acme Studios. You'll start by transcribing customer support call phone call audio snippets to text. Then you'll perform sentiment analysis using NLTK, named entity recognition using spaCy and text classification using scikit-learn on the transcribed text.\n  ",
           "parts":[
              "Creating transcription helper functions",
              "Converting audio to the right format",
              "Finding PyDub stats",
              "Transcribing audio with one line",
              "Using the helper functions you've built",
              "Sentiment analysis on spoken language text",
              "Analyzing sentiment of a phone call",
              "Sentiment analysis on formatted text",
              "Named entity recognition on transcribed text",
              "Named entity recognition in spaCy",
              "Creating a custom named entity in spaCy",
              "Classifying transcribed speech with Sklearn",
              "Preparing audio files for text classification",
              "Transcribing phone call excerpts",
              "Organizing transcribed phone call data",
              "Create a spoken language text classifier",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python",
        "Introduction to Natural Language Processing in Python",
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Natural Language Processing in Python"
     ]
  },
  {
     "title":"Data Cleaning in Python",
     "description":"Learn to diagnose and treat dirty data and develop the skills needed to transform your raw data into accurate insights!",
     "detailDescription":"It's commonly said that data scientists spend 80% of their time cleaning and manipulating data and only 20% of their time analyzing it. The time spent cleaning is vital since analyzing dirty data can lead you to draw inaccurate conclusions. Data cleaning is an essential task in data science. Without properly cleaned data, the results of any data analysis or machine learning model could be inaccurate. In this course, you will learn how to identify, diagnose, and treat a variety of data cleaning problems in Python, ranging from simple to advanced. You will deal with improper data types, check that your data is in the correct range, handle missing data, perform record linkage, and more!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Common data problems\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn how to overcome some of the most common dirty data problems. You'll convert data types, apply range constraints to remove future data points, and remove duplicated data points to avoid double-counting.\n  ",
           "parts":[
              "Data type constraints",
              "Common data types",
              "Numeric data or ... ?",
              "Summing strings and concatenating numbers",
              "Data range constraints",
              "Tire size constraints",
              "Back to the future",
              "Uniqueness constraints",
              "How big is your subset?",
              "Finding duplicates",
              "Treating duplicates"
           ]
        },
        {
           "title":"\n          Text and categorical data problems\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Categorical and text data can often be some of the messiest parts of a dataset due to their unstructured nature. In this chapter, you’ll learn how to fix whitespace and capitalization inconsistencies in category labels, collapse multiple categories into one, and reformat strings for consistency.\n  ",
           "parts":[
              "Membership constraints",
              "Members only",
              "Finding consistency",
              "Categorical variables",
              "Categories of errors",
              "Inconsistent categories",
              "Remapping categories",
              "Cleaning text data",
              "Removing titles and taking names",
              "Keeping it descriptive"
           ]
        },
        {
           "title":"\n          Advanced data problems\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll dive into more advanced data cleaning problems, such as ensuring that weights are all written in kilograms instead of pounds. You’ll also gain invaluable skills that will help you verify that values have been added correctly and that missing values don’t negatively impact your analyses.\n  ",
           "parts":[
              "Uniformity",
              "Ambiguous dates",
              "Uniform currencies",
              "Uniform dates",
              "Cross field validation",
              "Cross field or no cross field?",
              "How's our data integrity?",
              "Completeness",
              "Is this missing at random?",
              "Missing investors",
              "Follow the money"
           ]
        },
        {
           "title":"\n          Record linkage\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Record linkage is a powerful technique used to merge multiple datasets together, used when values have typos or different spellings. In this chapter, you'll learn how to link records by calculating the similarity between strings—you’ll then use your new skills to join two restaurant review datasets into one clean master dataset.\n  ",
           "parts":[
              "Comparing strings",
              "Minimum edit distance",
              "The cutoff point",
              "Remapping categories II",
              "Generating pairs",
              "To link or not to link?",
              "Pairs of restaurants",
              "Similar restaurants",
              "Linking DataFrames",
              "Getting the right index",
              "Linking them together!",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Python Data Science Toolbox (Part 2)",
        "Joining Data with pandas"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Analyst with Python",
        "Data Scientist with Python",
        "Importing & Cleaning Data with Python"
     ]
  },
  {
     "title":"Regular Expressions in Python",
     "description":"Learn about string manipulation and become a master at using regular expressions.",
     "detailDescription":"As a data scientist, you will encounter many situations where you will need to extract key information from huge corpora of text, clean messy data containing strings, or detect and match patterns to find useful words. All of these situations are part of text mining and are an important step before applying machine learning algorithms. This course will take you through understanding compelling concepts about string manipulation and regular expressions. You will learn how to split strings, join them back together, interpolate them, as well as detect, extract, replace, and match strings using regular expressions. On the journey to master these skills, you will work with datasets containing movie reviews or streamed tweets that can be used to determine opinion, as well as with raw text scraped from the web.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basic Concepts of String Manipulation\n        ",
           "index":"1",
           "description":"\n    Start your journey into the regular expression world! From slicing and concatenating, adjusting the case, removing spaces, to finding and replacing strings. You will learn how to master basic operation for string manipulation using a movie review dataset. \n  ",
           "parts":[
              "Introduction to string manipulation",
              "First day!",
              "Artificial reviews",
              "Palindromes",
              "String operations",
              "Normalizing reviews",
              "Time to join!",
              "Split lines or split the line?",
              "Finding and replacing",
              "Finding a substring",
              "Where's the word?",
              "Replacing negations"
           ]
        },
        {
           "title":"\n          Formatting Strings\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Following your journey, you will learn the main approaches that can be used to format or interpolate strings in python using a dataset containing information scraped from the web. You will explore the advantages and disadvantages of using positional formatting, embedding expressing inside string constants, and using the Template class.\n  ",
           "parts":[
              "Positional formatting",
              "Put it in order!",
              "Calling by its name",
              "What day is today?",
              "Formatted string literal",
              "Literally formatting",
              "Make this function",
              "On time",
              "Template method",
              "Preparing a report",
              "Identifying prices",
              "Playing safe"
           ]
        },
        {
           "title":"\n          Regular Expressions for Pattern Matching\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Time to discover the fundamental concepts of regular expressions! In this key chapter, you will learn to understand the basic concepts of regular expression syntax. Using a real dataset with tweets meant for sentiment analysis, you will learn how to apply pattern matching using normal and special characters, and greedy and lazy quantifiers. \n  ",
           "parts":[
              "Introduction to regular expressions",
              "Are they bots?",
              "Find the numbers",
              "Match and split",
              "Repetitions",
              "Everything clean",
              "Some time ago",
              "Getting tokens",
              "Regex metacharacters",
              "Finding files",
              "Give me your email",
              "Invalid password",
              "Greedy vs. non-greedy matching",
              "Understanding the difference",
              "Greedy matching",
              "Lazy approach"
           ]
        },
        {
           "title":"\n          Advanced Regular Expression Concepts\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the last step of your journey, you will learn more complex methods of pattern matching using parentheses to group strings together or to match the same text as matched previously. Also, you will get an idea of how you can look around expressions.\n  ",
           "parts":[
              "Capturing groups",
              "Try another name",
              "Flying home",
              "Alternation and non-capturing groups",
              "Love it!",
              "Ugh! Not for me!",
              "Backreferences",
              "Parsing PDF files",
              "Close the tag, please!",
              "Reeepeated characters",
              "Lookaround",
              "Surrounding words",
              "Filtering phone numbers",
              "Finishing line"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[
        "Python Programmer",
        "Python Toolbox"
     ]
  },
  {
     "title":"Market Basket Analysis in Python",
     "description":"Explore association rules in market basket analysis with Python by bookstore data and creating movie recommendations.",
     "detailDescription":"What do Amazon product recommendations and Netflix movie suggestions have in common? They both rely on Market Basket Analysis, which is a powerful tool for translating vast amounts of customer transaction and viewing data into simple rules for product promotion and recommendation. In this course, you’ll learn how to perform Market Basket Analysis using the Apriori algorithm, standard and custom metrics, association rules, aggregation and pruning, and visualization. You’ll then reinforce your new skills through interactive exercises, building recommendations for a small grocery store, a library, an e-book seller, a novelty gift retailer, and a movie streaming service. In the process, you’ll uncover hidden insights to improve recommendations for customers.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Market Basket Analysis\n        ",
           "index":"1",
           "description":"\n    In this chapter, you’ll learn the basics of Market Basket Analysis: association rules, metrics, and pruning. You’ll then apply these concepts to help a small grocery store improve its promotional and product placement efforts.\n  ",
           "parts":[
              "What is market basket analysis?",
              "The basics of market basket analysis",
              "Cross-selling products",
              "Identifying association rules",
              "Multiple antecedents and consequents",
              "Preparing data for market basket analysis",
              "Generating association rules",
              "The simplest metric",
              "One-hot encoding transaction data",
              "Computing the support metric"
           ]
        },
        {
           "title":"\n          Association Rules\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Association rules tell us that two or more items are related. Metrics allow us to quantify the usefulness of those relationships. In this chapter, you’ll apply six metrics to evaluate association rules: supply, confidence, lift, conviction, leverage, and Zhang's metric. You’ll then use association rules and metrics to assist a library and an e-book seller.\n  ",
           "parts":[
              "Confidence and lift",
              "Recommending books with support",
              "Refining support with confidence",
              "Further refinement with lift",
              "Leverage and conviction",
              "Lift versus leverage",
              "Computing conviction",
              "Computing conviction with a function",
              "Promoting ebooks with conviction",
              "Association and dissociation",
              "Computing association and dissociation",
              "Defining Zhang's metric",
              "Applying Zhang's metric",
              "Advanced rules",
              "Filtering with support and conviction",
              "Using multi-metric filtering to cross-promote books"
           ]
        },
        {
           "title":"\n          Aggregation and Pruning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The fundamental problem of Market Basket Analysis is determining how to translate vast amounts of customer decisions into a small number of useful rules. This process typically starts with the application of the Apriori algorithm and involves the use of additional strategies, such as pruning and aggregation. In this chapter, you’ll learn how to use these methods and will ultimately apply them in exercises where you assist a retailer in selecting a physical store layout and performing product cross-promotions.\n  ",
           "parts":[
              "Aggregation",
              "Performing aggregation",
              "Defining an aggregation function",
              "The Apriori algorithm",
              "Pruning and Apriori",
              "Identifying frequent itemsets with Apriori",
              "Selecting a support threshold",
              "Basic Apriori results pruning",
              "Generating association rules",
              "Pruning with lift",
              "Pruning with confidence",
              "Advanced Apriori results pruning",
              "Aggregation and filtering",
              "Applying Zhang's rule",
              "Advanced filtering with multiple metrics"
           ]
        },
        {
           "title":"\n          Visualizing Rules\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you’ll learn how visualizations are used to guide the pruning process and summarize final results, which will typically take the form of itemsets or rules. You’ll master the three most useful visualizations -- heatmaps, scatterplots, and parallel coordinates plots – and will apply them to assist a movie streaming service.\n  ",
           "parts":[
              "Heatmaps",
              "Visualizing itemset support",
              "Heatmaps with lift",
              "Interpreting heatmaps",
              "Scatterplots",
              "Pruning with scatterplots",
              "Optimality of the support-confidence border",
              "Parallel coordinates plot",
              "Using parallel coordinates to visualize rules",
              "Refining a parallel coordinates plot",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Building Data Engineering Pipelines in Python",
     "description":"Learn how to build data engineering pipelines in Python.",
     "detailDescription":"In any data-driven company, you will undoubtedly cross paths with data engineers. Among other things, they facilitate some of your work by making data readily available to everyone within the organization, and possibly in bringing machine learning models into production. One way to speed up this process is through building an understanding of what it means to bring processes into production and what features are of high-grade code. In this course, we’ll be looking at various data pipelines the data engineer is building, and how some of the tools he or she is using can help you in getting your models into production or run repetitive tasks consistently and efficiently.\n\nIn this course, we illustrate common elements of data engineering pipelines. In Chapter 1, you will learn how to ingest data. Chapter 2 will go one step further with cleaning and transforming data. In Chapter 3, you will learn how to safely deploy code. Finally, in Chapter 4 you will schedule complex dependencies between applications.\n\nBuilding Data Engineering Pipelines covers new technologies and material, so we recommend that you have a strong understanding of the prerequisites to get the most out of this course.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Ingesting Data\n        ",
           "index":"1",
           "description":"\n    After seeing this chapter, you will be able to explain what a data platform is, how data ends up in it, and how data engineers structure its foundations. You will be able to ingest data from a RESTful API into the data platform’s data lake using a self-written ingestion pipeline, made using Singer’s taps and targets.\n  ",
           "parts":[
              "Components of a data platform",
              "Dashboards providing business value",
              "Snapshots in a data lake",
              "The data catalog",
              "Introduction to data ingestion with Singer",
              "Working with JSON",
              "Specifying the schema of the data",
              "Running an ingestion pipeline with Singer",
              "Properly propagating state",
              "Communicating with an API",
              "Streaming records",
              "Chain taps and targets"
           ]
        },
        {
           "title":"\n          Creating a data transformation pipeline with PySpark\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will learn how to process data in the data lake in a structured way using PySpark. Of course, you must first understand when PySpark is the right choice for the job.\n  ",
           "parts":[
              "Basic introduction to PySpark",
              "Reading a CSV file",
              "Defining a schema",
              "Cleaning data",
              "Sensible data types",
              "Removing invalid rows",
              "Filling unknown data",
              "Conditionally replacing values",
              "Transforming data with Spark",
              "Selecting and renaming columns",
              "Grouping and aggregating data",
              "Packaging your application",
              "Creating a deployable artifact",
              "Submitting your Spark job",
              "Debugging simple errors",
              "Verifying your pipeline’s output"
           ]
        },
        {
           "title":"\n          Testing your data pipeline\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Stating “it works on my machine” is not a guarantee it will work reliably elsewhere and in the future. Requirements for your project will change. In this chapter, we explore different forms of testing and learn how to write unit tests for our PySpark data transformation pipeline, so that we make robust and reusable parts.\n  ",
           "parts":[
              "On the importance of tests",
              "Regression errors",
              "Characteristics of tests",
              "Writing unit tests for PySpark",
              "Creating in-memory DataFrames",
              "Making a function more widely reusable",
              "Continuous testing",
              "A high-level view on CI/CD",
              "Understanding the output of pytest",
              "Improving style guide compliancy"
           ]
        },
        {
           "title":"\n          Managing and orchestrating a workflow\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We will explore the basics of Apache Airflow, a popular piece of software that allows you to trigger the various components of an ETL pipeline on a certain time schedule and execute tasks in a specific order. Here too, we illustrate how a deployment of Apache Airflow can be tested automatically.\n  ",
           "parts":[
              "Modern day workflow management",
              "Specifying the DAG schedule",
              "Setting up daily tasks",
              "Specifying operator dependencies",
              "Building a data pipeline with Airflow",
              "Preparing a DAG for daily pipelines",
              "Scheduling bash scripts with Airflow",
              "Scheduling Spark jobs with Airflow",
              "Scheduling the full data pipeline with Airflow",
              "Deploying Airflow",
              "Airflow’s executors",
              "Recovering from deployed but broken DAGs",
              "Running tests on Airflow",
              "Final thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Shell",
        "Intermediate Importing Data in Python",
        "Introduction to Data Engineering",
        "Introduction to PySpark",
        "Unit Testing for Data Science in Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Portfolio Analysis in Python",
     "description":"Learn how to calculate meaningful measures of risk and performance, and how to compile an optimal portfolio for the desired risk and return trade-off.",
     "detailDescription":"Have you ever had wondered whether an investment fund is actually a good investment? Or compared two investment options and asked what the difference between the two is? What does the risk indicator of these funds even mean? Or do you frequently work with financial data in your daily job and you want to get an edge? In this course, you’re going to get familiar with the exciting world of investing, by learning about portfolios, risk and return, and how to critically analyze them. By working on actual historical stock data, you’ll learn how to calculate meaningful measures of risk, how to break-down performance, and how to calculate an optimal portfolio for the desired risk and return trade-off. After this course, you’ll be able to make data-driven decisions when it comes to investing and have a better understanding of investment portfolios.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Portfolio Analysis\n        ",
           "index":"1",
           "description":"\n    In the first chapter, you’ll learn how a portfolio is build up out of individual assets and corresponding weights. The chapter also covers how to calculate the main characteristics of a portfolio: returns and risk. \n  ",
           "parts":[
              "Welcome to Portfolio Analysis!",
              "Why invest in portfolios",
              "The effect of diversification",
              "Portfolio returns",
              "Portfolio losses and gaining it back",
              "Calculate mean returns",
              "Portfolio cumulative returns",
              "Measuring risk of a portfolio",
              "Portfolio variance",
              "Standard deviation versus variance"
           ]
        },
        {
           "title":"\n          Risk and Return\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Chapter 2 goes deeper into how to measure returns and risk accurately. The two most important measures of return, annualized returns, and risk-adjusted returns, are covered in the first part of the chapter. In the second part, you’ll learn how to look at risk from different perspectives. This part focuses on skewness and kurtosis of a distribution, as well as downside risk. \n  ",
           "parts":[
              "Annualized returns",
              "Annualizing portfolio returns",
              "Comparing annualized rates of return",
              "Risk adjusted returns",
              "Interpreting the Sharpe ratio",
              "S&P500 Sharpe ratio",
              "Portfolio Sharpe ratio",
              "Non-normal distribution of returns",
              "Skewness of the S&P500",
              "Calculating skewness and kurtosis",
              "Comparing distributions of stock returns",
              "Alternative measures of risk",
              "Sortino ratio",
              "Maximum draw-down portfolio"
           ]
        },
        {
           "title":"\n          Performance Attribution\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In chapter 3, you’ll learn about investment factors and how they play a role in driving risk and return. You’ll learn about the Fama French factor model, and use that to break down portfolio returns into explainable, common factors. This chapter also covers how to use Pyfolio, a public portfolio analysis tool. \n  ",
           "parts":[
              "Comparing against a benchmark",
              "Active return",
              "Industry attribution",
              "Risk factors",
              "Size factor",
              "Momentum factor",
              "Value factor",
              "Factor models",
              "Fama French factor correlations",
              "Linear regression model",
              "Fama French Factor model",
              "Portfolio analysis tools",
              "Performance tear sheet",
              "Industry exposures with Pyfolio"
           ]
        },
        {
           "title":"\n          Portfolio Optimization\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this last chapter, you learn how to create optimal portfolio weights, using Markowitz’ portfolio optimization framework. You’ll learn how to find the optimal weights for the desired level of risk or return. Lastly, you’ll learn alternative ways to calculate expected risk and return, using the most recent data only. \n  ",
           "parts":[
              "Modern portfolio theory",
              "Understanding the efficient frontier",
              "Calculating expected risk and returns",
              "PyPortfolioOpt risk functions",
              "Optimal portfolio performance",
              "Maximum Sharpe vs. minimum volatility",
              "Portfolio optimization: Max Sharpe",
              "Minimum volatility optimization",
              "Comparing max Sharpe to min vol",
              "Alternative portfolio optimization",
              "Exponentially weighted returns and risk",
              "Comparing approaches",
              "Changing the span",
              "Recap"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating Time Series Data in Python",
        "Introduction to Python for Finance"
     ],
     "tracks":[
        "Finance Fundamentals in Python"
     ]
  },
  {
     "title":"Practicing Machine Learning Interview Questions in Python",
     "description":"Sharpen your knowledge in machine learning, and prepare for any potential question you might get in a machine learning interview in Python.",
     "detailDescription":"Have you ever wondered how to properly prepare for a Machine Learning Interview? Of course you have or you likely wouldn't be reading this right now! In this course, students will prepare to answer 15 common Machine Learning (ML) interview questions for a data scientist role in Python. These questions will revolve around 7 important topics: data preprocessing, data visualization, supervised learning, unsupervised learning, model ensembling, model selection, and model evaluation. By the end of the course, the students will possess both the required theoretical background and the ability to develop Python code to successfully answer these 15 questions. The coding examples will be mainly based on the scikit-learn package given its ease-of-use and ability to cover the most important ML techniques in the Python language.\n\nThe course does not teach machine learning fundamentals as these are covered in the course's prerequisites.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Data Pre-processing and Visualization\n        ",
           "index":"1",
           "description":"\n    In the first chapter of this course, you'll perform all the preprocessing steps required to create a predictive machine learning model, including what to do with missing values, outliers, and how to normalize your dataset.\n  ",
           "parts":[
              "Handling missing data",
              "The hunt for missing values",
              "Simple imputation",
              "Iterative imputation",
              "Data distributions and transformations",
              "Training vs test set distributions and transformations",
              "Train/test distributions",
              "Log and power transformations",
              "Data outliers and scaling",
              "Outlier detection",
              "Handling outliers",
              "Z-score standardization"
           ]
        },
        {
           "title":"\n          Supervised Learning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the second chapter of this course, you'll practice different several aspects of supervised machine learning techniques, such as selecting the optimal feature subset, regularization to avoid model overfitting, feature engineering, and ensemble models to address the so-called bias-variance trade-off.\n  ",
           "parts":[
              "Regression: feature selection",
              "Best feature subset",
              "Filter and wrapper methods",
              "Feature selection through feature importance",
              "Regression: regularization",
              "Avoiding overfitting",
              "Lasso regularization",
              "Ridge regularization",
              "Classification: feature engineering",
              "Classification model features",
              "Logistic regression baseline classifier",
              "Ensemble methods",
              "Bootstrap aggregation (bagging)",
              "Boosting",
              "XG Boost"
           ]
        },
        {
           "title":"\n          Unsupervised Learning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the third chapter of this course, you'll use unsupervised learning to apply feature extraction and visualization techniques for dimensionality reduction and clustering methods to select not only an appropriate clustering algorithm but optimal cluster number for a dataset.\n  ",
           "parts":[
              "Dimensionality reduction: feature extraction",
              "The curse of dimensionality",
              "Principal component analysis",
              "Singular value decomposition",
              "Dimensionality reduction: visualization techniques",
              "Reducing high-dimensional data",
              "Visualization separation of classes with PCA I",
              "Visualization PCs with a scree plot",
              "Clustering analysis: selecting the right clustering algorithm",
              "Clustering algorithms",
              "K-means clustering",
              "Hierarchical agglomerative clustering",
              "Clustering analysis: choosing the optimal number of clusters",
              "What is the optimal k?",
              "Silhouette method",
              "Elbow method"
           ]
        },
        {
           "title":"\n          Model Selection and Evaluation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the fourth and final chapter of this course, you'll really step it up and apply bootstrapping and cross-validation to evaluate performance for model generalization, resampling techniques to imbalanced classes, detect and remove multicollinearity, and build an ensemble model.\n  ",
           "parts":[
              "Model generalization: bootstrapping and cross-validation",
              "Validating model performance",
              "Decision tree",
              "A forest of decision trees",
              "Model evaluation: imbalanced classification models",
              "X-ray weapon detection",
              "Imbalanced class metrics",
              "Resampling techniques",
              "Model selection: regression models",
              "Addressing multicollinearity",
              "Multicollinearity techniques - feature engineering",
              "Multicollinearity techniques - PCA",
              "Model selection: ensemble models",
              "Random forest vs gradient boosting",
              "Random forest ensemble",
              "Gradient boosting ensemble",
              "Wrap-Up"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn",
        "Unsupervised Learning in Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Data Manipulation with pandas",
     "description":"Use the world’s most popular Python data science package to manipulate data and calculate summary statistics.",
     "detailDescription":"pandas is the world's most popular Python library, used for everything from data manipulation to data analysis. In this course, you'll learn how to manipulate DataFrames, as you extract, filter, and transform real-world datasets for analysis. Using pandas you’ll explore all the core data science concepts. Using real-world data, including Walmart sales figures and global temperature time series, you’ll learn how to import, clean, calculate statistics, and create visualizations—using pandas to add to the power of Python!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Transforming Data\n        ",
           "index":"1",
           "description":"\n    Let’s master the pandas basics. Learn how to inspect DataFrames and perform fundamental manipulations, including sorting rows, subsetting, and adding new columns.\n  ",
           "parts":[
              "Introducing DataFrames",
              "Inspecting a DataFrame",
              "Parts of a DataFrame",
              "Sorting and subsetting",
              "Sorting rows",
              "Subsetting columns",
              "Subsetting rows",
              "Subsetting rows by categorical variables",
              "New columns",
              "Adding new columns",
              "Combo-attack!"
           ]
        },
        {
           "title":"\n          Aggregating Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll calculate summary statistics on DataFrame columns, and master grouped summary statistics and pivot tables.\n  ",
           "parts":[
              "Summary statistics",
              "Mean and median",
              "Summarizing dates",
              "Efficient summaries",
              "Cumulative statistics",
              "Counting",
              "Dropping duplicates",
              "Counting categorical variables",
              "Grouped summary statistics",
              "What percent of sales occurred at each store type?",
              "Calculations with .groupby()",
              "Multiple grouped summaries",
              "Pivot tables",
              "Pivoting on one variable",
              "Fill in missing values and sum values with pivot tables"
           ]
        },
        {
           "title":"\n          Slicing and indexing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Indexes are supercharged row and column names. Learn how they can be combined with slicing for powerful DataFrame subsetting.\n  ",
           "parts":[
              "Explicit indexes",
              "Setting & removing indexes",
              "Subsetting with .loc[]",
              "Setting multi-level indexes",
              "Sorting by index values",
              "Slicing and subsetting with .loc and .iloc",
              "Slicing index values",
              "Slicing in both directions",
              "Slicing time series",
              "Subsetting by row/column number",
              "Working with pivot tables",
              "Pivot temperature by city and year",
              "Subsetting pivot tables",
              "Calculating on a pivot table"
           ]
        },
        {
           "title":"\n          Creating and Visualizing DataFrames\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn to visualize the contents of your DataFrames, handle missing data values, and import data from and export data to CSV files.\n  ",
           "parts":[
              "Visualizing your data",
              "Which avocado size is most popular?",
              "Changes in sales over time",
              "Avocado supply and demand",
              "Price of conventional vs. organic avocados",
              "Missing values",
              "Finding missing values",
              "Removing missing values",
              "Replacing missing values",
              "Creating DataFrames",
              "List of dictionaries",
              "Dictionary of lists",
              "Reading and writing CSVs",
              "CSV to DataFrame",
              "DataFrame to CSV",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Analyst with Python",
        "Data Manipulation with Python",
        "Data Scientist with Python",
        "Python Programmer"
     ]
  },
  {
     "title":"Predicting CTR with Machine Learning in Python",
     "description":"Learn how to predict click-through rates on ads and implement basic machine learning models in Python so that you can see how to better optimize your ads.",
     "detailDescription":"Have you ever wondered how companies like Facebook and Google are able to serve you surprisingly targeted ads that you occasionally click? Well, behind the scenes, they are running sophisticated machine learning models and using rich user data to predict the click-through rate (CTR) for every user who sees those ads. This course will teach you how to implement basic models in Python so that you can see how to better optimize ads with machine learning. Using real-life ad data you’ll learn how to engineer features, build machine learning models using those features, and evaluate your models in the context of CTR prediction. By the end of this course, you’ll have a strong understanding of how you can apply machine learning to make your ads more effective.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to CTR and Basic Techniques\n        ",
           "index":"1",
           "description":"\n    Chances are you’re on this page because you clicked a link. In this chapter, you’ll learn why click-through-rates (CTR) are integral to targeted advertising, how to perform basic DataFrame manipulation, and how you can use machine learning models to predict CTR. \n  ",
           "parts":[
              "Introduction to click-through rates",
              "Beginning steps",
              "Feature exploration",
              "First evaluation of data",
              "Overview of machine learning models",
              "Logistic regression for breast cancer",
              "Logistic regression for images",
              "A second toy model",
              "CTR prediction using decision trees",
              "Model implementation",
              "A first CTR model",
              "Beyond only accuracy"
           ]
        },
        {
           "title":"\n          Exploratory CTR Data Analysis \n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter provides the foundations for exploratory data analysis (EDA). Using sample data you’ll use the pandas library to look at columns and data types, explore missing data, and use hashing to perform feature engineering on categorical features. All of which are important when exploring features for more accurate CTR prediction. \n  ",
           "parts":[
              "Exploratory data analysis",
              "A first look",
              "Checking for missing values",
              "Distributions by CTR",
              "Feature engineering",
              "Analyzing datetime columns",
              "Converting categorical variables",
              "Creating new features",
              "Standardizing features",
              "Log normalization",
              "Understanding standardization",
              "Standard scaling"
           ]
        },
        {
           "title":"\n          Model Applications and Improvements\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It’s time to dive deeper. Find out how you can use measures of model performance including precision and recall to answer real-world questions, such as evaluating ROI on ad spend. You’ll also learn ways to improve upon those evaluation metrics, such as ensemble methods and hyperparameter tuning.\n  ",
           "parts":[
              "Applications of metric evaluation",
              "Four categories of outcomes",
              "Evaluating four categories",
              "ROI on ad spend",
              "Model evaluation",
              "Precision and recall",
              "Baseline",
              "Classifier comparison",
              "Tuning models",
              "Regularization",
              "Cross validation",
              "Model selection",
              "Ensembles and hyperparameter tuning",
              "Understanding hyperparameter tuning",
              "Random forests",
              "Grid search"
           ]
        },
        {
           "title":"\n          Deep Learning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Profits can be heavily impacted by your campaign’s CTR. In this chapter, you’ll learn how deep learning can be used to reduce that risk. You’ll focus on multi-layer perceptron (MLP) and neural network models, and learn how these can be used to capture the complex relationship between variables to more accurately predict CTR. Lastly, you’ll explore how to apply the basics of hyperparameter tuning and regularization to classification models.\n  ",
           "parts":[
              "Introduction to deep learning",
              "Understanding MLPs",
              "Beginning model",
              "MLPs for CTR",
              "Hyperparameter tuning in deep learning",
              "Hyperparameter tuning in MLPs",
              "Varying hyperparameters",
              "MLP Grid Search",
              "Model evaluation",
              "F-beta score",
              "Low precision and high AUC",
              "Precision, ROI, and AUC",
              "Model review and comparison",
              "Model comparison warmup",
              "Evaluating precision and ROI",
              "Total scoring",
              "Wrap-up video"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Airflow in Python",
     "description":"Learn how to to implement and schedule data engineering workflows.",
     "detailDescription":"Are you responsible for delivering data on a schedule? You may have written scripts, added complex cron tasks, and tried various ways to meet an ever-changing set of requirements. It's even trickier to work with your teammates on managing multiple sets of requirements. Airflow can do this while adding scheduling, error handling, and reporting. Introduction to Airflow in Python will guide you in the basic concepts of Airflow and help you implement data engineering workflows in production. You'll implement many different data engineering tasks in a sane, repeatable fashion, while losing as little sanity as possible.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Intro to Airflow\n        ",
           "index":"1",
           "description":"\n    An introduction to the components of Apache Airflow and why to use them.\n  ",
           "parts":[
              "Introduction to Airflow",
              "Running a task in Airflow",
              "Examining Airflow commands",
              "Airflow DAGs",
              "Defining a simple DAG",
              "Working with DAGs and the Airflow shell",
              "Troubleshooting DAG creation",
              "Airflow web interface",
              "Starting the Airflow webserver",
              "Navigating the Airflow UI",
              "Examining DAGs with the Airflow UI"
           ]
        },
        {
           "title":"\n          Implementing Airflow DAGs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn the basics of implementing Airflow DAGs using operators, tasks, and scheduling.\n  ",
           "parts":[
              "Airflow operators",
              "Defining a BashOperator task",
              "Multiple BashOperators",
              "Airflow tasks",
              "Define order of BashOperators",
              "Determining the order of tasks",
              "Troubleshooting DAG dependencies",
              "Additional operators",
              "Using the PythonOperator",
              "More PythonOperators",
              "EmailOperator and dependencies",
              "Airflow scheduling",
              "Schedule a DAG via Python",
              "Deciphering Airflow schedules",
              "Troubleshooting DAG runs"
           ]
        },
        {
           "title":"\n          Maintaining and monitoring Airflow workflows\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn more about Airflow components such as sensors and executors while monitoring and troubleshooting Airflow workflows.\n  ",
           "parts":[
              "Airflow sensors",
              "Sensors vs operators",
              "Sensory deprivation",
              "Airflow executors",
              "Determining the executor",
              "Executor implications",
              "Debugging and troubleshooting in Airflow",
              "DAGs in the bag",
              "Missing DAG",
              "SLAs and reporting in Airflow",
              "Defining an SLA",
              "Defining a task SLA",
              "Generate and email a report",
              "Adding status emails"
           ]
        },
        {
           "title":"\n          Building production pipelines in Airflow\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Use what you've learned to build a production quality workflow in Airflow.\n  ",
           "parts":[
              "Working with templates",
              "Creating a templated BashOperator",
              "Templates with multiple arguments",
              "More templates",
              "Using lists with templates",
              "Understanding parameter options",
              "Sending templated emails",
              "Branching",
              "Define a BranchPythonOperator",
              "Branch troubleshooting",
              "Creating a production pipeline",
              "Creating a production pipeline #1",
              "Creating a production pipeline #2",
              "Adding the final changes to your pipeline",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python",
        "Introduction to Shell"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Pandas Joins for Spreadsheet Users",
     "description":"Learn how to effectively and efficiently join datasets in tabular format using the Python Pandas library.",
     "detailDescription":"Joining two or more datasets is necessary for almost any real-world analysis. You’ve done it before with spreadsheets using VLOOKUP and related functions. Can you build on this experience as you transition to the world of Python? Yes! In this course you will learn the ins and outs of bringing datasets together with pandas, Python’s gold standard for manipulating tabular data. You’ll apply pandas functions to combine data from the National Football League (NFL) framed in a familiar spreadsheet environment. Armed with these skills you will be able to harness the power of pandas and integrate larger, more complex datasets into any analysis.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to joining data\n        ",
           "index":"1",
           "description":"\n    In this chapter, we'll build a foundation for using pandas to join data. You'll learn about the types of joins and how pandas can improve your effectiveness and productivity.\n  ",
           "parts":[
              "Joining data: a real-world necessity",
              "The need for joining data",
              "Working with split data",
              "Working with complementary data",
              "Concatenation",
              "Concatenating rows",
              "Concatenating rows with duplicated indexes",
              "Concatenating columns",
              "Power and flexibility",
              "Advantages of pandas joins",
              "Simple coding for complex merges"
           ]
        },
        {
           "title":"\n          VLOOKUP-style joins\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to use pandas for joining data in a way similar to using VLOOKUP formulas in a spreadsheet. You'll learn about three types of joins and then focus on the first type, one-to-one joins.\n  ",
           "parts":[
              "Types of joins",
              "One-to-one joins",
              "One-to-many joins",
              "Many-to-many joins",
              "A closer look at one-to-one joins",
              "Unscrambling the framework.",
              "Replicating VLOOKUP",
              "Merging on two or more keys",
              "Combining common data with inner joins",
              "Object-oriented merges",
              "Basic inner joins",
              "Dealing with different names",
              "Choosing the correct join method"
           ]
        },
        {
           "title":"\n          One-to-many joins\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we'll focus on one-to-many relationships. You'll practice identifying the relationship of key columns and joining data frames by column. You'll also learn how to join two or more data frames based on their indices.\n  ",
           "parts":[
              "\"Out of many, one\"",
              "Framework part 2: one-to-many merges",
              "Identifying one-to-many relationships",
              "Joining on key columns",
              "Checking for duplicate keys",
              "Completing a one-to-many merge",
              "Index-based joins",
              "Joining on index",
              "Joining multiple tables",
              "Reviewing the one-to-many join"
           ]
        },
        {
           "title":"\n          Advanced joins\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter, you'll learn advanced joining techniques to use when faced with challenging data. You'll be presented with a challenge of your own in the form of a case study that tests your skills.\n  ",
           "parts":[
              "Joining data in real life",
              "Mixing indexes and columns",
              "Suffixes and indicators",
              "Working with time data",
              "Combining time series",
              "Matching to the nearest time",
              "Recap and case study",
              "Case study challenge - part 1",
              "Case study challenge - part 2",
              "Case study challenge - part 3"
           ]
        }
     ],
     "prerequistes":[
        "Python for Spreadsheet Users"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Credit Risk Modeling in Python",
     "description":"Learn how to prepare credit application data, apply machine learning and business rules to reduce risk and ensure profitability.",
     "detailDescription":"If you've ever applied for a credit card or loan, you know that financial firms process your information before making a decision. This is because giving you a loan can have a serious financial impact on their business. But how do they make a decision? In this course, you will learn how to prepare credit application data. After that, you will apply machine learning and business rules to reduce risk and ensure profitability. You will use two data sets that emulate real credit applications while focusing on business value. Join me and learn the expected value of credit risk modeling!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploring and Preparing Loan Data\n        ",
           "index":"1",
           "description":"\n    In this first chapter, we will discuss the concept of credit risk and define how it is calculated.  Using cross tables and plots, we will explore a real-world data set.  Before applying machine learning, we will process this data by finding and resolving problems.\n  ",
           "parts":[
              "Understanding credit risk",
              "Explore the credit data",
              "Crosstab and pivot tables",
              "Outliers in credit data",
              "Finding outliers with cross tables",
              "Visualizing credit outliers",
              "Risk with missing data in loan data",
              "Replacing missing credit data",
              "Removing missing data",
              "Missing data intuition"
           ]
        },
        {
           "title":"\n          Logistic Regression for Defaults\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    With the loan data fully prepared, we will discuss the logistic regression model which is a standard in risk modeling.  We will understand the components of this model as well as how to score its performance.   Once we've created predictions, we can explore the financial impact of utilizing this model.\n  ",
           "parts":[
              "Logistic regression for probability of default",
              "Logistic regression basics",
              "Multivariate logistic regression",
              "Creating training and test sets",
              "Predicting the probability of default",
              "Changing coefficients",
              "One-hot encoding credit data",
              "Predicting probability of default",
              "Credit model performance",
              "Default classification reporting",
              "Selecting report metrics",
              "Visually scoring credit models",
              "Model discrimination and impact",
              "Thresholds and confusion matrices",
              "How thresholds affect performance",
              "Threshold selection"
           ]
        },
        {
           "title":"\n          Gradient Boosted Trees Using XGBoost\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Decision trees are another standard credit risk model.  We will go beyond decision trees by using the trendy XGBoost package in Python to create gradient boosted trees.  After developing sophisticated models, we will stress test their performance and discuss column selection in unbalanced data.\n  ",
           "parts":[
              "Gradient boosted trees with XGBoost",
              "Trees for defaults",
              "Gradient boosted portfolio performance",
              "Assessing gradient boosted trees",
              "Column selection for credit risk",
              "Column importance and default prediction",
              "Visualizing column importance",
              "Column selection and model performance",
              "Cross validation for credit models",
              "Cross validating credit models",
              "Limits to cross-validation testing",
              "Cross-validation scoring",
              "Class imbalance in loan data",
              "Undersampling training data",
              "Undersampled tree performance",
              "Undersampling intuition"
           ]
        },
        {
           "title":"\n          Model Evaluation and Implementation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    After developing and testing two powerful machine learning models, we use key performance metrics to compare them.  Using advanced model selection techniques specifically for financial modeling, we will select one model.  With that model, we will: develop a business strategy, estimate portfolio value, and minimize expected loss.\n  ",
           "parts":[
              "Model evaluation and implementation",
              "Comparing model reports",
              "Comparing with ROCs",
              "Calibration curves",
              "Credit acceptance rates",
              "Acceptance rates",
              "Visualizing quantiles of acceptance",
              "Bad rates",
              "Acceptance rate impact",
              "Credit strategy and minimum expected loss",
              "Making the strategy table",
              "Visualizing the strategy",
              "Estimated value profiling",
              "Total expected loss",
              "Course wrap up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python for Finance",
        "Intermediate Python"
     ],
     "tracks":[
        "Applied Finance in Python"
     ]
  },
  {
     "title":"Natural Language Generation in Python",
     "description":"Imitate Shakespear, translate language and autocomplete sentences using Deep Learning in Python.",
     "detailDescription":"Have you ever wondered how Gmail autocompletes your sentences, or, what powers the WhatsApp suggestions when you’re typing a message? The technology behind these helpful writing hints is machine learning. In this course, you'll build and train machine learning models for different natural language generation tasks. For example, you'll train a model on the literary works of Shakespeare and generate text in the style of his writing. You'll also learn how to create a neural translation model to translate English sentences into French. Finally, you'll train a seq2seq model to generate your own natural language autocomplete sentences, just like Gmail!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to sequential data\n        ",
           "index":"1",
           "description":"\n    The order of words in sentences is important (unless Yoda you are called). That’s why in this chapter, you’ll learn how to represent your data sequentially and use neural network architecture to model your text data. You'll learn how to create and train a recurrent network to generate new text, character by character. You'll also use the names dataset to build your own baby name generator, using a very simple recurrent neural network and the Keras package. \n  ",
           "parts":[
              "Handling sequential data",
              "Preprocess names dataset",
              "Preprocessing names dataset (cont'd)",
              "Introduction to recurrent neural network",
              "Create input and target tensors",
              "Initialize input and target vectors with values",
              "Build and compile RNN network",
              "Inference using recurrent neural network",
              "Train RNN model and start predictions",
              "Generate baby names"
           ]
        },
        {
           "title":"\n          Write like Shakespeare\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll find out how to overcome the limitations of recurrent neural networks when input sequences span long intervals. To avoid vanishing and exploding gradient problems you'll be introduced to long short term memory (LSTM) networks that are more effective when working with long-term dependencies. You'll work on a fun project where you'll build and train a simple LSTM model using selected literary works of Shakespeare to generate new text in the unique writing style of Shakespeare.\n\n  ",
           "parts":[
              "Limitations of recurrent neural networks",
              "Vanishing and exploding gradients",
              "Simple network using Keras",
              "Vanishing gradients",
              "Introduction to long short term memory",
              "Vocabulary and character to integer mapping",
              "Input and target dataset",
              "Create and initialize the input and target vectors",
              "Create LSTM model in keras",
              "Inference using long short term memory",
              "Train LSTM model",
              "Predict next character given a sequence",
              "Generate text imitating Shakespeare"
           ]
        },
        {
           "title":"\n          Translate words to a different language\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn about the encoder-decoder architecture and how it can be used to model sequence-to-sequence datasets, converting information from one domain to another domain. You'll use this knowledge to build a model for neural machine translation, training your model to translate English sentences into French. \n  ",
           "parts":[
              "Introduction to sequence to sequence models",
              "Create the eng-fra the dataset",
              "Getting the vocabularies",
              "Mapping characters to integers and vice-versa",
              "Neural machine translation",
              "Define the input and target vectors",
              "Initialize the input and target vectors",
              "Building the encoder and the decoder",
              "Train the encoder decoder network",
              "Inference model for encoder and decoder",
              "Build inference models for encoder and decoder",
              "Predict the first character",
              "Predict the second character",
              "Generate a fully translated sentence"
           ]
        },
        {
           "title":"\n          Autocomplete your sentences\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll build your very own machine learning seq2seq model.  You'll use real-world messages from the Enron email dataset to train an encoder-decoder model. Using this you’ll predict the correct ending for an incomplete input sentence.\n  ",
           "parts":[
              "Convert email data to seq2seq",
              "Divide the sentences into prefixes and suffixes",
              "Create the vocabulary and the mappings",
              "Define the input and target vectors",
              "Initialize the input and target vectors",
              "Sentence autocompletion using Encoder-Decoder",
              "Building the encoder",
              "Building the decoder",
              "Train the encoder and decoder",
              "Autocomplete sentences using inference models",
              "Building the inference models",
              "Predict the first character using inference models",
              "Predict the second character",
              "Autocomplete sentences",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Natural Language Processing in Python",
        "Advanced Deep Learning with Keras"
     ],
     "tracks":[
        "Deep Learning for NLP in Python"
     ]
  },
  {
     "title":"Introduction to Data Engineering",
     "description":"Learn about the world of data engineering with an overview of all its relevant topics and tools!",
     "detailDescription":"Have you heard people talk about data engineers and wonder what it is they do? Do you know what data engineers do but you're not sure how to become one yourself? This course is the perfect introduction. It touches upon all things you need to know to streamline your data processing. This introductory course will give you enough context to start exploring the world of data engineering. It's perfect for people who work at a company with several data sources and don't have a clear idea of how to use all those data sources in a scalable way. Be the first one to introduce these techniques to your company and become the company star employee.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Data Engineering\n        ",
           "index":"1",
           "description":"\n    In this first chapter, you will be exposed to the world of data engineering! Explore the differences between a data engineer and a data scientist, get an overview of the various tools data engineers use and expand your understanding of how cloud technology plays a role in data engineering. \n  ",
           "parts":[
              "What is data engineering?",
              "Tasks of the data engineer",
              "Data engineer or data scientist?",
              "Data engineering problems",
              "Tools of the data engineer",
              "Kinds of databases",
              "Processing tasks",
              "Scheduling tools",
              "Cloud providers",
              "Why cloud computing?",
              "Big players in cloud computing",
              "Cloud services"
           ]
        },
        {
           "title":"\n          Data engineering toolbox\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you know the primary differences between a data engineer and a data scientist, get ready to explore the data engineer's toolbox! Learn in detail about different types of databases data engineers use, how parallel computing is a cornerstone of the data engineer's toolkit, and how to schedule data processing jobs using scheduling frameworks.\n  ",
           "parts":[
              "Databases",
              "SQL vs NoSQL",
              "The database schema",
              "Joining on relations",
              "Star schema diagram",
              "What is parallel computing",
              "Why parallel computing?",
              "From task to subtasks",
              "Using a DataFrame",
              "Parallel computation frameworks",
              "Spark, Hadoop and Hive",
              "A PySpark groupby",
              "Running PySpark files",
              "Workflow scheduling frameworks",
              "Airflow, Luigi and cron",
              "Airflow DAGs"
           ]
        },
        {
           "title":"\n          Extract, Transform and Load (ETL)\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Having been exposed to the toolbox of data engineers, it's now time to jump into the bread and butter of a data engineer's workflow! With ETL, you will learn how to extract raw data from various sources, transform this raw data into actionable insights, and load it into relevant databases ready for consumption! \n  ",
           "parts":[
              "Extract",
              "Data sources",
              "Fetch from an API",
              "Read from a database",
              "Transform",
              "Splitting the rental rate",
              "Prepare for transformations",
              "Joining with ratings",
              "Loading",
              "OLAP or OLTP",
              "Writing to a file",
              "Load into Postgres",
              "Putting it all together",
              "Defining a DAG",
              "Setting up Airflow",
              "Interpreting the DAG"
           ]
        },
        {
           "title":"\n          Case Study: DataCamp\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Cap off all that you've learned in the previous three chapters by completing a real-world data engineering use case from DataCamp! You will perform and schedule an ETL process that transforms raw course rating data, into actionable course recommendations for DataCamp students! \n  ",
           "parts":[
              "Course ratings",
              "Exploring the schema",
              "Querying the table",
              "Average rating per course",
              "From ratings to recommendations",
              "Filter out corrupt data",
              "Using the recommender transformation",
              "Scheduling daily jobs",
              "The target table",
              "Defining the DAG",
              "Enable the DAG",
              "Querying the recommendations",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python",
        "Intermediate Python",
        "Introduction to SQL"
     ],
     "tracks":[
        "Data Engineer with Python"
     ]
  },
  {
     "title":"Machine Learning for Marketing in Python",
     "description":"From customer lifetime value, predicting churn to segmentation - learn and implement Machine Learning use cases for Marketing in Python.",
     "detailDescription":"The rise of machine learning (almost sounds like \"rise of the machines\"?) and applications of statistical methods to marketing have changed the field forever. Machine learning is being used to optimize customer journeys which maximize their satisfaction and lifetime value. This course will give you the foundational tools which you can immediately apply to improve your company’s marketing strategy. You will learn how to use different techniques to predict customer churn and interpret its drivers, measure, and forecast customer lifetime value, and finally, build customer segments based on their product purchase patterns. You will use customer data from a telecom company to predict churn, construct a recency-frequency-monetary dataset from an online retailer for customer lifetime value prediction, and build customer segments from product purchase data from a grocery shop.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Machine learning for marketing basics\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will explore the basics of machine learning methods used in marketing. You will learn about different types of machine learning, data preparation steps, and will run several end to end models to understand their power.\n  ",
           "parts":[
              "Why use ML for marketing? Strategies and use cases",
              "Identify supervised learning examples",
              "Supervised vs. unsupervised learning",
              "Preparation for modeling",
              "Investigate the data",
              "Separate numerical and categorical columns",
              "Encode categorical and scale numerical variables",
              "ML modeling steps",
              "Split data to training and testing",
              "Fit a decision tree",
              "Predict churn with decision tree"
           ]
        },
        {
           "title":"\n          Churn prediction and drivers\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn churn prediction fundamentals, then fit logistic regression and decision tree models to predict churn. Finally, you will explore the results and extract insights on what are the drivers of the churn.\n  ",
           "parts":[
              "Churn prediction fundamentals",
              "Explore churn rate and split data",
              "Separate features and target variable",
              "Predict  churn with logistic regression",
              "Fit logistic regression model",
              "Fit logistic regression with L1 regularization",
              "Identify optimal L1 penalty coefficient",
              "Predict churn with decision trees",
              "Fit decision tree model",
              "Identify optimal tree depth",
              "Identify and interpret churn drivers",
              "Explore logistic regression coefficients",
              "Break down decision tree rules"
           ]
        },
        {
           "title":"\n          Customer Lifetime Value (CLV) prediction\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn the basics of Customer Lifetime Value (CLV) and its different calculation methodologies. You will harness this knowledge to build customer level purchase features to predict next month's transactions using linear regression.\n  ",
           "parts":[
              "Customer Lifetime Value (CLV) basics",
              "Build retention and churn tables",
              "Explore retention and churn",
              "Calculating and projecting CLV",
              "Calculate basic CLV",
              "Calculate granular CLV",
              "Calculate traditional CLV",
              "Data preparation for purchase prediction",
              "Build features",
              "Define target variable",
              "Split data to training and testing",
              "Predicting customer transactions",
              "Predict next month transactions",
              "Measure model fit",
              "Explore model coefficients"
           ]
        },
        {
           "title":"\n          Customer segmentation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This final chapter dives into customer segmentation based on product purchase history. You will explore two different models that provide insights into purchasing patterns of customers and group them into well separated and interpretable customer segments.\n  ",
           "parts":[
              "Customer and product segmentation basics",
              "Explore customer product purchase dataset",
              "Understand differences in variables",
              "Data preparation for segmentation",
              "Unskew the variables",
              "Normalize the variables",
              "Build customer and product segmentation",
              "Determine the optimal number of clusters",
              "Build segmentation with k-means clustering",
              "Alternative segmentation with NMF",
              "Visualize and interpret segmentation solutions",
              "K-means segmentation averages",
              "NMF segmentation averages",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Manipulating DataFrames with pandas",
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Marketing Analytics with Python"
     ]
  },
  {
     "title":"Intermediate Python for Finance",
     "description":"Build on top of your Python skills for Finance, by learning how to use datetime, if-statements, DataFrames, and more.",
     "detailDescription":"Are you a financial or business analyst, or simply looking for an easier way to manage your stock portfolio? If so learning Python can automate financial tasks such as calculating risk, mapping market health, and visualizing a stock's price trends, saving you time and money. In this course, you’ll learn how to use Python data structures, execution control statements, and DataFrames to manipulate financial data. You will then work with pandas, using data from the Federal Reserve Bank, to explore national economic trends—an essential part of understanding investment strategies. You will also calculate risk based on stock price data, and display this data in easy to read plots. By the end of this course, you’ll be the new Python of Wall Street.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Datetimes and Dictionaries \n        ",
           "index":"1",
           "description":"\n    In this chapter, you’ll learn how to create and manipulate Python datetime objects to help you identify key financial events, such as Black Friday. You’ll also learn how to store and efficiently look up items using Python dictionaries. \n  ",
           "parts":[
              "Representing time with datetimes",
              "Creating datetimes for dates",
              "Datetimes from strings",
              "Converting format with datetimes",
              "Working with datetimes",
              "Accessing datetime attributes",
              "Comparing datetimes",
              "Making relative datetimes",
              "Dictionaries",
              "Creating and accessing dictionaries",
              "Accessing safely and deleting"
           ]
        },
        {
           "title":"\n          Control Flow and Logic\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Through hands-on activities, you’ll discover how to use boolean logic to determine truth and use comparison and equality operators to control execution in if-statements and loops.\n  ",
           "parts":[
              "Comparison operators",
              "Equality across types",
              "Assignment and equality",
              "Comparing dividends",
              "Boolean operators",
              "Decisions with boolean operations",
              "Assigning variables with boolean operators",
              "Negating with boolean operators",
              "If statements",
              "Control statements",
              "Comparing sales and purchases",
              "Branching with elif and else",
              "For and while loops",
              "Breaking out of a for loop",
              "Controlling loop execution"
           ]
        },
        {
           "title":"\n          Pandas Dataframe\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Discover how to create and access DataFrames with pandas using financial data from other data structures, including Dicts, lists, and CSV files. You’ll then uncover additional insights, as you aggregate data across rows or columns, calculate averages, and extend your data using functions.\n  ",
           "parts":[
              "Creating a DataFrame",
              "Creating DataFrames",
              "Reading market history",
              "Accessing Data",
              "Accessing using names",
              "Accessing using indexes",
              "Aggregating and summarizing",
              "Mean prices",
              "Median prices",
              "Extending and manipulating data",
              "Creating new columns",
              "Dropping columns from DataFrame",
              "Manipulating data with Pandas"
           ]
        },
        {
           "title":"\n          Working with NASDAQ Stock Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you’ll try your hand at working with real-world NASDAQ stock data as you learn how to interpret new data, create masks to filter data, and visualize your findings with plots.\n  ",
           "parts":[
              "Peeking at data with head, tail, and describe",
              "Why use describe",
              "Peek at top and bottom",
              "Describing data",
              "Filtering data",
              "Why filter data",
              "Filtering stock data.",
              "Selecting data from data range.",
              "Plotting data",
              "Identifying plot type",
              "Making a line plot",
              "Choose kind of plot",
              "Wrapping up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Python for Finance"
     ],
     "tracks":[
        "Finance Fundamentals in Python"
     ]
  },
  {
     "title":"Joining Data with pandas",
     "description":"Learn to combine data from multiple tables by joining data together using pandas.",
     "detailDescription":"Being able to combine and work with multiple datasets is an essential skill for any aspiring Data Scientist. Pandas is a crucial cornerstone of the Python data science ecosystem, with Stack Overflow recording 5 million views for pandas questions. Learn to handle multiple DataFrames by combining, organizing, joining, and reshaping them using pandas. You'll work with datasets from the World Bank and the City Of Chicago. You will finish the course with a solid skillset for data-joining in pandas.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Data Merging Basics\n        ",
           "index":"1",
           "description":"\n    Learn how you can merge disparate data using inner joins. By combining information from multiple sources you’ll uncover compelling insights that may have previously been hidden. You’ll also learn how the relationship between those sources, such as one-to-one or one-to-many, can affect your result. \n  ",
           "parts":[
              "Inner join",
              "What column to merge on?",
              "Your first inner join",
              "Inner joins and number of rows returned",
              "One-to-many relationships",
              "One-to-many classification",
              "One-to-many merge",
              "Merging multiple DataFrames",
              "Total riders in a month",
              "Three table merge",
              "One-to-many merge with multiple tables"
           ]
        },
        {
           "title":"\n          Merging Tables With Different Join Types\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Take your knowledge of joins to the next level. In this chapter, you’ll work with TMDb movie data as you learn about left, right, and outer joins. You’ll also discover how to merge a table to itself and merge on a DataFrame index. \n  ",
           "parts":[
              "Left join",
              "Counting missing rows with left join",
              "Enriching a dataset",
              "How many rows with a left join?",
              "Other joins",
              "Right join to find unique movies",
              "Popular genres with right join",
              "Using outer join to select actors",
              "Merging a table to itself",
              "Self join",
              "How does pandas handle self joins?",
              "Merging on indexes",
              "Index merge for movie ratings",
              "Do sequels earn more?"
           ]
        },
        {
           "title":"\n           Advanced Merging and Concatenating\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll leverage powerful filtering techniques, including semi-joins and anti-joins. You’ll also learn how to glue DataFrames by vertically combining and using the pandas.concat function to create new datasets. Finally, because data is rarely clean, you’ll also learn how to validate your newly combined data structures.\n  ",
           "parts":[
              "Filtering joins",
              "Steps of a semi-join",
              "Performing an anti-join",
              "Performing a semi-join",
              "Concatenate DataFrames together vertically",
              "Concatenation basics",
              "Concatenating with keys",
              "Using the append method",
              "Verifying integrity",
              "Validating a merge",
              "Concatenate and merge to find common songs"
           ]
        },
        {
           "title":"\n          Merging Ordered and Time-Series Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you’ll step up a gear and learn to apply pandas' specialized methods for merging time-series and ordered data together with real-world financial and economic data from the city of Chicago. You’ll also learn how to query resulting tables using a SQL-style format, and unpivot data using the melt method.\n  ",
           "parts":[
              "Using merge_ordered()",
              "Correlation between GDP and S&P500",
              "Phillips curve using merge_ordered()",
              "merge_ordered() caution, multiple columns",
              "Using merge_asof()",
              "Using merge_asof() to study stocks",
              "Using merge_asof() to create dataset",
              "merge_asof() and merge_ordered() differences",
              "Selecting data with .query()",
              "Explore financials with .query()",
              "Subsetting rows with .query()",
              "Reshaping data with .melt()",
              "Select the right .melt() arguments",
              "Using .melt() to reshape government data",
              "Using .melt() for stocks vs bond performance",
              "Course wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Quantitative Risk Management in Python",
     "description":"Learn about risk management, value at risk and more applied to the 2008 financial crisis using Python.",
     "detailDescription":"Managing risk using Quantitative Risk Management is a vital task across the banking, insurance, and asset management industries. It’s essential that financial risk analysts, regulators, and actuaries can quantitatively balance rewards against their exposure to risk. This course introduces you to financial portfolio risk management through an examination of the 2007—2008 financial crisis and its effect on investment banks such as Goldman Sachs and J.P. Morgan. You’ll learn how to use Python to calculate and mitigate risk exposure using the Value at Risk and Conditional Value at Risk measures, estimate risk with techniques like Monte Carlo simulation, and use cutting-edge technologies such as neural networks to conduct real time portfolio rebalancing.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Risk and return recap\n        ",
           "index":"1",
           "description":"\n    Risk management begins with an understanding of risk and return. We’ll recap how risk and return are related to each other, identify risk factors, and use them to re-acquaint ourselves with Modern Portfolio Theory applied to the global financial crisis of 2007-2008.\n  ",
           "parts":[
              "Welcome!",
              "Portfolio returns during the crisis",
              "Asset covariance and portfolio volatility",
              "Risk factors and the financial crisis",
              "Frequency resampling primer",
              "Visualizing risk factor correlation",
              "Least-squares factor model",
              "Modern portfolio theory",
              "Practice with PyPortfolioOpt: returns",
              "Practice with PyPortfolioOpt: covariance",
              "Breaking down the financial crisis",
              "The efficient frontier and the financial crisis"
           ]
        },
        {
           "title":"\n          Goal-oriented risk management\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now it’s time to expand your portfolio optimization toolkit with risk measures such as Value at Risk (VaR) and Conditional Value at Risk (CVaR). To do this you will use specialized Python libraries including pandas, scipy, and pypfopt. You’ll also learn how to mitigate risk exposure using the Black-Scholes model to hedge an options portfolio.\n  ",
           "parts":[
              "Measuring Risk",
              "VaR for the Normal distribution",
              "Comparing CVaR and VaR",
              "Which risk measure is \"better\"?",
              "Risk exposure and loss",
              "What's your risk appetite?",
              "VaR and risk exposure",
              "CVaR and risk exposure",
              "Risk management using VaR & CVaR",
              "VaR from a fitted distribution",
              "Minimizing CVaR",
              "CVaR risk management and the crisis",
              "Portfolio hedging: offsetting risk",
              "Black-Scholes options pricing",
              "Options pricing and the underlying asset",
              "Using options for hedging"
           ]
        },
        {
           "title":"\n          Estimating and identifying risk\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll estimate risk measures using parametric estimation and historical real-world data. You'll then discover how Monte Carlo simulation can help you predict uncertainty. Lastly, you’ll learn how the global financial crisis signaled that randomness itself was changing, by understanding structural breaks and how to identify them. \n\n  ",
           "parts":[
              "Parametric Estimation",
              "Parameter estimation: Normal",
              "Parameter estimation: Skewed Normal",
              "Historical and Monte Carlo Simulation",
              "Historical Simulation",
              "Monte Carlo Simulation",
              "Structural breaks",
              "Crisis structural break: I",
              "Crisis structural break: II",
              "Crisis structural break: III",
              "Volatility and extreme values",
              "Volatility and structural breaks",
              "Extreme values and backtesting"
           ]
        },
        {
           "title":"\n          Advanced risk management\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It's time to explore more general risk management tools. These advanced techniques are pivotal when attempting to understand extreme events, such as losses incurred during the financial crisis, and complicated loss distributions which may defy traditional estimation techniques. You’ll also discover how neural networks can be implemented to approximate loss distributions and conduct real-time portfolio optimization.\n\n  ",
           "parts":[
              "Extreme value theory",
              "Block maxima",
              "Extreme events during the crisis",
              "GEV risk estimation",
              "Kernel density estimation",
              "KDE of a loss distribution",
              "Which distribution?",
              "CVaR and loss cover selection",
              "Neural network risk management",
              "Single layer neural networks",
              "Asset price prediction",
              "Real-time risk management",
              "Wrap-up and Future Steps"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Portfolio Analysis in Python"
     ],
     "tracks":[
        "Applied Finance in Python"
     ]
  },
  {
     "title":"GARCH Models in Python",
     "description":"Learn about GARCH Models, how to implement them and calibrate them on financial data from stocks to foreign exchange.",
     "detailDescription":"Volatility is an essential concept in finance, which is why GARCH models in Python are a popular choice for forecasting changes in variance, specifically when working with time-series data that are time-dependant. This course will show you how and when to implement GARCH models, how to specify model assumptions, and how to make volatility forecasts and evaluate model performance. Using real-world data, including historical Tesla stock prices, you’ll gain hands-on experience of how to better quantify portfolio risks, through calculations of Value-at-Risk, covariance, and stock Beta. You’ll also apply what you’ve learned to a wide range of assets, including stocks, indices, cryptocurrencies, and foreign exchange, preparing you to go forth and use GARCH models.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          GARCH Model Fundamentals\n        ",
           "index":"1",
           "description":"\n    What are GARCH models, what are they used for, and how can you implement them in Python? After completing this first chapter you’ll be able to confidently answer all these questions.\n\n  ",
           "parts":[
              "Why do we need GARCH models",
              "Understand volatility",
              "Observe volatility clustering",
              "Calculate volatility",
              "What are ARCH and GARCH",
              "Review GARCH model basics",
              "Simulate ARCH and GARCH series",
              "Observe the impact of model parameters",
              "How to implement GARCH models in Python",
              "Review \"arch\" documentation",
              "Implement a  basic GARCH model",
              "Make forecast with GARCH models"
           ]
        },
        {
           "title":"\n          GARCH Model Configuration\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    A normal GARCH model is not representative of the real financial data, whose distributions frequently exhibit fat tails, skewness, and asymmetric shocks. In this chapter, you’ll learn how to define better GARCH models with more realistic assumptions. You’ll also learn how to make more sophisticated volatility forecasts with rolling window approaches.\n  ",
           "parts":[
              "Distribution assumptions",
              "Fat tails and skewness",
              "Plot distribution of standardized residuals",
              "Fit a GARCH with skewed t-distribution",
              "Mean model specifications",
              "Check mean model assumptions",
              "Effect of mean model on volatility predictions",
              "Volatility models for asymmetric shocks",
              "Modeling of asymmetric responses of volatility",
              "Fit GARCH models to cryptocurrency",
              "Compare GJR-GARCH with EGARCH",
              "GARCH rolling window forecast",
              "Why use rolling window forecast",
              "Fixed rolling window forecast",
              "Compare forecast results"
           ]
        },
        {
           "title":"\n          Model Performance Evaluation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces you to the KISS principle of data science modeling. You’ll learn how to use p-values and t-statistics to simplify model configuration, use ACF plot, Ljung-Box test to verify model assumptions and use likelihood and information criteria for model selection.\n  ",
           "parts":[
              "Significance testing of model parameters",
              "Keep it simple stupid",
              "Simplify the model with p-values",
              "Simplify the model with t-statistics",
              "Validation of GARCH model assumptions",
              "Detect autocorrelations",
              "ACF plot",
              "Ljung-Box test",
              "Goodness of fit measures",
              "Goodness of fit basics",
              "Pick a winner based on log-likelihood",
              "Pick a winner based on AIC/BIC",
              "GARCH model backtesting",
              "Backtesting basics",
              "Backtesting with MAE, MSE"
           ]
        },
        {
           "title":"\n          GARCH in Action\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you’ll learn how to apply the GARCH models you’ve previously learned to practical financial world scenarios. You’ll develop your skills as you become more familiar with VaR in risk management, dynamic covariance in asset allocation, and dynamic Beta in portfolio management.\n  ",
           "parts":[
              "VaR in financial risk management",
              "VaR concept",
              "Compute parametric VaR",
              "Compute empirical  VaR",
              "Dynamic covariance in portfolio optimization",
              "Covariance concept",
              "Compute GARCH covariance",
              "Compute dynamic portfolio variance",
              "Dynamic Beta in portfolio management",
              "Beta concept",
              "Compute dynamic stock Beta",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Time Series Analysis in Python"
     ],
     "tracks":[
        "Applied Finance in Python"
     ]
  },
  {
     "title":"Object-Oriented Programming in Python",
     "description":"Dive in and learn how to create classes and leverage inheritance and polymorphism to reuse and optimize code.",
     "detailDescription":"Object-oriented programming (OOP) is a widely used programming paradigm that reduces development times—making it easier to read, reuse, and maintain your code. OOP shifts the focus from thinking about code as a sequence of actions to looking at your program as a collection of objects that interact with each other. In this course, you’ll learn how to create classes, which act as the blueprints for every object in Python. You’ll then leverage principles called inheritance and polymorphism to reuse and optimize code. Dive in and learn how to create beautiful code that’s clean and efficient!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          OOP Fundamentals\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn what object-oriented programming (OOP) is, how it differs from procedural-programming, and how it can be applied. You'll then define your own classes, and learn how to create methods, attributes, and constructors.\n  ",
           "parts":[
              "What is OOP?",
              "OOP termininology",
              "Exploring object interface",
              "Class anatomy: attributes and methods",
              "Understanding  class definitions",
              "Create your first class",
              "Using attributes in class definition",
              "Class anatomy: the __init__ constructor",
              "Correct use of __init__",
              "Add a class constructor",
              "Write a class from scratch"
           ]
        },
        {
           "title":"\n          Inheritance and Polymorphism\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Inheritance and polymorphism are the core concepts of OOP that enable efficient and consistent code reuse. Learn how to inherit from a class, customize and redefine methods, and review the differences between class-level data and instance-level data.\n  ",
           "parts":[
              "Instance and class data",
              "Class-level attributes",
              "Changing class attributes",
              "Alternative constructors",
              "Class inheritance",
              "Understanding inheritance",
              "Create a subclass",
              "Customizing functionality via inheritance",
              "Method inheritance",
              "Inheritance of class attributes",
              "Customizing a DataFrame"
           ]
        },
        {
           "title":"\n          Integrating with Standard Python\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to make sure that objects that store the same data are considered equal, how to define and customize string representations of objects, and even how to create new error types. Through interactive exercises, you’ll learn how to further customize your classes to make them work more like standard Python data types.\n  ",
           "parts":[
              "Operator overloading: comparison",
              "Overloading equality",
              "Checking class equality",
              "Comparison and inheritance",
              "Operator overloading: string representation",
              "String formatting review",
              "String representation of objects",
              "Exceptions",
              "Catching exceptions",
              "Custom exceptions",
              "Handling exception hierarchies"
           ]
        },
        {
           "title":"\n          Best Practices of Class Design\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    How do you design classes for inheritance? Does Python have private attributes? Is it possible to control attribute access? You'll find answers to these questions (and more) as you learn class design best practices.\n  ",
           "parts":[
              "Designing for inheritance and polymorphism",
              "Polymorphic methods",
              "Square and rectangle",
              "Managing data access: private attributes",
              "Attribute naming conventions",
              "Using internal attibutes",
              "Properties",
              "What do properties do?",
              "Create and set properties",
              "Read-only properties",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Writing Functions in Python"
     ],
     "tracks":[

     ]
  },
  {
     "title":"ARIMA Models in Python",
     "description":"Learn about ARIMA models in Python and become an expert in time series analysis.",
     "detailDescription":"Have you ever tried to predict the future? What lies ahead is a mystery which is usually only solved by waiting. In this course, you will stop waiting and learn to use the powerful ARIMA class models to forecast the future. You will learn how to use the statsmodels package to analyze time series, to build tailored models, and to forecast under uncertainty. How will the stock market move in the next 24 hours? How will the levels of CO2 change in the next decade? How many earthquakes will there be next year? You will learn to solve all these problems and more.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Chapter 1 - ARMA Models\n        ",
           "index":"1",
           "description":"\n    Dive straight in and learn about the most important properties of time series. You'll learn about stationarity and how this is important for ARMA models. You'll learn how to test for stationarity by eye and with a standard statistical test. Finally, you'll learn the basic structure of ARMA models and use this to generate some ARMA data and fit an ARMA model.\n  ",
           "parts":[
              "Intro to time series and stationarity",
              "Exploration",
              "Train-test splits",
              "Is it stationary",
              "Making time series stationary",
              "Augmented Dicky-Fuller",
              "Taking the difference",
              "Other tranforms",
              "Intro to AR, MA and ARMA models",
              "Model order",
              "Generating ARMA data",
              "Fitting Prelude"
           ]
        },
        {
           "title":"\n          Chapter 2 - Fitting the Future\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    What lies ahead in this chapter is you predicting what lies ahead in your data. You'll learn how to use the elegant statsmodels package to fit ARMA, ARIMA and ARMAX models.  Then you'll use your models to predict the uncertain future of stock prices!\n  ",
           "parts":[
              "Fitting time series models",
              "Fitting AR and MA models",
              "Fitting an ARMA model",
              "Fitting an ARMAX model",
              "Forecasting",
              "Generating one-step-ahead predictions",
              "Plotting one-step-ahead predictions",
              "Generating dynamic forecasts",
              "Plotting dynamic forecasts",
              "Intro to ARIMA models",
              "Differencing and fitting ARMA",
              "Unrolling ARMA forecast",
              "Fitting an ARIMA model",
              "Choosing ARIMA model"
           ]
        },
        {
           "title":"\n          Chapter 3 - The Best of the Best Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will become a modeler of discerning taste. You'll learn how to identify promising model orders from the data itself, then, once the most promising models have been trained, you'll learn how to choose the best model from this fitted selection. You'll also learn a great framework for structuring your time series projects.\n  ",
           "parts":[
              "Intro to ACF and PACF",
              "AR or MA",
              "Order of earthquakes",
              "Intro to AIC and BIC",
              "Searching over model order",
              "Choosing order with AIC and BIC",
              "AIC and BIC vs ACF and PACF",
              "Model diagnostics",
              "Mean absolute error",
              "Diagnostic summary statistics",
              "Plot diagnostics",
              "Box-Jenkins method",
              "Identification",
              "Identification II",
              "Estimation",
              "Diagnostics"
           ]
        },
        {
           "title":"\n          Chapter 4 - Seasonal ARIMA Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you'll learn how to use seasonal ARIMA models to fit more complex data. You'll learn how to decompose this data into seasonal and non-seasonal parts and then you'll get the chance to utilize all your ARIMA tools on one last global forecast challenge.\n  ",
           "parts":[
              "Seasonal time series",
              "Seasonal decompose",
              "Seasonal ACF and PACF",
              "SARIMA models",
              "Fitting SARIMA models",
              "Choosing SARIMA order",
              "SARIMA vs ARIMA forecasts",
              "Automation and saving",
              "Automated model selection",
              "Saving and updating models",
              "SARIMA and Box-Jenkins",
              "Multiplicative vs additive seasonality",
              "SARIMA model diagnostics",
              "SARIMA forecast",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Supervised Learning with scikit-learn"
     ],
     "tracks":[
        "Time Series with Python"
     ]
  },
  {
     "title":"Dealing with Missing Data in Python",
     "description":"Learn how to identify, analyze, remove and impute missing data in Python.",
     "detailDescription":"Tired of working with messy data? Did you know that most of a data scientist's time is spent in finding, cleaning and reorganizing data?! Well turns out you can clean your data in a smart way! In this course Dealing with Missing Data in Python, you'll do just that! You'll learn to address missing values for numerical, and categorical data as well as time-series data. You'll learn to see the patterns the missing data exhibits! While working with air quality and diabetes data, you'll also learn to analyze, impute and evaluate the effects of imputing the data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          The Problem With Missing Data\n        ",
           "index":"1",
           "description":"\n    Get familiar with missing data and how it impacts your analysis! Learn about different null value operations in your dataset, how to find missing data and summarizing missingness in your data. \n  ",
           "parts":[
              "Why deal with missing data?",
              "Steps for treating missing values",
              "Null value operations",
              "Finding Null values",
              "Handling missing values",
              "Detecting missing values",
              "Replacing missing values",
              "Replacing hidden missing values",
              "Analyze the amount of missingness",
              "Analyzing missingness percentage",
              "Visualize missingness"
           ]
        },
        {
           "title":"\n          Does Missingness Have A Pattern?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Analyzing the type of missingness in your dataset is a very important step towards treating missing values. In this chapter, you'll learn in detail how to establish patterns in your missing and non-missing data, and how to appropriately treat the missingness using simple techniques such as listwise deletion. \n  ",
           "parts":[
              "Is the data missing at random?",
              "Guess the missingness type",
              "Deduce MNAR",
              "Finding patterns in missing data",
              "Finding correlations in your data",
              "Identify the missingness type",
              "Visualizing missingness across a variable",
              "Fill dummy values",
              "Generate scatter plot with missingness",
              "When and how to delete missing data",
              "Delete MCAR",
              "Will you delete?"
           ]
        },
        {
           "title":"\n          Imputation Techniques\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Embark on the world of data imputation! In this chapter, you will apply basic imputation techniques to fill in missing data and visualize your imputations to be able to evaluate your imputations' performance. \n  ",
           "parts":[
              "Mean, median & mode imputations",
              "Mean & median imputation",
              "Mode and constant imputation",
              "Visualize imputations",
              "Imputing time-series data",
              "Filling missing time-series data",
              "Impute with interpolate method",
              "Visualizing time-series imputations",
              "Visualize forward fill imputation",
              "Visualize backward fill imputation",
              "Plot interpolations"
           ]
        },
        {
           "title":"\n          Advanced Imputation Techniques\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Finally, go beyond simple imputation techniques and make the most of your dataset by using advanced imputation techniques that rely on machine learning models, to be able to accurately impute and evaluate your missing data. You will be using methods such as KNN and MICE in order to get the most out of your missing data! \n  ",
           "parts":[
              "Imputing using fancyimpute",
              "KNN imputation",
              "MICE imputation",
              "Imputing categorical values",
              "Ordinal encoding of  a categorical column",
              "Ordinal encoding of  a DataFrame",
              "KNN imputation of categorical values",
              "Evaluation of different imputation techniques",
              "Analyze the summary of linear model",
              "Comparing R-squared and coefficients",
              "Comparing density plots",
              "Conclusion"
           ]
        }
     ],
     "prerequistes":[
        "pandas Foundations",
        "Supervised Learning with scikit-learn",
        "Introduction to Data Visualization with Matplotlib"
     ],
     "tracks":[
        "Python Toolbox"
     ]
  },
  {
     "title":"Recurrent Neural Networks for Language Modeling in Python",
     "description":"Use RNNs to classify text sentiment, generate sentences, and translate text between languages.",
     "detailDescription":"Machine Learning models are based on numerical values to make predictions/classification, but how can computers deal with text data? With the huge increase of available text data, applications such as automatic document classification, text generation, and neural machine translation became possible. In this course, you will learn how to use Recurrent Neural Networks to classify text (binary and multiclass), generate phrases simulating the character Sheldon from The Big Bang Theory TV Show, and translate Portuguese sentences into English. Are you ready to start your journey into Language Models using Keras and Python? Dive in!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Recurrent Neural Networks and Keras\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn the foundations of Recurrent Neural Networks (RNN). Starting with some prerequisites, continuing to understanding how information flows through the network and finally seeing how to implement such models with Keras in the sentiment classification task.\n  ",
           "parts":[
              "Introduction to the course",
              "Comparing the number of parameter of RNN and ANN",
              "Sentiment analysis",
              "Sequence to sequence models",
              "Introduction to language models",
              "Getting used to text data",
              "Preparing text data for model input",
              "Transforming new text",
              "Introduction to RNN inside Keras",
              "Keras models",
              "Keras preprocessing",
              "Your first RNN model"
           ]
        },
        {
           "title":"\n          RNN Architecture\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will learn about the vanishing and exploding gradient problems, often occurring in RNNs, and how to deal with them with the GRU and LSTM cells. \nFurthermore, you'll create embedding layers for language models and revisit the sentiment classification task.\n  ",
           "parts":[
              "Vanishing and exploding gradients",
              "Exploding gradient  problem",
              "Vanishing gradient problem",
              "GRU and LSTM cells",
              "GRU cells are better than simpleRNN",
              "Stacking RNN layers",
              "The Embedding layer",
              "Number of parameters comparison",
              "Transfer learning",
              "Embeddings improves performance",
              "Sentiment classification revisited",
              "Better sentiment classification",
              "Using the CNN layer"
           ]
        },
        {
           "title":"\n          Multi-class classification\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Next, in this chapter you will learn how to prepare data for the multi-class classification task, as well as the differences between multi-class classification and binary classification (sentiment analysis). Finally, you will learn how to create models and measure their performance with Keras.\n  ",
           "parts":[
              "Data pre-processing",
              "Prepare label vectors",
              "Pre-process data",
              "Transfer learning for language models",
              "Transfer learning starting point",
              "Word2Vec",
              "Multi-class classification models",
              "Exploring 20 News Groups dataset",
              "Classifying news articles",
              "Assessing the model's performance",
              "Precision-Recall trade-off",
              "Precision or Recall, that is the question",
              "Performance on multi-class classification"
           ]
        },
        {
           "title":"\n          Sequence to Sequence Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces you to two applications of RNN models: Text Generation and Neural Machine Translation.  You will learn how to prepare the text data to the format needed by the models.\nThe Text Generation model is used for replicating a character's way of speech and will have some fun mimicking Sheldon from The Big Bang Theory. \nNeural Machine Translation is used for example by Google Translate in a much more complex model. In this chapter, you will create a model that translates Portuguese small phrases into English.\n  ",
           "parts":[
              "Sequence to Sequence Models",
              "Text generation examples",
              "NMT example",
              "The Text Generating Function",
              "Predict next character",
              "Generate sentence with context",
              "Change the probability scale",
              "Text Generation Models",
              "Create vectors of sentences and next characters",
              "Preparing the data for training",
              "Creating the text generation model",
              "Neural Machine Translation",
              "Preparing the input text",
              "Preparing the output text",
              "Translate Portuguese to English",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Deep Learning in Python",
        "Introduction to Natural Language Processing in Python"
     ],
     "tracks":[
        "Deep Learning for NLP in Python"
     ]
  },
  {
     "title":"Introduction to Statistics in Python",
     "description":"Grow your statistical skills and learn how to collect, analyze, and draw accurate conclusions from data using Python.",
     "detailDescription":"Statistics is the study of how to collect, analyze, and draw conclusions from data. It’s a hugely valuable tool that you can use to bring the future into focus and infer the answer to tons of questions. For example, what is the likelihood of someone purchasing your product, how many calls will your support team receive, and how many jeans sizes should you manufacture to fit 95% of the population? In this course, you'll discover how to answer questions like these as you grow your statistical skills and learn how to calculate averages, use scatterplots to show the relationship between numeric values, and calculate correlation. You'll also tackle probability, the backbone of statistical reasoning, and learn how to use Python to conduct a well-designed study to draw your own conclusions from data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Summary Statistics\n        ",
           "index":"1",
           "description":"\n    Summary statistics gives you the tools you need to boil down massive datasets to reveal the highlights. In this chapter, you'll explore summary statistics including mean, median, and standard deviation, and learn how to accurately interpret them. You'll also develop your critical thinking skills, allowing you to choose the best summary statistics for your data.\n  ",
           "parts":[
              "What is statistics?",
              "Descriptive and inferential statistics",
              "Data type classification",
              "Measures of center",
              "Mean and median",
              "Mean vs. median",
              "Measures of spread",
              "Quartiles, quantiles, and quintiles",
              "Variance and standard deviation",
              "Finding outliers using IQR"
           ]
        },
        {
           "title":"\n          Random Numbers and Probability\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to generate random samples and measure chance using probability. You'll work with real-world sales data to calculate the probability of a salesperson being successful. Finally, you’ll use the binomial distribution to model events with binary outcomes.\n  ",
           "parts":[
              "What are the chances?",
              "With or without replacement?",
              "Calculating probabilities",
              "Sampling deals",
              "Discrete distributions",
              "Creating a probability distribution",
              "Identifying distributions",
              "Expected value vs. sample mean",
              "Continuous distributions",
              "Which distribution?",
              "Data back-ups",
              "Simulating wait times",
              "The binomial distribution",
              "Simulating sales deals",
              "Calculating binomial probabilities",
              "How many sales will be won?"
           ]
        },
        {
           "title":"\n          More Distributions and the Central Limit Theorem\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It’s time to explore one of the most important probability distributions in statistics, normal distribution. You’ll create histograms to plot normal distributions and gain an understanding of the central limit theorem, before expanding your knowledge of statistical functions by adding the Poisson, exponential, and t-distributions to your repertoire. \n  ",
           "parts":[
              "The normal distribution",
              "Distribution of Amir's sales",
              "Probabilities from the normal distribution",
              "Simulating sales under new market conditions",
              "Which market is better?",
              "The central limit theorem",
              "Visualizing sampling distributions",
              "The CLT in action",
              "The mean of means",
              "The Poisson distribution",
              "Identifying lambda",
              "Tracking lead responses",
              "More probability distributions",
              "Distribution dragging and dropping",
              "Modeling time between leads",
              "The t-distribution"
           ]
        },
        {
           "title":"\n          Correlation and Experimental Design\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to quantify the strength of a linear relationship between two variables, and explore how confounding variables can affect the relationship between two other variables. You'll also see how a study’s design can influence its results, change how the data should be analyzed, and potentially affect the reliability of your conclusions.\n  ",
           "parts":[
              "Correlation",
              "Guess the correlation",
              "Relationships between variables",
              "Correlation caveats",
              "What can't correlation measure?",
              "Transforming variables",
              "Does sugar improve happiness?",
              "Confounders",
              "Design of experiments",
              "Study types",
              "Longitudinal vs. cross-sectional studies",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Manipulation with pandas",
        "Intermediate Python"
     ],
     "tracks":[

     ]
  }
];

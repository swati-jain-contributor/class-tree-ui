// export const othercourses =[];
export const othercourses =[
  {"title":"Introduction to SQL","description":"Master the basics of querying tables in relational databases such as MySQL, SQL Server, and PostgreSQL.","detailDescription":"The role of a data scientist is to turn raw data into actionable insights. Much of the world's raw data—from electronic medical records to customer transaction histories—lives in organized collections of tables called relational databases. To be an effective data scientist, you must know how to wrangle and extract data from these databases using a language called SQL . This course teaches syntax in SQL shared by many types of databases, such as PostgreSQL, MySQL, SQL Server, and Oracle. This course teaches you everything you need to know to begin working with databases today!","time":"4 hours","chapters":[{"title":"Selecting columns","index":"1","description":"This chapter provides a brief introduction to working with relational databases. You'll learn about their structure, how to talk about them using database lingo, and how to begin an analysis using simple SQL commands to select and summarize columns from database tables.","parts":["Welcome to the course!","Onboarding | Tables","Onboarding | Query Result","Onboarding | Errors","Onboarding | Bullet Exercises","Beginning your SQL journey","SELECTing single columns","SELECTing multiple columns","SELECT DISTINCT","Learning to COUNT","Practice with COUNT"]},{"title":"Aggregate Functions","index":"3","description":"This chapter teaches you how to use aggregate functions to summarize data and gain useful insights. You'll also learn about arithmetic in SQL and how to use aliases to make your results more readable.","parts":["Aggregate functions","Aggregate functions practice","Combining aggregate functions with WHERE","A note on arithmetic","It's AS simple AS aliasing","Even more aliasing"]},{"title":"Filtering rows","index":"2","description":"This chapter builds on the first by teaching you how to filter tables for rows satisfying some criteria of interest. You'll learn how to use basic comparison operators, combine multiple criteria, match patterns in text, and much more.","parts":["Filtering results","Simple filtering of numeric values","Simple filtering of text","WHERE AND","WHERE AND OR","WHERE AND OR (2)","BETWEEN","BETWEEN (2)","WHERE IN","Introduction to NULL and IS NULL","NULL and IS NULL","LIKE and NOT LIKE"]},{"title":"Sorting and grouping","index":"4","description":"This chapter provides a brief introduction to sorting and grouping your results.","parts":["ORDER BY","Sorting single columns","Sorting single columns (2)","Sorting single columns (DESC)","Sorting multiple columns","GROUP BY","GROUP BY practice","GROUP BY practice (2)","HAVING a great time","All together now","All together now (2)","A taste of things to come"]}],"prerequistes":[],"tracks":["Data Science for Everyone","Data Analyst with R","Data Analyst with Python","SQL Fundamentals"]},
  {
     "title":"Intermediate SQL Server",
     "description":"In this course, you will use T-SQL, the flavor of SQL used in Microsoft's SQL Server for data analysis.",
     "detailDescription":"A majority of data is stored in databases and knowing the necessary tools needed to analyze and clean data directly in databases is indispensable. This course focuses on T-SQL, the version of SQL used in Microsoft SQL Server, needed for data analysis. You will learn several concepts in this course such as dealing with missing data, working with dates, and calculating summary statistics using advanced queries. After completing this course, you will have the skills needed to analyze data and provide insights quickly and easily.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Summarizing Data\n        ",
           "index":"1",
           "description":"\n    One of the first steps in data analysis is examining data through aggregations. This chapter explores how to create aggregations in SQL Server, a common first step in data exploration. You will also clean missing data and categorize data into bins with CASE statements.\n  ",
           "parts":[
              "Data analysis with aggregations",
              "Creating aggregations",
              "Creating grouped aggregations",
              "Dealing with missing data",
              "Removing missing values",
              "Imputing missing values (I)",
              "Imputing missing values (II)",
              "Binning data with CASE",
              "Using CASE statements",
              "Creating several groups with CASE"
           ]
        },
        {
           "title":"\n          Math Functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter explores essential math operations such as rounding numbers, calculating squares and square roots, and counting records. You will also work with dates in this chapter! \n  ",
           "parts":[
              "Counting and totals",
              "Calculating the total",
              "Counting the number of rows",
              "Dates",
              "Which date function should you use?",
              "Counting the number of days between dates",
              "Adding days to a date",
              "Rounding and truncating",
              "Rounding numbers",
              "Truncating numbers",
              "More math functions",
              "Calculating the absolute value",
              "Calculating squares and square roots"
           ]
        },
        {
           "title":"\n          Processing Data in SQL Server\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will create variables and write while loops to process data. You will also write complex queries by using derived tables and common table expressions. \n  ",
           "parts":[
              "WHILE loops",
              "Creating and using variables",
              "Creating a WHILE loop",
              "Derived tables",
              "Queries with derived tables (I)",
              "Queries with derived tables (II)",
              "Common Table Expressions",
              "CTE syntax",
              "Creating CTEs (I)",
              "Creating CTEs (II)"
           ]
        },
        {
           "title":"\n          Window Functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter of this course, you will work with partitions of data and window functions to calculate several summary stats and see how easy it is to create running totals and compute the mode of numeric columns.\n  ",
           "parts":[
              "Window functions in T-SQL",
              "Window functions with aggregations (I)",
              "Window functions with aggregations (II)",
              "Common window functions",
              "Do you know window functions?",
              "First value in a window",
              "Previous and next values",
              "Increasing window complexity",
              "Creating running totals",
              "Assigning row numbers",
              "Using windows for statistical functions",
              "Calculating standard deviation",
              "Calculating mode (I)",
              "Calculating mode (II)"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to SQL Server"
     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "SQL Server Fundamentals"
     ]
  },
  {
     "title":"Writing Functions and Stored Procedures in SQL Server",
     "description":"Master SQL Server programming by learning to create, update, and execute functions and stored procedures.",
     "detailDescription":"Take your SQL Server programming to the next level. First, we demystify how to manipulate datetime data by performing temporal exploratory data analysis with the Washington DC BikeShare transactional dataset. Then, you’ll master how to create, update, and execute user-defined functions and stored procedures. You will learn the proper context for each modular programming tool and best practices. In the final chapter, you will apply all of your new skills to solve a real-world business case identifying the New York City yellow taxi utilization for each borough, and which pickup locations should be scheduled for each driver shift.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Temporal EDA, Variables & Date Manipulation\n        ",
           "index":"1",
           "description":"\n    Learn how to do effective exploratory data analysis on temporal data, create scalar and table variables to store data, and learn how to execute date manipulation. This chapter will also cover the following SQL functions: DATEDIFF( ), DATENAME( ), DATEPART( ), CAST( ), CONVERT( ), GETDATE( ), and DATEADD( ).\n  ",
           "parts":[
              "Introduction to the course",
              "Transactions per day",
              "Seconds or no seconds?",
              "Which day of week is busiest?",
              "Find the outliers",
              "Variables for datetime data",
              "DECLARE & CAST",
              "DECLARE a TABLE",
              "INSERT INTO @TABLE",
              "Date manipulation",
              "Parameters matter with DATEDIFF",
              "First day of month"
           ]
        },
        {
           "title":"\n          User Defined Functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will explain how to create, update, and execute user-defined functions (UDFs). You will learn about the various types of UDFs: scalar, inline, and multi-statement table-valued. You’ll also learn best practices.\n  ",
           "parts":[
              "Scalar user defined functions",
              "What was yesterday?",
              "One in one out",
              "Multiple inputs one output",
              "Table valued UDFs",
              "Inline TVF",
              "Multi statement TVF",
              "UDFs in action",
              "Execute scalar with select",
              "EXEC scalar",
              "Execute TVF into variable",
              "Maintaining user defined functions",
              "CREATE OR ALTER",
              "Best practices"
           ]
        },
        {
           "title":"\n          Stored Procedures\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to create, update, and execute stored procedures. Investigate the differences between stored procedures and user defined functions, including appropriate scenarios for each.\n  ",
           "parts":[
              "Stored procedures",
              "CREATE PROCEDURE with OUTPUT",
              "Output parameters vs. Return values",
              "Oh CRUD!",
              "Use SP to INSERT",
              "Use SP to UPDATE",
              "Use SP to DELETE",
              "Let's EXEC!",
              "EXECUTE with OUTPUT parameter",
              "EXECUTE with return value",
              "EXECUTE with OUTPUT & return value",
              "TRY & CATCH those errors!",
              "Your very own TRY..CATCH",
              "CATCH an error"
           ]
        },
        {
           "title":"\n          NYC Taxi Ride Case Study\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Apply your new skills in temporal EDA, user-defined functions, and stored procedures to solve a business case problem. Analyze the New York City taxi ride dataset to identify average fare per distance, ride count, and total ride time for each borough on each day of the week. And which pickup locations within the borough should be scheduled for each driver shift?\n  ",
           "parts":[
              "Case study EDA & imputation",
              "Use EDA to find impossible scenarios",
              "SPs vs UDFs",
              "Mean imputation",
              "Hot Deck imputation",
              "Case study UDFs",
              "CREATE FUNCTIONs",
              "Test FUNCTIONs",
              "Formatting tools",
              "Logical weekdays with Hot Deck",
              "Format for Germany",
              "Case study stored procedures",
              "NYC Borough statistics SP",
              "NYC Borough statistics results",
              "Pickup locations by shift",
              "Pickup locations by shift results",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Functions for Manipulating Data in SQL Server"
     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "SQL Server for Database Administrators",
        "SQL Server Toolbox"
     ]
  },
  {
     "title":"Joining Data in SQL",
     "description":"Join two or three tables together into one, combine tables using set theory, and work with subqueries in PostgreSQL.",
     "detailDescription":"Now that you've learned the basics of SQL in our Intro to SQL for Data Science course, it's time to supercharge your queries using joins and relational set theory. In this course, you'll learn all about the power of joining tables while exploring interesting features of countries and their cities throughout the world. You will master inner and outer joins, as well as self joins, semi joins, anti joins and cross joins—fundamental tools in any PostgreSQL wizard's toolbox. Never fear set theory again after learning all about unions, intersections, and except clauses through easy-to-understand diagrams and examples. Lastly, you'll be introduced to the challenging topic of subqueries. You will be able to visually grasp these ideas by using Venn diagrams and other linking illustrations.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Introduction to joins\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll be introduced to the concept of joining tables, and will explore the different ways you can enrich your queries using inner joins and self joins. You'll also see how to use the case statement to split up a field into different categories.\n  ",
           "parts":[
              "Introduction to INNER JOIN",
              "Inner join",
              "Inner join (2)",
              "Inner join (3)",
              "INNER JOIN via USING",
              "Review inner join using on",
              "Inner join with using",
              "Self-ish joins, just in CASE",
              "Self-join",
              "Case when and then",
              "Inner challenge"
           ]
        },
        {
           "title":"\n          Outer joins and cross joins\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll come to grips with different kinds of outer joins. You'll learn how to gain further insights into your data through left joins, right joins, and full joins. In addition to outer joins, you'll also work with cross joins.\n  ",
           "parts":[
              "LEFT and RIGHT JOINs",
              "Left Join",
              "Left join (2)",
              "Left join (3)",
              "Right join",
              "FULL JOINs",
              "Full join",
              "Full join (2)",
              "Full join (3)",
              "Review outer joins",
              "CROSSing the rubicon",
              "A table of two cities",
              "Outer challenge"
           ]
        },
        {
           "title":"\n          Set theory clauses\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn more about set theory using Venn diagrams and get an introduction to union, union all, intersect, and except clauses. You'll finish by investigating semi joins and anti joins, which provide a nice introduction to subqueries.\n  ",
           "parts":[
              "State of the UNION",
              "Union",
              "Union (2)",
              "Union all",
              "INTERSECTional data science",
              "Intersect",
              "Intersect (2)",
              "Review union and intersect",
              "EXCEPTional",
              "Except",
              "Except (2)",
              "Semi-joins and Anti-joins",
              "Semi-join",
              "Relating semi-join to a tweaked inner join",
              "Diagnosing problems using anti-join",
              "Set theory challenge"
           ]
        },
        {
           "title":"\n          Subqueries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this closing chapter, you'll learn how to use nested queries and you'll use what you’ve learned in this course to solve three challenge problems.\n  ",
           "parts":[
              "Subqueries inside WHERE and SELECT clauses",
              "Subquery inside where",
              "Subquery inside where (2)",
              "Subquery inside select",
              "Subquery inside FROM clause",
              "Subquery inside from",
              "Advanced subquery",
              "Subquery challenge",
              "Subquery review",
              "Course review",
              "Final challenge",
              "Final challenge (2)",
              "Final challenge (3)"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to SQL"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Analyst with R",
        "Data Analyst with Python",
        "SQL Fundamentals",
        "SQL Server Fundamentals"
     ]
  },
  {
     "title":"Introduction to Relational Databases in SQL",
     "description":"Learn how to create one of the most efficient ways of storing data - relational databases!",
     "detailDescription":"You’ve already used SQL to query data from databases. But did you know that there's a lot more you can do with databases? You can model different phenomena in your data, as well as the relationships between them. This gives your data structure and consistency, which results in better data quality. In this course, you'll experience this firsthand by working with a real-life dataset that was used to investigate questionable university affiliations. Column by column, table by table, you'll get to unlock and admire the full potential of databases. You'll learn how to create tables and specify their relationships, as well as how to enforce data integrity. You'll also discover other unique features of database systems, such as constraints.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Your first database\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll create your very first database with a set of simple SQL commands. Next, you'll migrate data from existing flat tables into that database. You'll also learn how meta-information about a database can be queried.\n  ",
           "parts":[
              "Introduction to relational databases",
              "Attributes of relational databases",
              "Query information_schema with SELECT",
              "Tables: At the core of every database",
              "CREATE your first few TABLEs",
              "ADD a COLUMN with ALTER TABLE",
              "Update your database as the structure changes",
              "RENAME and DROP COLUMNs in affiliations",
              "Migrate data with INSERT INTO SELECT DISTINCT",
              "Delete tables with DROP TABLE"
           ]
        },
        {
           "title":"\n          Enforce data consistency with attribute constraints\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    After building a simple database, it's now time to make use of the features. You'll specify data types in columns, enforce column uniqueness, and disallow NULL values in this chapter.\n  ",
           "parts":[
              "Better data quality with constraints",
              "Types of database constraints",
              "Conforming with data types",
              "Type CASTs",
              "Working with data types",
              "Change types with ALTER COLUMN",
              "Convert types USING a function",
              "The not-null and unique constraints",
              "Disallow NULL values with SET NOT NULL",
              "What happens if you try to enter NULLs?",
              "Make your columns UNIQUE with ADD CONSTRAINT"
           ]
        },
        {
           "title":"\n          Uniquely identify records with key constraints\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now let’s get into the best practices of database engineering. It's time to add primary and foreign keys to the tables. These are two of the most important concepts in databases, and are the building blocks you’ll use to establish relationships between tables.\n  ",
           "parts":[
              "Keys and superkeys",
              "Get to know SELECT COUNT DISTINCT",
              "Identify keys with SELECT COUNT DISTINCT",
              "Primary keys",
              "Identify the primary key",
              "ADD key CONSTRAINTs to the tables",
              "Surrogate keys",
              "Add a SERIAL surrogate key",
              "CONCATenate columns to a surrogate key",
              "Test your knowledge before advancing"
           ]
        },
        {
           "title":"\n          Glue together tables with foreign keys\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter, you'll leverage foreign keys to connect tables and establish relationships that will greatly benefit your data quality. And you'll run ad hoc analyses on your new database.\n  ",
           "parts":[
              "Model 1:N relationships with foreign keys",
              "REFERENCE a table with a FOREIGN KEY",
              "Explore foreign key constraints",
              "JOIN tables linked by a foreign key",
              "Model more complex relationships",
              "Add foreign keys to the \"affiliations\" table",
              "Populate the \"professor_id\" column",
              "Drop \"firstname\" and \"lastname\"",
              "Referential integrity",
              "Referential integrity violations",
              "Change the referential integrity behavior of a key",
              "Roundup",
              "Count affiliations per university",
              "Join all the tables together"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to SQL"
     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "Data Science for Everyone",
        "Data Analyst with R",
        "Data Analyst with Python",
        "Data Engineer with Python",
        "SQL for Database Administrators",
        "SQL Server for Database Administrators"
     ]
  },
  {
     "title":"PostgreSQL Summary Stats and Window Functions",
     "description":"Learn how to create queries for analytics and data engineering with window functions, the SQL secret weapon!",
     "detailDescription":"Have you ever wondered how data professionals use SQL to solve real-world business problems, like generating rankings, calculating moving averages and running totals, deduplicating data, or performing time intelligence? If you already know how to select, filter, order, join and group data with SQL, this course is your next step. By the end, you will be writing queries like a pro! You will learn how to create queries for analytics and data engineering with window functions, the SQL secret weapon! Using flights data, you will discover how simple it is to use window functions, and how flexible and efficient they are.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to window functions\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll learn what window functions are, and the two basic window function subclauses, ORDER BY and PARTITION BY.\n  ",
           "parts":[
              "Introduction",
              "Window functions vs GROUP BY",
              "Numbering rows",
              "Numbering Olympic games in ascending order",
              "ORDER BY",
              "Numbering Olympic games in descending order",
              "Numbering Olympic athletes by medals earned",
              "Reigning weightlifting champions",
              "PARTITION BY",
              "Reigning champions by gender",
              "Reigning champions by gender and event",
              "Row numbers with partitioning"
           ]
        },
        {
           "title":"\n          Fetching, ranking, and paging\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn three practical applications of window functions: fetching values from different parts of the table, ranking rows according to their values, and binning rows into different tables.\n  ",
           "parts":[
              "Fetching",
              "Future gold medalists",
              "First athlete by name",
              "Last country by name",
              "Ranking",
              "Ranking athletes by medals earned",
              "Ranking athletes from multiple countries",
              "DENSE_RANK's output",
              "Paging",
              "Paging events",
              "Top, middle, and bottom thirds"
           ]
        },
        {
           "title":"\n          Aggregate window functions and frames\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn how to use aggregate functions you're familiar with, like `AVG()` and `SUM()`, as window functions, as well as how to define frames to change a window function's output.\n  ",
           "parts":[
              "Aggregate window functions",
              "Running totals of athlete medals",
              "Maximum country medals by year",
              "Minimum country medals by year",
              "Frames",
              "Number of rows in a frame",
              "Moving maximum of Scandinavian athletes' medals",
              "Moving maximum of Chinese athletes' medals",
              "Moving averages and totals",
              "Moving average's frame",
              "Moving average of Russian medals",
              "Moving total of countries' medals"
           ]
        },
        {
           "title":"\n          Beyond window functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this last chapter, you'll learn some techniques and functions that are useful when used together with window functions.\n  ",
           "parts":[
              "Pivoting",
              "A basic pivot",
              "Pivoting with ranking",
              "ROLLUP and CUBE",
              "Country-level subtotals",
              "All group-level subtotals",
              "A survey of useful functions",
              "Cleaning up results",
              "Summarizing results"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL"
     ],
     "tracks":[
        "SQL Fundamentals"
     ]
  },
  {
     "title":"Introduction to SQL Server",
     "description":"Become proficient at using SQL Server to perform common data manipulation tasks.",
     "detailDescription":"SQL is an essential skill for data scientists, and Microsoft SQL Server is one of the world's most popular database systems. In this course, you'll start with simple SELECT statements, and refine these queries with ORDER BY and WHERE clauses. You'll learn how to group and aggregate your results, and also how to work with strings. You'll also cover the most common way to join tables, how to create tables, and inserting and updating data. You'll mainly work with the Chinook digital media database, representing sales of various artists and tracks. The music theme continues with the classic rock and Eurovision datasets, while we also look at trends in power outages in the US. Overall, you'll become proficient in the most common data manipulation tasks in SQL Server and build a solid foundation for the upcoming T-SQL courses here on DataCamp!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          SELECTion Box\n        ",
           "index":"1",
           "description":"\n    Hit the ground running by learning the basics of SELECT  statements to retrieve data from one or more columns. \nYou'll also learn how to apply filters to both numeric and text data, and sort the results. \n  ",
           "parts":[
              "Welcome",
              "Simple selections",
              "More selections",
              "Ordering and filtering",
              "Order by",
              "Where",
              "Where again",
              "Working with NULL values",
              "WHERE the wild things are",
              "Exploring classic rock songs",
              "Exploring classic rock songs - AND/OR",
              "Using parentheses in your queries"
           ]
        },
        {
           "title":"\n          Groups, strings, and counting things\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Herein, you'll learn how to use important SQL Server aggregate functions such as SUM, COUNT, MIN, MAX, and AVG. Following that, you'll learn how to manipulate text fields. To round out the chapter, you'll power up your queries using GROUP BY and HAVING, which will enable you to perform more meaningful aggregations.\n  ",
           "parts":[
              "Aggregating Data",
              "Summing",
              "Counting",
              "MIN, MAX  and AVG",
              "Strings",
              "LEN'gth of a string",
              "Left and right",
              "Stuck in the middle with you",
              "Grouping and Having",
              "GROUP BY",
              "Having",
              "Grouping together"
           ]
        },
        {
           "title":"\n          Joining tables\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter covers the basics of joining tables, using INNER, LEFT, and RIGHT joins,  so that you can confidently retrieve data from multiple sources.\n  ",
           "parts":[
              "Joining tables",
              "Inner Joins - a perfect match",
              "Inner Joins (II)",
              "Inner Join (III)  - Join 3 tables",
              "LEFT & RIGHT JOIN",
              "LEFT join",
              "RIGHT JOIN",
              "UNION  & UNION ALL",
              "UNION ALL Check",
              "Join the UNION"
           ]
        },
        {
           "title":"\n          You've  got the power\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter,  you'll get really hands on! You've worked with existing tables, but in this chapter, you'll get to CREATE and INSERT data into them.  You'll also UPDATE existing records and practice DELETE  statements in a safe environment. This chapter ensures the course gives you a thorough introduction to the key aspects of working with data in SQL Server.\n  ",
           "parts":[
              "Creator",
              "CRUD operations",
              "Create tables",
              "Insert, Update, Delete",
              "Insert",
              "Update",
              "Delete",
              "Declare yourself",
              "DECLARE and SET a variable",
              "Declare multiple variables",
              "Ultimate Power",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "SQL Server Fundamentals"
     ]
  },
  {
     "title":"Intermediate SQL",
     "description":"Master the complex SQL queries necessary to answer a wide variety of data science questions and prepare robust data sets for analysis in PostgreSQL.",
     "detailDescription":"So you've learned how to aggregate and join data from tables in your database—now what? How do you manipulate, transform, and make the most sense of your data? This intermediate-level course will teach you several key functions necessary to wrangle, filter, and categorize information in a relational database, expand your SQL toolkit, and answer complex questions. You will learn the robust use of CASE statements, subqueries, and window functions—all while discovering some interesting facts about soccer using the European Soccer Database.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          We'll take the CASE\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn how to use the CASE WHEN statement to create categorical variables, aggregate data into a single column with multiple filtering conditions, and calculate counts and percentages.\n  ",
           "parts":[
              "We'll take the CASE",
              "Basic CASE statements",
              "CASE statements comparing column values",
              "CASE statements comparing two column values part 2",
              "In CASE things get more complex",
              "In CASE of rivalry",
              "Filtering your CASE statement",
              "CASE WHEN with aggregate functions",
              "COUNT using CASE WHEN",
              "COUNT and CASE WHEN with multiple conditions",
              "Calculating percent with CASE and AVG"
           ]
        },
        {
           "title":"\n          Short and Simple Subqueries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about subqueries in the SELECT, FROM, and WHERE clauses. You will gain an understanding of when subqueries are necessary to construct your dataset and where to best include them in your queries.\n  ",
           "parts":[
              "WHERE are the Subqueries?",
              "Filtering using scalar subqueries",
              "Filtering using a subquery with a list",
              "Filtering with more complex subquery conditions",
              "Subqueries in FROM",
              "Joining Subqueries in FROM",
              "Building on Subqueries in FROM",
              "Subqueries in SELECT",
              "Add a subquery to the SELECT clause",
              "Subqueries in Select for Calculations",
              "Subqueries everywhere! And best practices!",
              "ALL the Subqueries EVERYWHERE",
              "Add a subquery in FROM",
              "Add a subquery in SELECT"
           ]
        },
        {
           "title":"\n          Correlated Queries, Nested Queries, and Common Table Expressions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to use nested and correlated subqueries to extract more complex data from a relational database. You will also learn about common table expressions and how to best construct queries using multiple common table expressions.\n  ",
           "parts":[
              "Correlated Subqueries",
              "Basic Correlated Subqueries",
              "Correlated subquery with multiple conditions",
              "Nested subqueries",
              "Nested simple subqueries",
              "Nest a subquery in FROM",
              "Common Table Expressions",
              "Clean up with CTEs",
              "Organizing with CTEs",
              "CTEs with nested subqueries",
              "Deciding on techniques to use",
              "Get team names with a subquery",
              "Get team names with correlated subqueries",
              "Get team names with CTEs",
              "Which technique to use?"
           ]
        },
        {
           "title":"\n          Window Functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You will learn about window functions and how to pass aggregate functions along a dataset. You will also learn how to calculate running totals and partitioned averages.\n  ",
           "parts":[
              "It's OVER",
              "The match is OVER",
              "What's OVER here?",
              "Flip OVER your results",
              "OVER with a PARTITION",
              "PARTITION BY a column",
              "PARTITION BY multiple columns",
              "Sliding Windows",
              "Slide to the left",
              "Slide to the right",
              "Bringing it all together",
              "Setting up the home team CTE",
              "Setting up the away team CTE",
              "Putting the CTEs together",
              "Add a window function"
           ]
        }
     ],
     "prerequistes":[
        "Joining Data in SQL"
     ],
     "tracks":[
        "SQL Fundamentals"
     ]
  },
  {
     "title":"Exploratory Data Analysis in SQL",
     "description":"Learn how to explore what's available in a database: the tables, relationships between them, and data stored in them.",
     "detailDescription":"You have access to a database. Now what do you do? Building on your existing skills joining tables, using basic functions, grouping data, and using subqueries, the next step in your SQL journey is learning how to explore a database and the data in it. Using data from Stack Overflow, Fortune 500 companies, and 311 help requests from Evanston, IL, you'll get familiar with numeric, character, and date/time data types. You'll use functions to aggregate, summarize, and analyze data without leaving the database. Errors and inconsistencies in the data won't stop you! You'll learn common problems to look for and strategies to clean up messy data. By the end of this course, you'll be ready to start exploring your own PostgreSQL databases and analyzing the data in them.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          What's in the database?\n        ",
           "index":"1",
           "description":"\n    Start exploring a database by identifying the tables and the foreign keys that link them.  Look for missing values, count the number of observations, and join tables to understand how they're related.  Learn about coalescing and casting data along the way. \n  ",
           "parts":[
              "What's in the database?",
              "Explore table sizes",
              "Count missing values",
              "Join tables",
              "The keys to the database",
              "Foreign keys",
              "Read an entity relationship diagram",
              "Coalesce",
              "Coalesce with a self-join",
              "Column types and constraints",
              "Effects of casting",
              "Summarize the distribution of numeric values"
           ]
        },
        {
           "title":"\n          Summarizing and aggregating numeric data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You'll build on functions like min and max to summarize numeric data in new ways.  Add average, variance, correlation, and percentile functions to your toolkit, and learn how to truncate and round numeric values too.  Build complex queries and save your results by creating temporary tables.\n  ",
           "parts":[
              "Numeric data types and summary functions",
              "Division",
              "Explore with division",
              "Summarize numeric columns",
              "Summarize group statistics",
              "Exploring distributions",
              "Truncate",
              "Generate series",
              "More summary functions",
              "Correlation",
              "Mean and Median",
              "Creating temporary tables",
              "Create a temp table",
              "Create a temp table to simplify a query",
              "Insert into a temp table"
           ]
        },
        {
           "title":"\n          Exploring categorical data and unstructured text\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Text, or character, data can get messy, but you'll learn how to deal with inconsistencies in case, spacing, and delimiters. \nLearn how to use a temporary table to recode messy categorical data to standardized values you can count and aggregate.  Extract new variables from unstructured text as you explore help requests submitted to the city of Evanston, IL.\n  ",
           "parts":[
              "Character data types and common issues",
              "Count the categories",
              "Spotting character data problems",
              "Cases and spaces",
              "Trimming",
              "Exploring unstructured text",
              "Splitting and concatenating text",
              "Concatenate strings",
              "Split strings on a delimiter",
              "Shorten long strings",
              "Strategies for multiple transformations",
              "Create an \"other\" category",
              "Group and recode values",
              "Create a table with indicator variables"
           ]
        },
        {
           "title":"\n          Working with dates and timestamps\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    What time is it?  In this chapter, you'll learn how to find out.  You'll aggregate date/time data by hour, day, month, or year and practice both constructing time series and finding gaps in them.  \n  ",
           "parts":[
              "Date/time types and formats",
              "ISO 8601",
              "Date comparisons",
              "Date arithmetic",
              "Completion time by category",
              "Date/time components and aggregation",
              "Date parts",
              "Variation by day of week",
              "Date truncation",
              "Aggregating with date/time series",
              "Find missing dates",
              "Custom aggregation periods",
              "Monthly average with missing dates",
              "Time between events",
              "Longest gap",
              "Rats!",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL"
     ],
     "tracks":[
        "SQL for Business Analysts"
     ]
  },
  {
     "title":"Transactions and Error Handling in SQL Server",
     "description":"Learn to write scripts that will catch and handle errors and control for multiple operations happening at once.",
     "detailDescription":"It is critical to know how to handle errors and manage transactions when programming SQL scripts. Unhandled errors can be very harmful and can cause unexpected situations, such as inconsistent data in your database, or even worse, errors can lead you to make wrong business decisions. In this course, you will learn how to handle errors and discover how to manage transactions in case of an error. Additionally, you will study what happens when two or more people interact at the same time with the same data. You will practice all these concepts using two datasets, one of them based on bank accounts and the other one on an electric bike store.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Starting with error handling\n        ",
           "index":"1",
           "description":"\n    To begin the course, you will learn how to handle errors using the TRY...CATCH construct that provides T-SQL.  You will study the anatomy of errors, and you will learn how to use some functions that can give you information about errors.\n  ",
           "parts":[
              "Welcome!",
              "The TRY...CATCH syntax",
              "Your first error-handling  script",
              "Nesting TRY...CATCH constructs",
              "Error anatomy and uncatchable errors",
              "Anatomy review",
              "Correcting compilation errors",
              "Giving information about errors",
              "Error function syntax",
              "Using error functions",
              "Using error functions in a nested TRY...CATCH"
           ]
        },
        {
           "title":"\n          Raising, throwing and customizing your errors\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will deepen your knowledge of handling errors. You will learn how to raise errors using RAISERROR and THROW. Additionally, you will discover how to customize errors.\n  ",
           "parts":[
              "RAISERROR",
              "RAISERROR syntax",
              "CATCHING the RAISERROR",
              "THROW",
              "THROW with or without parameters",
              "THROW without parameters",
              "Executing a stored procedure that throws an error",
              "THROW with parameters",
              "Customizing error messages in the THROW statement",
              "Ways of customizing error messages",
              "Concatenating the message",
              "FORMATMESSAGE with message string",
              "FORMATMESSAGE with message number"
           ]
        },
        {
           "title":"\n          Transactions in SQL Server\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will be introduced to the concept of transactions. You will discover how to commit and rollback them. You will finish by learning how to return the number of transactions and their state.\n  ",
           "parts":[
              "Transactions",
              "Transaction statements",
              "Correcting a transaction",
              "Rolling back a transaction if there is an error",
              "Choosing when to commit or rollback a transaction",
              "@@TRANCOUNT and savepoints",
              "Modifiers of the @@TRANCOUNT value",
              "Checking @@TRANCOUNT in a TRY...CATCH construct",
              "Using savepoints",
              "XACT_ABORT & XACT_STATE",
              "XACT_ABORT behavior",
              "XACT_ABORT and THROW",
              "Doomed transactions"
           ]
        },
        {
           "title":"\n          Controlling the concurrency: Transaction isolation levels\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter defines what concurrency is and how it can affect transactions. You will learn exciting concepts like dirty reads, repeatable reads, and phantom reads. To avoid or allow this reads, you will explore, one by one, the different transaction isolation levels.\n  ",
           "parts":[
              "Transaction isolation levels",
              "Concurrency phenomena",
              "Using the READ UNCOMMITTED isolation level",
              "READ COMMITTED & REPEATABLE READ",
              "Choosing the correct isolation level",
              "Prevent dirty reads",
              "Preventing non-repeatable reads",
              "SERIALIZABLE isolation level",
              "Prevent phantom reads in a table",
              "Prevent phantom reads just in some rows",
              "SNAPSHOT",
              "Setting READ COMMITTED SNAPSHOT to ON",
              "Comparing WITH (NOLOCK) & READ UNCOMMITTED",
              "Avoid being blocked",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL Server"
     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "Data Engineer with Python",
        "SQL Server for Database Administrators"
     ]
  },
  {
     "title":"Building and Optimizing Triggers in SQL Server",
     "description":"Learn how to design and implement triggers in SQL Server using real-world examples.",
     "detailDescription":"Auditing your SQL Server database and keeping data integrity can be a challenging task for DBAs and database developers. SQL Server triggers are special types of stored procedures designed to help you achieve consistency and integrity of your database. This course will teach you how to work with triggers and use them in real-life examples. Specifically, you will learn about the use cases and limitations of triggers and get practice designing and implementing them. You will also learn to optimize triggers to fit your specific needs.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Triggers\n        ",
           "index":"1",
           "description":"\n    An introduction to the basic concepts of SQL Server triggers. Create your first trigger using T-SQL code. Learn how triggers are used and what alternatives exist.\n  ",
           "parts":[
              "Introduction",
              "Types of trigger",
              "Creating your first trigger",
              "Practicing creating triggers",
              "How DML triggers are used",
              "When to use triggers",
              "Creating a trigger to keep track of data changes",
              "Trigger alternatives",
              "Triggers vs. stored procedures",
              "Triggers vs. computed columns"
           ]
        },
        {
           "title":"\n          Classification of Triggers\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn about the different types of SQL Server triggers: AFTER triggers (DML), INSTEAD OF triggers (DML), DDL triggers, and logon triggers.\n  ",
           "parts":[
              "AFTER triggers (DML)",
              "Tracking retired products",
              "The TrackRetiredProducts trigger in action",
              "Practicing with AFTER triggers",
              "INSTEAD OF triggers (DML)",
              "Preventing changes to orders",
              "PreventOrdersUpdate in action",
              "Creating the PreventNewDiscounts trigger",
              "DDL triggers",
              "Tracking table changes",
              "Using FOR in a trigger",
              "Preventing table deletion",
              "Logon triggers",
              "Enhancing database security",
              "Defining a logon trigger"
           ]
        },
        {
           "title":"\n          Trigger Limitations and Use Cases\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Find out known limitations of triggers, as well as common use cases for AFTER triggers (DML), INSTEAD OF triggers (DML) and DDL triggers.\n  ",
           "parts":[
              "Known limitations of triggers",
              "Trigger limitations",
              "Creating a report on existing triggers",
              "Use cases for AFTER triggers (DML)",
              "Keeping a history of row changes",
              "Table auditing using triggers",
              "Use cases for INSTEAD OF triggers (DML)",
              "Preventing changes to Products",
              "Checking stock before placing orders",
              "Use cases for DDL triggers",
              "Database auditing",
              "Preventing server changes"
           ]
        },
        {
           "title":"\n          Trigger Optimization and Management\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn to delete and modify triggers. Acquaint yourself with the way trigger management is done. Learn how to investigate problematic triggers in practice.\n  ",
           "parts":[
              "Deleting and altering triggers",
              "Removing unwanted triggers",
              "Modifying a trigger's definition",
              "Disabling a trigger",
              "Re-enabling a disabled trigger",
              "Trigger management",
              "Managing existing triggers",
              "Counting the AFTER triggers",
              "Troubleshooting triggers",
              "Keeping track of trigger executions",
              "Identifying problematic triggers",
              "Wrapping up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL Server"
     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "Data Engineer with Python",
        "SQL Server for Database Administrators"
     ]
  },
  {
     "title":"Hierarchical and Recursive Queries in SQL Server",
     "description":"Learn how to write recursive queries and query hierarchical data structures.",
     "detailDescription":"Do you want to query complex data structures in an iterative way? Do you have access to hierarchical data structures that need to be queried? This course will teach you the tools required to solve these questions. You will learn how to write recursive queries and query hierarchical data structures. To do this, you will use Common Table Expressions (CTE) and the recursion principle on a wide variety of datasets. You will, for example, dig into a flight plan dataset and learn how to find the best and cheapest connection between two airports. After completing this course, you will understand the principle of recursion, and be able to identify and create hierarchical data models.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Recursion and Common Table Expression (CTE)\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn about recursion and why it is beneficial to apply this technique.  You will also refresh your knowledge about Common Expression Tables (CTE).\n  ",
           "parts":[
              "Recap of Common Table Expressions (CTE)",
              "A CTE is ... Find the wrong fact!",
              "A CTE for IT-positions",
              "A CTE for high-paid IT-positions",
              "Introduction to recursion",
              "Facts about recursion.",
              "Calculate the factorial of 5",
              "How to query the factorial of 6 recursively",
              "Solve recursive maths problems",
              "Counting numbers recursively",
              "Calculate the sum of potencies"
           ]
        },
        {
           "title":"\n          Hierarchical and Recursive Queries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn about recursive CTEs,  how to query hierarchical datasets,  and finally, how to apply recursive CTEs on hierarchical data.\n  ",
           "parts":[
              "Introduction to recursive CTE",
              "Right or wrong?",
              "Create the alphabet recursively",
              "Create a time series of a year",
              "Working with recursive queries",
              "Who is your manager?",
              "Get the hierarchy position",
              "Which  supervisor do I have?",
              "Analyze the family tree",
              "Get the number of generations?",
              "Get all possible parents in one field?"
           ]
        },
        {
           "title":"\n          Creating Data Models on Your Own\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to create and modify database tables. You will learn about relational and hierarchical data models, how they differ, and when each model should be used.\n  ",
           "parts":[
              "How to work with tables",
              "Creating a table",
              "Inserting and updating a table",
              "Deleting data and dropping table",
              "Changing a table structure",
              "Working with relational data models",
              "Defining primary and foreign keys",
              "Inserting data to person and order history",
              "Getting the number of orders & total costs",
              "Working with hierarchical data models",
              "Creating a hierarchical data model",
              "Networked and hierarchical models",
              "Creating a networked data model"
           ]
        },
        {
           "title":"\n          Hierarchical Queries of Real-World Examples\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will practice your learnings about hierarchical and recursive querying on real-world problems, such as finding possible flight routes, assembling a car, and modeling a power grid.\n  ",
           "parts":[
              "Travel planning for flight data",
              "Get the anchor & recursive member",
              "Get all possible airports",
              "All flight routes from Vienna",
              "How to assemble a car?",
              "Create the parts list",
              "Create a car's bill of material",
              "Build up a BMW?",
              "Modeling a power grid",
              "Create a power grid",
              "Get power lines to maintain",
              "Summary of the course"
           ]
        }
     ],
     "prerequistes":[
        "Functions for Manipulating Data in SQL Server"
     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "SQL Server for Database Administrators"
     ]
  },
  {
     "title":"Functions for Manipulating Data in PostgreSQL",
     "description":"Learn the most important PostgreSQL functions for manipulating, processing, and transforming data.",
     "detailDescription":"This course will provide you an understanding of how to use built-in PostgreSQL functions in your SQL queries to manipulate different types of data including strings, character, numeric and date/time. We'll travel back to a time where Blockbuster video stores were on every corner and if you wanted to watch a movie, you actually had to leave your house to rent a DVD! You'll also get an introduction into the robust full-text search capabilities which provides a powerful tool for indexing and matching keywords in a PostgreSQL document. And finally, you'll learn how to extend these features by using PostgreSQL extensions.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Overview of Common Data Types\n        ",
           "index":"1",
           "description":"\n    Learn about the properties and characteristics of common data types including strings, numerics and arrays and how to retrieve information about your database.\n  ",
           "parts":[
              "Welcome!",
              "Text data types",
              "Getting information about your database",
              "Determining data types",
              "Date  and time  data types",
              "Properties of date and time data types",
              "Interval data types",
              "Working  with ARRAYs",
              "Accessing data in an ARRAY",
              "Searching an ARRAY with ANY",
              "Searching an ARRAY with @>"
           ]
        },
        {
           "title":"\n          Working with DATE/TIME Functions and Operators\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Explore how to manipulate and query date and time objects including how to use the current timestamp in your queries, extract subfields from existing date and time fields and what to expect when you perform date and time arithmetic.\n  ",
           "parts":[
              "Overview of basic arithmetic operators",
              "Adding and subtracting date and time values",
              "INTERVAL arithmetic",
              "Calculating the expected return date",
              "Functions for retrieving current date/time",
              "Current timestamp functions",
              "Working with the current date and time",
              "Manipulating the current date and time",
              "Extracting and transforming date/ time data",
              "Using EXTRACT",
              "Using DATE_TRUNC",
              "Putting it all together"
           ]
        },
        {
           "title":"\n          Parsing and Manipulating Text\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to manipulate string and text data by transforming case, parsing and truncating text and extracting substrings from larger strings.\n  ",
           "parts":[
              "Reformatting string and character data",
              "Concatenating strings",
              "Changing the case of string data",
              "Replacing string data",
              "Parsing string and character data",
              "Determining the length of strings",
              "Truncating strings",
              "Extracting substrings from text data",
              "Combining functions for string manipulation",
              "Truncating and padding string data",
              "Padding",
              "The TRIM function",
              "Putting it all together"
           ]
        },
        {
           "title":"\n          Full-text Search and PostgresSQL Extensions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    An introduction into some more advanced capabilities of PostgreSQL like full-text search and extensions. \n  ",
           "parts":[
              "Introduction to full-text search",
              "A review of the LIKE operator",
              "What is a tsvector?",
              "Basic full-text search",
              "Extending PostgreSQL",
              "User-defined data types",
              "Getting info about user-defined data types",
              "User-defined functions in Sakila",
              "Intro to PostgreSQL extensions",
              "Enabling extensions",
              "Measuring similarity between two strings",
              "Levenshtein distance examples",
              "Putting it all together",
              "Wrap Up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL"
     ],
     "tracks":[
        "SQL Fundamentals"
     ]
  },
  {
     "title":"Time Series Analysis in SQL Server",
     "description":"Explore ways to work with date and time data in SQL Server for time series analysis",
     "detailDescription":"SQL Server has a robust set of tools to prepare, aggregate, and query time series data. This course will show you how to build and work with dates, parse dates from strings (and deal with invalid strings), and format dates for reporting. From there, you will see how SQL Server's built-in aggregation operators and window functions can solve important business problems like calculating running totals, finding moving averages, and displaying month-over-month differences using realistic sample data sets. You will also see how taking a different perspective on your data can solve difficult problems.",
     "time":"5 hours",
     "chapters":[
        {
           "title":"\n          Working with Dates and Times\n        ",
           "index":"1",
           "description":"\n    This chapter covers date and time functionality in SQL Server, including building dates from component parts, formatting dates for reporting, and working with calendar tables.\n  ",
           "parts":[
              "Building dates",
              "Break out a date into year, month, and day",
              "Break a date and time into component parts",
              "Date math and leap years",
              "Rounding dates",
              "Formatting dates for reporting",
              "Formatting dates with CAST() and CONVERT()",
              "Formatting dates with FORMAT()",
              "Working with calendar tables",
              "The benefits of calendar tables",
              "Try out a calendar table",
              "Joining to a calendar table"
           ]
        },
        {
           "title":"\n          Converting to Dates and Times\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Here, we'll be converting strings and other inputs to date and time data types.\n  ",
           "parts":[
              "Building dates from parts",
              "Build dates from parts",
              "Build dates and times from parts",
              "Build dates and times with offsets from parts",
              "Translating date strings",
              "Cast strings to dates",
              "Convert strings to dates",
              "Parse strings to dates",
              "Working with offsets",
              "Changing a date's offset",
              "Using the time zone DMV to look up times",
              "Converting to a date offset",
              "Handling invalid dates",
              "Try out type-safe date functions",
              "Convert imported data to dates with time zones",
              "Test type-safe conversion function performance"
           ]
        },
        {
           "title":"\n          Aggregating Time Series Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we will learn techniques to aggregate data over time.  We will briefly review aggregation functions and statistical aggregation functions.  We will cover upsampling and downsampling of data.  Finally, we will look at the grouping operators.\n  ",
           "parts":[
              "Basic aggregate functions",
              "Summarize data over a time frame",
              "Calculating distinct counts",
              "Calculating filtered aggregates",
              "Statistical aggregate functions",
              "Working with statistical aggregate functions",
              "Calculating median in SQL Server",
              "Downsampling and upsampling data",
              "Downsample to a daily grain",
              "Downsample to a weekly grain",
              "Downsample using a calendar table",
              "Grouping by ROLLUP, CUBE, and GROUPING SETS",
              "Generate a summary with ROLLUP",
              "View all aggregations with CUBE",
              "Generate custom groupings with GROUPING SETS",
              "Combine multiple aggregations in one query"
           ]
        },
        {
           "title":"\n          Answering Time Series Questions with Window Functions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we will learn how to use window functions to perform calculations over time, including calculating running totals and moving averages, calculating intervals, and finding the maximum levels of overlap.\n  ",
           "parts":[
              "Using aggregation functions over windows",
              "Contrasting ROW_NUMBER(), RANK(), and DENSE_RANK()",
              "Aggregate window functions",
              "Calculating running totals and moving averages",
              "Running totals with SUM()",
              "Investigating window frames",
              "Calculating moving averages",
              "Working with LAG() and LEAD()",
              "Seeing prior and future periods",
              "Seeing the prior three periods",
              "Calculating days elapsed between incidents",
              "Finding maximum levels of overlap",
              "Analyze client data for potential fraud",
              "Build a stream of events",
              "Complete the fraud analysis",
              "Wrapping up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL Server"
     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "SQL Server Fundamentals",
        "SQL Server Toolbox"
     ]
  },
  {
     "title":"Creating PostgreSQL Databases",
     "description":"This course teaches you the skills and knowledge necessary to create and manage your own PostgreSQL databases.",
     "detailDescription":"You have experience working with databases or, perhaps, you have heard how useful databases can be for organizing your data. Have you ever wanted to create and manage your own databases but thought such knowledge is reserved for database administrators? Well, it is not! This course teaches you the skills and knowledge necessary to create and manage your own PostgreSQL databases. Topics that will be covered include the structure of PostgreSQL databases, PostgreSQL datatypes, and normalization of databases to efficiently store data and avoid data loss. These topics will be taught using data from the U.S. Small Business Administration (SBA) to guide the lessons and provide context for the concepts covered in the course.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Chapter 1: Structure of PostgreSQL Databases\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will be introduced to the fundamental objects in a PostgreSQL database: the database, tables, and schemas. After completing this chapter, you will know how to issue commands to create all three types of objects, and understand how each fits into the hierarchy of PostgreSQL objects.\n  ",
           "parts":[
              "Creating a database",
              "New database creation",
              "Motivation for a new database",
              "Creating tables",
              "Name that table",
              "Two tables and a foreign key connection",
              "Creating schemas",
              "User-level schemas",
              "The public schema",
              "Creating tables in existing schemas"
           ]
        },
        {
           "title":"\n          Chapter 2: PostgreSQL Data Types\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will be introduced to text, numeric, temporal, and boolean data types in  PostgreSQL. After completing this chapter, you will be able to define the appropriate data types for table columns based on the data values to be stored.\n  ",
           "parts":[
              "Introduction to PostgreSQL data types",
              "Matching data representations and categories",
              "Choosing data types at table creation",
              "Defining text columns",
              "Matching text types",
              "SBA appeals table",
              "Defining numeric data columns",
              "Using integer types",
              "Supporting an SBA marketing campaign",
              "Defining boolean and temporal data columns",
              "Revisiting the appeals table",
              "Boolean defaults",
              "Choosing data types representations"
           ]
        },
        {
           "title":"\n          Chapter 3: Database Normalization\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, database normalization is introduced. Database normalization maintains data integrity and reduces data duplication. 1st, 2nd, and 3rd Normal Form are defined as steps in the process of normalizing a database. Examples to clarify concepts are provided throughout the chapter.\n  ",
           "parts":[
              "The importance of data normalization",
              "Reasons for normalizing databases",
              "Reducing data redundancy",
              "Improving object-to-data mapping",
              "1st Normal Form",
              "Simplifying database records",
              "Too much normalization",
              "2nd Normal Form",
              "Designing a course table",
              "Streamlining meal options",
              "3rd Normal Form",
              "Identifying transitive dependencies",
              "Table definitions for 3rd Normal Form",
              "Working through the normalization process"
           ]
        },
        {
           "title":"\n          Chapter 4: Access Control in PostgreSQL\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, the topic of access control in PostgreSQL is introduced. Access control is presented as granting and revoking privileges to users and groups on database objects. Using these tools, a database and its objects can be protected from unauthorized access, helping to ensure the integrity of the stored data.\n  ",
           "parts":[
              "Introduction to access control",
              "Creating a new user",
              "Updating user passwords",
              "PostgreSQL access privileges",
              "Granting user privileges",
              "Using the granted privileges",
              "Hierarchical access control",
              "Working with users and groups",
              "Schema privileges",
              "Removing access",
              "Removing user privileges",
              "Rescinding group membership",
              "Implementing access control for teams",
              "Course wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to SQL"
     ],
     "tracks":[
        "SQL for Database Administrators"
     ]
  },
  {
     "title":"Database Design",
     "description":"Learn to design databases in SQL.",
     "detailDescription":"A good database design is crucial for a high-performance application. Just like you wouldn't start building a house without the benefit of a blueprint, you need to think about how your data will be stored beforehand. Taking the time to design a database saves time and frustration later on, and a well-designed database ensures ease of access and retrieval of information. While choosing a design, a lot of considerations have to be accounted for. In this course, you'll learn how to process, store, and organize data in an efficient way. You'll see how to structure data through normalization and present your data with views. Finally, you'll learn how to manage your database and all of this will be done on a variety of datasets from book sales, car rentals, to music reviews.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Processing, Storing, and Organizing Data\n        ",
           "index":"1",
           "description":"\n    Start your journey into database design by learning about the two approaches to data processing, OLTP and OLAP. In this first chapter, you'll also get familiar with the different forms data can be stored in and learn the basics of data modeling.\n  ",
           "parts":[
              "OLTP and OLAP",
              "OLAP vs. OLTP",
              "Which is better?",
              "Storing data",
              "Name that data type!",
              "Ordering ETL Tasks",
              "Recommend a storage solution",
              "Database design",
              "Classifying data models",
              "Deciding fact and dimension tables",
              "Querying the dimensional model"
           ]
        },
        {
           "title":"\n          Database Schemas and Normalization\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will take your data modeling skills to the next level. You'll learn to implement star and snowflake schemas, recognize the importance of normalization and see how to normalize databases to different extents.\n  ",
           "parts":[
              "Star and snowflake schema",
              "Running from star to snowflake",
              "Adding foreign keys",
              "Extending the book dimension",
              "Normalized and denormalized databases",
              "Querying the star schema",
              "Querying the snowflake schema",
              "Updating countries",
              "Extending the snowflake schema",
              "Normal forms",
              "Converting to 1NF",
              "Converting to 2NF",
              "Converting to 3NF"
           ]
        },
        {
           "title":"\n          Database Views\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Get ready to work with views! In this chapter, you will learn how to create and query views. On top of that, you'll master more advanced capabilities to manage them and end by identifying the difference between materialized and non-materialized views.\n  ",
           "parts":[
              "Database views",
              "Tables vs. views",
              "Viewing views",
              "Creating and querying a view",
              "Managing views",
              "Creating a view from other views",
              "Granting and revoking access",
              "Updatable views",
              "Redefining a view",
              "Materialized views",
              "Materialized versus non-materialized",
              "Creating and refreshing a materialized view",
              "Managing materialized views"
           ]
        },
        {
           "title":"\n          Database Management\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This final chapter ends with some database management-related topics. You will learn how to grant database access based on user roles, how to partition tables into smaller pieces, what to keep in mind when integrating data, and which DBMS fits your business needs best.\n  ",
           "parts":[
              "Database roles and access control",
              "Create a role",
              "GRANT privileges and ALTER attributes",
              "Add a user role to a group role",
              "Table partitioning",
              "Reasons to partition",
              "Partitioning and normalization",
              "Creating vertical partitions",
              "Creating horizontal partitions",
              "Data integration",
              "Data integration do's and dont's",
              "Analyzing a data integration plan",
              "Picking a Database Management System (DBMS)",
              "SQL versus NoSQL",
              "Choosing the right DBMS"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Relational Databases in SQL"
     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "Data Engineer with Python",
        "SQL for Database Administrators",
        "SQL Server for Database Administrators"
     ]
  },
  {
     "title":"Improving Query Performance in PostgreSQL",
     "description":"Learn how to structure your PostgreSQL queries to run in a fraction of the time.",
     "detailDescription":"Losing time on slow queries? Hesitant to share your queries with more seasoned coworkers? In this course, you will learn how to structure your PostgreSQL to run in a fraction of the time. Exploring intertwined data relating Olympic participation, country climate, and gross domestic product, you will experience firsthand how changes in filtering method and using subqueries impact query performance. You will learn the properties of a row oriented database while also seeing how Hawaii's volcanos impact air quality. Restructuring your queries with the query planner and the SQL order of operations, you will soon be dazzling your coworkers with your effortless efficiency.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Bringing Together the Data\n        ",
           "index":"1",
           "description":"\n    Bundle up as you dive into the Winter Olympics! You will learn how to join, subquery, and create temporary tables while finding which Olympic athletes brave sub-freezing temperatures to train. You will also learn about the query planner and how its functionality can guide your SQL structure to faster queries.\n  ",
           "parts":[
              "All about joins",
              "Where are all the athletes from",
              "Using different joins to explore athletes' regions",
              "What about the weather",
              "Subqueries and common table expressions (cte)",
              "Filtering to freezing with a subquery",
              "Where winter is white",
              "Countries with subqueries or CTEs",
              "Working with temporary tables",
              "Canadians temp table",
              "Analyze that temp table"
           ]
        },
        {
           "title":"\n          Minimizing Results and Decreasing the Load\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Dig up those past algebra memories while learning the SQL order of operations. Find which countries \"should\" have the most athletes by looking at population and gross domestic product (GDP) while learning the best way to filter. You will also learn when your query aggregates (sums, counts, etc.) and how you can structure your query to optimize this process.\n  ",
           "parts":[
              "What you write is not what SQL sees",
              "Order of operations impact on query structure",
              "Group by and aggregations",
              "Count and count distinct",
              "Filtering in the WHERE clause",
              "OR versus IN with athletes",
              "Data type filters",
              "EXPLAIN the filter query plan step",
              "Filtering while joining",
              "Where to place a region filter",
              "Filtering in the join, where, and select",
              "Aggregating with different data granularities",
              "Aggregate before joining tables",
              "South African trends"
           ]
        },
        {
           "title":"\n          Using Database Designed Properties\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Zero in on the properties that improve database performance. Discover when your table is not a table but a view. Learn how your database's storage structure (row or column oriented) impacts your query structure. You will explore volcanic smog while using partitions and indexes to speed your queries.\n  ",
           "parts":[
              "Queries and tables and views, oh my",
              "Data loading and storage",
              "Finding the table type",
              "Row-oriented storage and partitions",
              "Row-oriented storage properties",
              "Previewing a row-oriented table",
              "Partitioning on location",
              "Using and creating indexes",
              "Finding the database indexes",
              "Creating and using an index",
              "Compare runtimes",
              "Using column-oriented storage",
              "Column-oriented storage properties",
              "Using the information schema"
           ]
        },
        {
           "title":"\n          Assessing Query Performance\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn the lingo of the Query Lifecycle and dive into the query planner. Explore how the query planner creates and optimizes the query plan. Find your next vacation locale by looking for countries with recent population growth while also seeing how a join impacts the query steps. Fine tune your optimization techniques by seeing how different filters speed your query times. \n  ",
           "parts":[
              "Query lifecycle and the planner",
              "Exploring pg_tables",
              "Basic EXPLAIN",
              "Index scans",
              "EXPLAIN the WHERE",
              "A deeper dive into EXPLAIN",
              "EXPLAIN parameters",
              "Aggregating and sorting populations",
              "Joining in the query plan",
              "Query structure and query execution",
              "Subqueries vs. CTEs",
              "Why the difference?",
              "Filtering impacts",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL"
     ],
     "tracks":[
        "SQL for Database Administrators"
     ]
  },
  {
     "title":"Transactions and Error Handling in PostgreSQL",
     "description":"Ensure data consistency by learning how to use transactions and handle errors in concurrent environments.",
     "detailDescription":"Being able to leverage transactions and find and handle errors is critical to building resilient SQL scripts and working with databases. Transactions provide the protection needed to ensure that your data is consistent and operations work on the desired data in concurrent environments. Improper error handling can cause many serious and unexpected issues. Without the proper use of transactions and error handling, it's possible to make decisions based on incorrect data leading to false outcomes. In this course, we'll cover proper ways to use transactions and handle errors with a record of what went wrong. Additionally, we discuss how concurrently plays into the use of transactions and data outcomes. We'll practice these concepts on the FFEIC bank health data and with a patient data table.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Getting to know transactions\n        ",
           "index":"1",
           "description":"\n    This chapter focuses on learning about single and multistatement transactions and the read committed isolation level.\n  ",
           "parts":[
              "Welcome to Transactions and Error Handling in PostgreSQL",
              "Transaction structure",
              "Making our first transaction",
              "Multiple statement transactions",
              "Transaction sizes and PostgreSQL protections",
              "Using and making transactions",
              "Single statement transactions",
              "Isolation levels",
              "Selecting isolation levels",
              "Using an isolation level",
              "Isolation levels and transactions"
           ]
        },
        {
           "title":"\n          Rolling back and Savepoints\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    How to rollback when an error is encountered in a transaction block and setting savepoints.\n  ",
           "parts":[
              "Handling mistakes",
              "Using rollbacks",
              "Multistatement Rollbacks",
              "Rolling back to a savepoint",
              "Working with a single savepoint",
              "Rolling back with a savepoint",
              "Multiple savepoints and rollback",
              "Multiple savepoints",
              "Savepoints and rolling back",
              "Understanding outcomes",
              "Isolation levels, savepoints, and rollbacks",
              "Working with repeatable read",
              "Isolation levels comparison",
              "Savepoint's effect on isolation levels"
           ]
        },
        {
           "title":"\n          Handling exceptions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll learn about exceptions and how to handle them.\n  ",
           "parts":[
              "Catching exceptions",
              "Writing do statements",
              "Using exception handling wisely",
              "Handling exceptions",
              "Rollbacks, savepoints and exceptions",
              "Multiple exception blocks",
              "Understanding rollbacks and savepoints",
              "Specific exception handling and messages",
              "Capturing specific exceptions",
              "Logging messages on specific exceptions",
              "Graceful exception handling",
              "When to use graceful degradation",
              "Graceful degradation"
           ]
        },
        {
           "title":"\n          Stacked Diagnostics\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    With stacked diagnostics, you can get all the information available from PostgreSQL about an exception.\n  ",
           "parts":[
              "Enhancing exception handling with stacked diagnostics",
              "Getting stacked diagnostics",
              "What data is available in stacked diagnostics",
              "Hints to help handle nested exceptions",
              "Capturing a context stack",
              "When to add custom exception logging and recording",
              "Mixing it all together with debugging functions",
              "Creating named functions and declaring variables",
              "Structure of stacked diagnostics function",
              "Putting it all together",
              "Wrapping it up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Oracle SQL",
     "description":"Learn how to import and manipulate data with Oracle SQL.",
     "detailDescription":"Oracle SQL is one of the most widely used database management system around the world. It's well suited to power primarily commercial and enterprise applications, and is particularly popular at large companies with mission-critical databases. Mastering Oracle SQL is therefore guaranteed to open exciting opportunities.\n\nIn this course, you will get a complete introduction to Oracle SQL solving business problems for a digital media store. You will first learn how to access, retrieve and restrict data. You will then perform aggregation and combine tables. The last chapter will have you handle missing values and convert data. By the end of this course, you will understand how Oracle processes SQL queries and will have a solid foundation in Oracle SQL.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          SQL Basics\n        ",
           "index":"1",
           "description":"\n    You're about to write your first Oracle SQL queries! At the end of this chapter, you will be able to retrieve, order and filter data.\n  ",
           "parts":[
              "What is an Oracle database?",
              "Writing your first query",
              "Relational databases",
              "Retrieving data",
              "Removing duplicates",
              "Working with strings",
              "Arithmetic expressions",
              "Ordering",
              "Restricting data",
              "Comparison operators",
              "Logical operators",
              "Comparison keywords"
           ]
        },
        {
           "title":"\n          Aggregating Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Sometimes, you need to perform operations on a group of data, and get aggregated results. This second chapter will show you how. You will also learn about data types.\n  ",
           "parts":[
              "Group functions",
              "Getting started with group functions",
              "Counting",
              "Data types",
              "Creating groups of data",
              "Grouping",
              "Advanced grouping",
              "Restricting group results",
              "Restricting groups",
              "More restricting",
              "Combining WHERE and HAVING"
           ]
        },
        {
           "title":"\n          Combining Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    What if your data is spread across multiple tables? This third chapter will show you how to join several tables, and how to perform queries and operations on them.\n  ",
           "parts":[
              "Using joins",
              "Inner joins",
              "Using USING",
              "Joining multiple tables",
              "Outer joins",
              "Picking an outer join type",
              "Left outer join",
              "Right outer join",
              "More joins",
              "Cross joins",
              "Self joins",
              "Set operators",
              "I want it all",
              "Under pressure",
              "Another one bites the dust"
           ]
        },
        {
           "title":"\n          Taking it to the Next Level\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    By now, you already have some solid basics. Let's take it a step further and understand how Oracle SQL interprets your queries. You will then learn how to customize your outputs, handle missing values, and how to convert data from one type to another.\n  ",
           "parts":[
              "Query processing order",
              "Order of execution of a query",
              "Mistakes against query processing order",
              "Customizing output",
              "Rounding numbers",
              "Working with the modulo",
              "Manipulating strings",
              "Replacing letters",
              "Working with NULL values",
              "Testing if a value is NULL",
              "Replacing NULL values",
              "Comparing values",
              "Using conversion functions",
              "Implicit and explicit conversion",
              "Conversion functions",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[

     ]
  },
  {
     "title":"Improving Query Performance in SQL Server",
     "description":"In this course, students will learn to write queries that are both efficient and easy to read and understand.",
     "detailDescription":"A mission critical assignment is depending on your SQL coding skills. You’ve been given some code to fix. It is giving the results you need but it’s running too slow, and it’s poorly formatted making it hard to read. The deadline is tomorrow. You’ll need to reformat the code and try different methods to improve performance. The pressure is on!!! In this course we’ll be using SQL on real world datasets, from sports and geoscience, to look at good coding practices and different ways how we can can improve the performance of queries to achieve the same outcome.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n           Introduction, Review and The Order of Things\n        ",
           "index":"1",
           "description":"\n    In this chapter, students will learn how SQL code formatting, commenting, and aliasing is used to make queries easy to read and understand.  Students will also be introduced to query processing order in the database versus the order of the SQL syntax in a query.\n  ",
           "parts":[
              "Introduction",
              "Formatting - player BMI",
              "Commenting - player BMI",
              "Commenting - how many Kiwis in the NBA?",
              "Aliasing",
              "Ambiguous column names",
              "Aliasing - team BMI",
              "Query order",
              "Processing order",
              "Syntax order - New Zealand earthquakes",
              "Syntax order - Japan earthquakes",
              "Syntax order - very large earthquakes"
           ]
        },
        {
           "title":"\n          Filtering and Data Interrogation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces filtering with WHERE and HAVING and some best practices for how (and how not) to use these keywords. Next, it explains the methods used to interrogate data and the effects these may have on performance.  Finally, the chapter goes over the roles of DISTINCT() and UNION in removing duplicates and their potential effects on performance.\n  ",
           "parts":[
              "Filtering with WHERE",
              "Column does not exist",
              "Functions in WHERE",
              "Test your knowledge of WHERE",
              "Filtering with HAVING",
              "Row filtering with HAVING",
              "Filtering with WHERE and HAVING",
              "Test your knowledge of HAVING",
              "Interrogation after SELECT",
              "SELECT what you need",
              "Limit the rows with TOP",
              "Should I use ORDER BY?",
              "Managing duplicates",
              "Remove duplicates with DISTINCT()",
              "UNION and UNION ALL",
              "UNION or DISTINCT()?"
           ]
        },
        {
           "title":"\n          Sub-queries and presence or absence\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter is an introduction to sub-queries and their potential impacts on query performance.  It also examines the different methods used to determine if the data in one table is present, or absent, in a related table.\n  ",
           "parts":[
              "Sub-queries",
              "Uncorrelated sub-query",
              "Correlated sub-query",
              "Sub-query vs INNER JOIN",
              "Presence and absence",
              "INTERSECT",
              "EXCEPT",
              "Interrogating with INTERSECT",
              "Alternative methods 1",
              "IN and EXISTS",
              "NOT IN and NOT EXISTS",
              "NOT IN with IS NOT NULL",
              "Alternative methods 2",
              "INNER JOIN",
              "Exclusive LEFT OUTER JOIN",
              "Test your knowledge"
           ]
        },
        {
           "title":"\n          Query performance tuning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Students are introduced to how STATISTICS TIME, STATISTICS IO, indexes, and executions plans can be used in SQL Server to help analyze and tune query performance.\n  ",
           "parts":[
              "Time statistics",
              "STATISTICS TIME in queries",
              "STATISTICS TIME results",
              "Page read statistics",
              "STATISTICS IO: Example 1",
              "STATISTICS IO: Example 2",
              "STATISTICS IO comparison",
              "Indexes",
              "Test your knowledge of indexes",
              "Clustered index",
              "Execution plans",
              "Sort operator in execution plans",
              "Test your knowledge of execution plans",
              "Query performance tuning: final notes"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL Server"
     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "Data Engineer with Python",
        "SQL Server for Database Administrators",
        "SQL Server Toolbox"
     ]
  },
  {
     "title":"Applying SQL to Real-World Problems",
     "description":"Find tables, store and manage new tables and views, and write maintainable SQL code to answer business questions.",
     "detailDescription":"Now that you’ve learned the basic tools of SQL you are ready to synthesize them into practical, real-world skills. In this course, you will work with a database of a fictional movie rental company. The size and complexity of this database will allow you to experience the challenges of working with databases firsthand. Throughout this course, you will use SQL to answer business-driven questions. You will learn new skills that will empower you to find the tables you need. You will then learn how to store and manage this data in tables and views that you create. Best of all you will also learn how to write code that not only clearly conveys your intent but is also legible.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Use Real-World SQL\n        ",
           "index":"1",
           "description":"\n    You will review some of the most commonly used SQL commands to ensure you are prepared to tackle both real-world problems as well as every exercise covered in this course.\n  ",
           "parts":[
              "Essential SQL",
              "Review the essentials",
              "Practice the essentials",
              "Transforming your results",
              "Transform numeric & strings",
              "Extract what you need",
              "Working with aggregate functions",
              "Aggregating finances",
              "Aggregating strings",
              "Which tables?"
           ]
        },
        {
           "title":"\n          Find Your Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    How do you find the data you need in your database in order to answer real-world business questions?  Here you will learn how to use system tables to explore your database. You will use these tables to create a new tool that contains a list of all tables and columns in your database. Finally, you will create an Entity Relationship Diagram (ERD) which will help you connect multiple tables.\n  ",
           "parts":[
              "Find the right table",
              "LIMITing your search",
              "Which table to use?",
              "What tables are in your database?",
              "Determine the monthly income",
              "Join the correct tables",
              "What columns are in your database?",
              "A VIEW of all your columns",
              "Testing out your new VIEW",
              "The average length of films by category",
              "Complex joins",
              "Build the entity relationship diagram",
              "Which films are most frequently rented?"
           ]
        },
        {
           "title":"\n          Manage Your Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Working with SQL to solve real-world problems will oftentimes require you to do more than retrieve the data you need, oftentimes you will need to manage the data in your database. This includes creating data, updating it and, when necessary, deleting it.\n  ",
           "parts":[
              "Store your data",
              "Storing new data",
              "Using existing data",
              "TABLE vs VIEW",
              "Update your data",
              "What should you modify?",
              "Update the price of rentals",
              "Updated based on other tables",
              "Delete your data",
              "Deleting all table data",
              "Delete selected records",
              "A family friendly video store"
           ]
        },
        {
           "title":"\n          Best Practices for Writing SQL\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    How do you ensure that the SQL scripts you write will be easy to understand for anyone who needs to read them? This chapter will cover approaches you can leverage to ensure that your code clearly conveys your intent, is readable by others and follows best practices.\n  ",
           "parts":[
              "Convey your intent",
              "How to convey our intent",
              "Clarify the intent of this query",
              "Fix this query - intent",
              "Write readable code",
              "How to make code easier to read",
              "Make this query easier to read - Part I",
              "Make this query easier to read - Part II",
              "Avoid common mistakes",
              "What are the don'ts of writing SQL code?",
              "Apply best practices to your code",
              "Recap"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL"
     ],
     "tracks":[
        "SQL for Business Analysts"
     ]
  },
  {
     "title":"Reporting in SQL",
     "description":"Learn how to build your very own dashboard by applying all the SQL concepts and functions you have learned in previous courses.",
     "detailDescription":"Become a master at building complex reports! In this course, you will apply all the SQL concepts and functions you have learned in previous courses to build out your very own dashboard. By navigating through an Olympics database, you will become an expert data explorer and learn how to understand novel database quickly and effectively. Since data is never perfect, you will gain valuable strategies to deal with real-world issues commonly found with SQL, including how to remove data duplication and how to turn messy data into clean, organized reports. Lastly, you’ll conquer complex calculations using window functions and layered calculations, all within the same report. This is a perfect class for anyone who will be commonly pulling data from databases and is a great complement for those who use R or Python for data science.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploring the Olympics Dataset \n        ",
           "index":"1",
           "description":"\n    Before you can start building out reports to answer specific questions, you should get familiar with the data.  In this chapter, you will learn how to use E:R diagrams and data exploration techniques to get a solid understanding of the data to better answer business-related questions.\n  ",
           "parts":[
              "Case study",
              "Identifying the base report",
              "Building the base report",
              "Athletes vs events by sport",
              "The Olympics dataset",
              "Planning queries with an E:R diagram",
              "Age of oldest athlete by region",
              "Number of events in each sport",
              "Exploring our data",
              "Exploring summer_games",
              "Validating our query",
              "Report 1: Most decorated summer athletes"
           ]
        },
        {
           "title":"\n          Creating Reports\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Queries can get large,  fast. It's important to take a logical approach when building more complicated queries. In this chapter, you will take a step-by-step approach to plan and build a complex query that requires you to combine tables in multiple ways and create different types of fields.\n  ",
           "parts":[
              "Planning the query",
              "Planning the SELECT statement",
              "Planning the filter",
              "Combining tables",
              "JOIN then UNION query",
              "UNION then JOIN query",
              "Creating custom fields",
              "CASE statement refresher",
              "BMI bucket by sport",
              "Troubleshooting CASE statements",
              "Filtering and finishing touches",
              "Filtering with a JOIN",
              "Filtering with a subquery",
              "Report 2: Top athletes in nobel-prized countries"
           ]
        },
        {
           "title":"\n          Cleaning & Validation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Although it would be nice, data in the real-world is rarely stored in an ideal way.  Simply put: data can get messy.  In chapter 3, you will learn how to deal with this messy data by fixing data type issues, cleaning messy strings, handling nulls, and removing duplication.\n  ",
           "parts":[
              "Converting data types",
              "Identifying data types",
              "Interpreting error messages",
              "Using date functions on strings",
              "Cleaning strings",
              "String functions",
              "Replacing and removing substrings",
              "Fixing incorrect groupings",
              "Dealing with nulls",
              "Filtering out nulls",
              "Fixing calculations with coalesce",
              "Report duplication",
              "Identifying duplication",
              "Fixing duplication through a JOIN",
              "Report 3: Countries with high medal rates"
           ]
        },
        {
           "title":"\n          Complex Calculations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The value of reporting really shows when presenting not-so-obvious insights through complex calculations.  In this chapter, you will learn how to build more complicated fields by leveraging window functions and layered calculations. You will gain hands-on experience building two advanced calculations in particular: the percent of a total calculation and the performance index calculation.\n  ",
           "parts":[
              "Building complex calculations",
              "Testing out window functions",
              "Average total country medals by region",
              "Most decorated athlete per region",
              "Comparing groups",
              "Volume vs efficiency metrics",
              "Percent of gdp per country",
              "GDP per capita performance index",
              "Comparing dates",
              "Month-over-month comparison",
              "Week-over-week comparison",
              "Report 4: Tallest athletes and % GDP by region",
              "Course summary"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL"
     ],
     "tracks":[
        "SQL for Business Analysts"
     ]
  },
  {
     "title":"Functions for Manipulating Data in SQL Server",
     "description":"Learn the most important functions for manipulating, processing, and transforming data in SQL Server.",
     "detailDescription":"In this course, you will learn how to make use of the most important functions for manipulating data provided by SQL Server. You can use these functions for processing and transforming data to get the results you want.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Choosing the appropriate data type\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will learn what are the most used data types in SQL Server. You will understand the differences between implicit and explicit conversion and how each type of conversion manifests. You will also get familiar with the functions used for explicitly converting data: CAST() and CONVERT().\n  ",
           "parts":[
              "Welcome to this course!",
              "Working with different types of data",
              "Storing dates in a database",
              "Types of character strings",
              "Implicit conversion",
              "Implicit conversion between data types",
              "Data type precedence",
              "Explicit conversion",
              "CASTing data",
              "CONVERTing data",
              "Working with the correct data types"
           ]
        },
        {
           "title":"\n          Manipulating time\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Date and time functions are an important topic for databases. In this chapter, you will get familiar with the most common functions for date and time manipulation. You will learn how to retrieve the current date, only parts from a date, to assemble a date from pieces and to check if an expression is a valid date or not.\n  ",
           "parts":[
              "Functions that return system date and time",
              "Get the know the system date and time functions",
              "Selecting parts of the system's date and time",
              "Functions returning date and time parts",
              "Extracting parts from a date",
              "Generating descriptive date parts",
              "Presenting parts of a date",
              "Creating a date from parts",
              "Performing arithmetic operations on dates",
              "Arithmetic operations with dates",
              "Modifying the value of a date",
              "Calculating the difference between dates",
              "Validating if an expression is a date",
              "Changing the date format",
              "Changing the default language",
              "Correctly applying different date functions"
           ]
        },
        {
           "title":"\n          Working With Strings\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Strings are one of the most commonly used data types in databases. It's important to know what you can do with them. In this chapter, you will learn how to manipulate strings, to get the results you want.\n  ",
           "parts":[
              "Functions for positions",
              "Calculating the length of a string",
              "Looking for a string within a string",
              "Looking for a pattern within a string",
              "Functions for string transformation",
              "Changing to lowercase and uppercase",
              "Using the beginning or end of a string",
              "Extracting a substring",
              "Replacing parts of a string",
              "Functions manipulating groups of strings",
              "Concatenating data",
              "Aggregating strings",
              "Splitting a string into pieces",
              "Applying various string functions on data"
           ]
        },
        {
           "title":"\n          Recognizing Numeric Data Properties\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will work with functions applied to numeric data. You will use aggregate functions for calculating the minimum, maximum or the sum of values from a set. You will learn how to raise a number to a power or to calculate its square root. \n\n  ",
           "parts":[
              "Aggregate arithmetic functions",
              "Learning how to count and add",
              "MINimizing and MAXimizing some results",
              "Analytic functions",
              "Accessing values from the next row",
              "Accessing values from the previous row",
              "Getting the first and last value",
              "Mathematical functions",
              "Extracting the sign and the absolute value",
              "Rounding numbers",
              "Working with exponential functions",
              "Manipulating numeric data",
              "Wrapping things up"
           ]
        }
     ],
     "prerequistes":[
        "Time Series Analysis in SQL Server"
     ],
     "tracks":[
        "Data Analyst with SQL Server",
        "SQL Server Fundamentals",
        "SQL Server Toolbox"
     ]
  },
  {
     "title":"Analyzing Business Data in SQL",
     "description":"Learn to write SQL queries to calculate key metrics that businesses use to measure performance.",
     "detailDescription":"Businesses track data on everything, from operations to marketing to HR. Leveraging this data enables businesses to better understand themselves and their customers, leading to higher profits and better performance. In this course, you’ll learn about the key metrics that businesses use to measure performance. You'll write SQL queries to calculate these metrics and produce report-ready results. Throughout the course, you'll study data from a fictional food delivery startup, modeled on data from real companies.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Revenue, cost, and profit\n        ",
           "index":"1",
           "description":"\n    Profit is one of the first things people use to assess a company's success. In this chapter, you'll learn how to calculate revenue and cost, and then combine the two calculations using Common Table Expressions to calculate profit.\n  ",
           "parts":[
              "Revenue",
              "Revenue per customer",
              "Revenue per week",
              "Cost and Common Table Expressions (CTEs)",
              "Total  cost",
              "Top meals by cost",
              "Using CTEs",
              "Profit",
              "Profit per eatery",
              "Profit per month"
           ]
        },
        {
           "title":"\n          User-centric KPIs\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Financial KPIs like profit are important, but they don't speak to user activity and engagement. In this chapter, you'll learn how to calculate the registrations and active users KPIs, and use window functions to calculate the user growth and retention rates.\n  ",
           "parts":[
              "Registrations and active users",
              "Registrations by month",
              "Monthly active users (MAU)",
              "Window functions",
              "Registrations running total",
              "MAU monitor (I)",
              "Growth",
              "MAU monitor (II)",
              "MAU monitor (III)",
              "Order growth rate",
              "Retention",
              "New, retained, and resurrected users",
              "Retention rate"
           ]
        },
        {
           "title":"\n          ARPU, histograms, and percentiles\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Since a KPI is a single number, it can't describe how data is distributed. In this chapter, you'll learn about unit economics, histograms, bucketing, and percentiles, which you can use to spot the variance in user behaviors.\n  ",
           "parts":[
              "Unit economics",
              "Average revenue per user",
              "ARPU per week",
              "Average orders per user",
              "Histograms",
              "Histogram of revenue",
              "Histogram of orders",
              "Bucketing",
              "Bucketing users by revenue",
              "Bucketing users by orders",
              "Percentiles",
              "Revenue quartiles",
              "Interquartile range"
           ]
        },
        {
           "title":"\n          Generating an executive report\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Executives often use the KPIs you've calculated in the three previous chapters to guide business decisions. In this chapter, you'll package the KPIs you've created into a readable report you can present to managers and executives.\n  ",
           "parts":[
              "Survey of useful functions",
              "Formatting dates",
              "Rank users by their count of orders",
              "Pivoting",
              "Pivoting user revenues by month",
              "Costs",
              "Producing executive reports",
              "Report readability",
              "Executive report",
              "Course recap"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL"
     ],
     "tracks":[
        "SQL for Business Analysts"
     ]
  },
  {
     "title":"Data-Driven Decision Making in SQL",
     "description":"Learn how to analyze a SQL table and report insights to management.",
     "detailDescription":"In this course, you will learn how to use SQL to support decision making. It is based on a case study about an online movie rental company with a database about customer information, movie ratings, background information on actors and more. You will learn to apply SQL queries to study for example customer preferences, customer engagement, and sales development. This course also covers SQL extensions for online analytical processing (OLAP), which makes it easier to obtain key insights from multidimensional aggregated data.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to business intelligence for a online movie rental database\n        ",
           "index":"1",
           "description":"\n    The first chapter is an introduction to the use case of an online movie rental company, called MovieNow and focuses on using simple SQL queries to extract and aggregated data from its database.\n  ",
           "parts":[
              "Introduction to data driven decision making",
              "Exploring the database",
              "Exploring the table renting",
              "Filtering and ordering",
              "Working with dates",
              "Selecting movies",
              "Select from renting",
              "Aggregations - summarizing data",
              "Summarizing customer information",
              "Ratings of movie 25",
              "Examining annual rentals"
           ]
        },
        {
           "title":"\n          Decision Making with simple SQL queries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    More complex queries with GROUP BY, LEFT JOIN and sub-queries are used to gain insight into customer preferences.\n  ",
           "parts":[
              "Grouping movies",
              "First account for each country.",
              "Average movie ratings",
              "Average rating per customer",
              "Joining movie ratings with customer data",
              "Join renting and customers",
              "Aggregating revenue, rentals and active customers",
              "Movies and actors",
              "Money spent per customer with sub-queries",
              "Income from movies",
              "Age of actors from the USA",
              "Identify favorite actors of customer groups",
              "Identify favorite movies for a group of customers",
              "Identify favorite actors for Spain",
              "KPIs per country"
           ]
        },
        {
           "title":"\n          Data Driven Decision Making with advanced SQL queries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The concept of nested queries and correlated nested queries is introduced and the functions EXISTS and UNION  are used to categorize customers, movies, actors, and more.\n  ",
           "parts":[
              "Nested query",
              "Often rented movies",
              "Frequent customers",
              "Movies with rating above average",
              "Correlated nested queries",
              "Analyzing customer behavior",
              "Customers who gave low ratings",
              "Movies and ratings with correlated queries",
              "Queries with EXISTS",
              "Customers with at least one rating",
              "Actors in comedies",
              "Queries with UNION and INTERSECT",
              "Young actors not coming from the USA",
              "Dramas with high ratings"
           ]
        },
        {
           "title":"\n          Data Driven Decision Making with OLAP SQL queries\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The OLAP extensions in SQL are introduced and applied to aggregated data on multiple levels.  These extensions are the CUBE, ROLLUP and GROUPING SETS operators.\n  ",
           "parts":[
              "OLAP: CUBE operator",
              "Groups of customers",
              "Categories of movies",
              "Analyzing average ratings",
              "ROLLUP",
              "Number of customers",
              "Analyzing preferences of genres across countries",
              "GROUPING SETS",
              "Queries with GROUPING SETS",
              "Exploring nationality and gender of actors",
              "Exploring rating by country and gender",
              "Bringing it all together",
              "Customer preference for genres",
              "Customer preference for actors"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL"
     ],
     "tracks":[
        "SQL for Business Analysts"
     ]
  },
  {
     "title":"Cleaning Data in SQL Server Databases",
     "description":"Develop the skills you need to clean raw data and transform it into accurate insights.",
     "detailDescription":"Did you know that data scientists and data analysts spend a large amount of time cleaning data before they can analyze it? This is because real-world data is messy. To help you navigate messy data this course teaches you how to clean data stored in an SQL Server database. You’ll learn how to solve common problems such as how to clean messy strings, deal with empty values, compare the similarity between strings, and much more. You’ll get hands-on with all these tasks using a wide range of interesting and messy datasets, including monthly airline flights by airport, TV series and paper shop sales. Are you ready to get your hands messy?",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Starting with Cleaning Data\n        ",
           "index":"1",
           "description":"\n    To begin the course, you will learn why cleaning data is important. You will solve simple problems such as leading and trailing spaces in strings, unifying formats for flight registrations, combining strings and more. \n  ",
           "parts":[
              "Introduction to Cleaning Data",
              "Unifying flight formats I",
              "Unifying flight formats II",
              "Cleaning messy strings",
              "Trimming strings I",
              "Trimming strings II",
              "Unifying strings",
              "Comparing the similarity between strings",
              "SOUNDEX() and DIFFERENCE()",
              "Comparing names with SOUNDEX()",
              "Comparing names with DIFFERENCE()"
           ]
        },
        {
           "title":"\n          Dealing with missing data, duplicate data, and different date formats\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will deepen your data cleaning knowledge. You will learn how to deal with missing data,  avoid duplicate data in your datasets, and work with different formats of dates.\n  ",
           "parts":[
              "Dealing with missing data",
              "Removing missing values",
              "Removing blank spaces",
              "Filling missing values using ISNULL()",
              "Filling missing values using  COALESCE()",
              "Avoiding duplicate data",
              "Diagnosing duplicates",
              "Treating duplicates",
              "Dealing with different date formats",
              "Using CONVERT()",
              "Using FORMAT()",
              "CONVERT() vs FORMAT()"
           ]
        },
        {
           "title":"\n          Dealing with out of range values, different data types, and pattern matching\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will deal with out of range values and inaccurate data. You will also practice converting data with different types. Finally, you will work on matching patterns to your data to find outliers.\n  ",
           "parts":[
              "Out of range values and inaccurate data",
              "Out of range values or inaccurate data?",
              "Detecting out of range values",
              "Excluding out of range values",
              "Detecting and excluding inaccurate data",
              "Converting data with different types",
              "Using CAST() and CONVERT()",
              "The series with most episodes",
              "Pattern matching",
              "Characters to specify a patterns",
              "Matching urls",
              "Checking phone numbers"
           ]
        },
        {
           "title":"\n          Combining, splitting, and transforming data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter,  you will learn how to combine and aggregate data of some columns into one, split data of one column into more columns,  and transform rows into columns and vice versa.\n  ",
           "parts":[
              "Combining data of some columns into one column",
              "Combining  cities and states using +",
              "Concatenating cities and states",
              "Working with DATEFROMPARTS()",
              "Splitting data of one column into more columns",
              "Using SUBSTRING() and CHARINDEX()",
              "Using RIGHT() , LEFT() and REVERSE()",
              "SUBSTRING() or CHARINDEX()?",
              "Transforming rows into columns and vice versa",
              "PIVOT or UNPIVOT?",
              "Turning rows into columns",
              "Turning columns into rows",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate SQL Server"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Git",
     "description":"This course is an introduction to version control with Git for data scientists.",
     "detailDescription":"Version control is one of the power tools of programming. It allows you to keep track of what you did when, undo any changes you decide you don't want, and collaborate at scale with other people. This course will introduce you to Git, a modern version control tool that is very popular with data scientists and software developers, and show you how to use it to get more done in less time and with less pain.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Basic workflow\n        ",
           "index":"1",
           "description":"\n    This chapter explains what version control is and why you should use it, and introduces the most common steps in a common Git workflow.\n  ",
           "parts":[
              "What is version control?",
              "Where does Git store information?",
              "How can I check the state of a repository?",
              "How can I tell what I have changed?",
              "What is in a diff?",
              "What's the first step in saving changes?",
              "How can I tell what's going to be committed?",
              "Interlude: how can I edit a file?",
              "How do I commit changes?",
              "How can I view a repository's history?",
              "How can I view a specific file's history?",
              "How do I write a better log message"
           ]
        },
        {
           "title":"\n          Repositories\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter digs a little deeper into how Git stores information and how you can explore a repository's history.\n  ",
           "parts":[
              "How does Git store information?",
              "What is a hash?",
              "How can I view a specific commit?",
              "What is Git's equivalent of a relative path?",
              "How can I see who changed what in a file?",
              "How can I see what changed between two commits?",
              "How do I add new files?",
              "How do I tell Git to ignore certain files?",
              "How can I remove unwanted files?",
              "How can I see how Git is configured?",
              "How can I change my Git configuration?"
           ]
        },
        {
           "title":"\n          Undo\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Since Git saves all the changes you've made to your files, you can use it to undo those changes. This chapter shows you several ways to do that.\n  ",
           "parts":[
              "How can I commit changes selectively?",
              "How do I re-stage files?",
              "How can I undo changes to unstaged files?",
              "How can I undo changes to staged files?",
              "How do I restore an old version of a file?",
              "How can I undo all of the changes I have made?"
           ]
        },
        {
           "title":"\n          Working with branches\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Branching is one of Git's most powerful features, since it allows you to work on several things at once. This chapter shows you how to create and manage branches.\n  ",
           "parts":[
              "What is a branch?",
              "How can I see what branches my repository has?",
              "How can I view the differences between branches?",
              "How can I switch from one branch to another?",
              "How can I create a branch?",
              "How can I merge two branches?",
              "What are conflicts?",
              "How can I merge two branches with conflicts?"
           ]
        },
        {
           "title":"\n          Collaborating\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter showcases how Git allows you to share changes between repositories to collaborate at scale.\n  ",
           "parts":[
              "How can I create a brand new repository?",
              "How can I turn an existing project into a Git repository?",
              "How can I create a copy of an existing repository?",
              "How can I find out where a cloned repository originated?",
              "How can I define remotes?",
              "How can I pull in changes from a remote repository?",
              "What happens if I try to pull when I have unsaved changes?",
              "How can I push my changes to a remote repository?",
              "What happens if my push conflicts with someone else's work?"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Anaconda Skills"
     ]
  },
  {
     "title":"Conda Essentials",
     "description":"Learn how to easily manage your software using conda.",
     "detailDescription":"Software is constantly evolving, so data scientists need a way to update the software they are using without breaking things that already work. Conda is an open source, cross-platform tool for managing packages and working environments for many different programming languages. This course explains how to use its core features to manage your software so that you and your colleagues can reproduce your working environments reliably with minimum effort.",
     "time":"3 hours",
     "chapters":[
        {
           "title":"\n          Installing Packages\n        ",
           "index":"1",
           "description":"\n    This chapter shows you how to install, update and remove packages using conda. \n  ",
           "parts":[
              "What are packages and why are they needed?",
              "What version of conda do I have?",
              "Install a conda package (I)",
              "Install a conda package (II)",
              "What is semantic versioning?",
              "Which package version is installed?",
              "Install a specific version of a package (I)",
              "Install a specific version of a package (II)",
              "Update a conda package",
              "Remove a conda package",
              "Search for available package versions?",
              "Find dependencies for a package version?"
           ]
        },
        {
           "title":"\n          Utilizing Channels\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you will learn how to search and install packages from various channels with Conda.\n  ",
           "parts":[
              "Channels and why are they needed?",
              "Searching within channels",
              "Searching across channels",
              "Default, non-default, and special channels",
              "Installing from a channel"
           ]
        },
        {
           "title":"\n          Working with Environments\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter shows you how work with Conda environments.\n  ",
           "parts":[
              "Environments and why are they needed?",
              "Which environment am I using?",
              "What packages are installed in an environment? (I)",
              "What packages are installed in an environment? (II)",
              "Switch between environments",
              "Remove an environment",
              "Create a new environment",
              "Export an environment",
              "Create an environment from a shared specification"
           ]
        },
        {
           "title":"\n          Case Study on Using Environments\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter shows you how to easily manage projects using environments. \n  ",
           "parts":[
              "Compatibility with different versions",
              "Updating a script"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Shell"
     ],
     "tracks":[
        "Data Science for Everyone",
        "Anaconda Skills",
        "Python Programmer"
     ]
  },
  {
     "title":"Building and Distributing Packages with Conda",
     "description":"Learn how to write Conda recipes and share them on Anaconda Cloud.",
     "detailDescription":"Now that you're proficient in many areas of data science with Python it's time to share your code and data with others. In this course you'll learn the fundamentals of sharing your data science assets. You'll learn how to leverage Anaconda Projects to package data, code, and conda environments into a single archive for other data scientists to run. You'll learn the basics of creating Python packages that provide importable modules. Finally, you'll learn how to write Conda recipes for your packages, build them, and share them on Anaconda Cloud.",
     "time":"3 hours",
     "chapters":[
        {
           "title":"\n          Anaconda Project\n        ",
           "index":"1",
           "description":"\n    Anaconda Projects allow you to package code, data, and Conda environments for others to use easily. Starting with with simple data science applications you'll create Anaconda Project archives that enable reproducible data science.\n  ",
           "parts":[
              "What is an Anaconda Project?",
              "Install Anaconda-Project",
              "Prepare and run a project command",
              "Anaconda Project specification file",
              "Initialize a new project",
              "Anaconda Project commands",
              "Add packages and commands",
              "Locking package versions",
              "Sharing your project"
           ]
        },
        {
           "title":"\n          Python Packages\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter you'll learn how to transform your Python scipts into modules and packages. You'll learn how to use setuptools to specify important metadata like version numbers and licenses.\n  ",
           "parts":[
              "Python modules and packages",
              "Importing a module",
              "Modules and __name__",
              "Python package directory",
              "Importing a package",
              "The __init__.py file",
              "Create the installer script",
              "Licensing",
              "Version number",
              "Install the package"
           ]
        },
        {
           "title":"\n          Conda Packages\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you have prepared your Python package using setuptools in this chapter you'll learn how to write a Conda recipe. Conda recipes describe the required Conda packages to build and run your package. You'll then build cross-platform packages and upload them to Anaconda Cloud.\n  ",
           "parts":[
              "Conda Packages",
              "Install Conda Build",
              "The Conda recipe meta.yaml",
              "Conda package dependencies",
              "Dependent package versions",
              "Build the Conda Package",
              "Install the conda package",
              "Python versions and architectures",
              "Upload the package"
           ]
        }
     ],
     "prerequistes":[
        "Conda Essentials"
     ],
     "tracks":[
        "Anaconda Skills"
     ]
  },
  {
     "title":"Introduction to Shell",
     "description":"The Unix command line helps users combine existing programs in new ways, automate repetitive tasks, and run programs on clusters and clouds.",
     "detailDescription":"The Unix command line has survived and thrived for almost 50 years because it lets people do complex things with just a few keystrokes. Sometimes called \"the universal glue of programming,\" it helps users combine existing programs in new ways, automate repetitive tasks, and run programs on clusters and clouds that may be halfway around the world. This course will introduce its key elements and show you how to use them efficiently.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Manipulating files and directories\n        ",
           "index":"1",
           "description":"\n    This chapter is a brief introduction to the Unix shell. You'll learn why it is still in use after almost 50 years, how it compares to the graphical tools you may be more familiar with, how to move around in the shell, and how to create, modify, and delete files and folders.\n  ",
           "parts":[
              "How does the shell compare to a desktop interface?",
              "Where am I?",
              "How can I identify files and directories?",
              "How else can I identify files and directories?",
              "How can I move to another directory?",
              "How can I move up a directory?",
              "How can I copy files?",
              "How can I move a file?",
              "How can I rename files?",
              "How can I delete files?",
              "How can I create and delete directories?",
              "Wrapping up"
           ]
        },
        {
           "title":"\n          Manipulating data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The commands you saw in the previous chapter allowed you to move things around in the filesystem. This chapter will show you how to work with the data in those files. The tools we’ll use are fairly simple, but are solid building blocks.\n  ",
           "parts":[
              "How can I view a file's contents?",
              "How can I view a file's contents piece by piece?",
              "How can I look at the start of a file?",
              "How can I type less?",
              "How can I control what commands do?",
              "How can I list everything below a directory?",
              "How can I get help for a command?",
              "How can I select columns from a file?",
              "What can't cut do?",
              "How can I repeat commands?",
              "How can I select lines containing specific values?",
              "Why isn't it always safe to treat data as text?"
           ]
        },
        {
           "title":"\n          Combining tools\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The real power of the Unix shell lies not in the individual commands, but in how easily they can be combined to do new things. This chapter will show you how to use this power to select the data you want, and introduce commands for sorting values and removing duplicates.\n  ",
           "parts":[
              "How can I store a command's output in a file?",
              "How can I use a command's output as an input?",
              "What's a better way to combine commands?",
              "How can I combine many commands?",
              "How can I count the records in a file?",
              "How can I specify many files at once?",
              "What other wildcards can I use?",
              "How can I sort lines of text?",
              "How can I remove duplicate lines?",
              "How can I save the output of a pipe?",
              "How can I stop a running program?",
              "Wrapping up"
           ]
        },
        {
           "title":"\n          Batch processing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Most shell commands will process many files at once. This chapter shows you how to make your own pipelines do that. Along the way, you will see how the shell uses variables to store information.\n  ",
           "parts":[
              "How does the shell store information?",
              "How can I print a variable's value?",
              "How else does the shell store information?",
              "How can I repeat a command many times?",
              "How can I repeat a command once for each file?",
              "How can I record the names of a set of files?",
              "A variable's name versus its value",
              "How can I run many commands in a single loop?",
              "Why shouldn't I use spaces in filenames?",
              "How can I do many things in a single loop?"
           ]
        },
        {
           "title":"\n          Creating new tools\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    History lets you repeat things with just a few keystrokes, and pipes let you combine existing commands to create new ones. In this chapter, you will see how to go one step further and create new commands of your own.\n  ",
           "parts":[
              "How can I edit a file?",
              "How can I record what I just did?",
              "How can I save commands to re-run later?",
              "How can I re-use pipes?",
              "How can I pass filenames to scripts?",
              "How can I process a single argument?",
              "How can one shell script do many things?",
              "How can I write loops in a shell script?",
              "What happens when I don't provide filenames?"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Data Science for Everyone",
        "Anaconda Skills",
        "Data Engineer with Python",
        "Python Programmer",
        "R Programmer"
     ]
  },
  {
     "title":"Data Processing in Shell",
     "description":"Learn powerful command-line skills to download, process, and transform data, including machine learning pipeline.",
     "detailDescription":"We live in a busy world with tight deadlines. As a result, we fall back on what is familiar and easy, favoring GUI interfaces like Anaconda and RStudio. However, taking the time to learn data analysis on the command line is a great long-term investment because it makes us stronger and more productive data people.\n\nIn this course, we will take a practical approach to learn simple, powerful, and data-specific command-line skills. Using publicly available Spotify datasets, we will learn how to download, process, clean, and transform data, all via the command line. We will also learn advanced techniques such as command-line based SQL database operations. Finally, we will combine the powers of command line and Python to build a data pipeline for automating a predictive model.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Downloading Data on the Command Line\n        ",
           "index":"1",
           "description":"\n    In this chapter, we learn how to download data files from web servers via the command line. In the process, we also learn about documentation manuals, option flags, and multi-file processing.\n  ",
           "parts":[
              "Downloading data using curl",
              "Using curl documentation",
              "Downloading single file using curl",
              "Downloading multiple files using curl",
              "Downloading data using Wget",
              "Installing Wget",
              "Downloading single file using wget",
              "Advanced downloading using Wget",
              "Setting constraints for multiple file downloads",
              "Creating wait time using Wget",
              "Data downloading with Wget and curl"
           ]
        },
        {
           "title":"\n          Data Cleaning and Munging on the Command Line\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    We continue our data journey from data downloading to data processing.  In this chapter, we utilize the command line library csvkit to convert, preview, filter and manipulate files to prepare our data for further analyses.\n  ",
           "parts":[
              "Getting started with csvkit",
              "Installation and documentation for csvkit",
              "Converting and previewing data with csvkit",
              "File conversion and summary statistics with csvkit",
              "Filtering data using csvkit",
              "Printing column headers with csvkit",
              "Filtering data by column with csvkit",
              "Filtering data by row with csvkit",
              "Stacking data and chaining commands with csvkit",
              "Stacking files with csvkit",
              "Chaining commands using operators",
              "Data processing with csvkit"
           ]
        },
        {
           "title":"\n          Database Operations on the Command Line\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we dig deeper into all that csvkit library has to offer.  In particular, we focus on database operations we can do on the command line, including table creation, data pull, and various ETL transformation. \n  ",
           "parts":[
              "Pulling data from database",
              "Using sql2csv documentation",
              "Understand sql2csv connectors",
              "Practice pulling data from database",
              "Manipulating data using SQL syntax",
              "Applying SQL to a local CSV file",
              "Cleaner scripting via shell variables",
              "Joining local CSV files using SQL",
              "Pushing data back to database",
              "Practice pushing data back to database",
              "Database and SQL with csvkit"
           ]
        },
        {
           "title":"\n          Data Pipeline on the Command Line\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the last chapter, we bridge the connection between command line and other data science languages and learn how they can work together.  Using Python as a case study, we learn to execute Python on the command line, to install dependencies using the package manager pip, and to build an entire model pipeline using the command line.\n  ",
           "parts":[
              "Python on the command line",
              "Finding Python version on the command line",
              "Executing Python script on the command line",
              "Python package installation with pip",
              "Understanding pip's capabilities",
              "Installing Python dependencies",
              "Running a Python model",
              "Data job automation with cron",
              "Understanding cron scheduling syntax",
              "Scheduling a job with crontab",
              "Model production on the command line",
              "Course recap"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Shell",
        "Intermediate Python",
        "Introduction to SQL"
     ],
     "tracks":[
        "Data Engineer with Python"
     ]
  },
  {
     "title":"Introduction to Bash Scripting",
     "description":"Bash scripting allows you to build analytics pipelines in the cloud and work with data stored across multiple files.",
     "detailDescription":"Bash is a concise, superfast, and robust scripting language for data and file manipulation. It’s a vital skill for building analytics pipelines in the cloud, favored by Linux users to work with data stored across multiple files. In this course, we’ll guide you through the basics of Bash scripting. We begin with an introduction to Bash script structures, including inputting arguments and outputting results. You’ll then work through data structures, such as variables and arrays, and control statements, including loops and conditionals. You’ll then put what you’ve learned into practice, by creating your own Bash functions and scheduling automated scripts to run like clockwork with cron.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          From Command-Line to Bash Script\n        ",
           "index":"1",
           "description":"\n    Save yourself time when performing complex repetitive tasks. You’ll begin this course by refreshing your knowledge of common command-line programs and arguments before quickly moving into the world of Bash scripting. You’ll create simple command-line pipelines and then transform these into Bash scripts. You’ll then boost your skills and learn about standard streams and feeding arguments to your Bash scripts.\n  ",
           "parts":[
              "Introduction and refresher",
              "Extracting scores with shell",
              "Searching a book with shell",
              "Your first Bash script",
              "A simple Bash script",
              "Shell pipelines to Bash scripts",
              "Extract and edit using Bash scripts",
              "Standard streams & arguments",
              "Using arguments in Bash scripts",
              "Using arguments with HR data"
           ]
        },
        {
           "title":"\n          Variables in Bash Scripting\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Master the bread and butter of Bash scripts—variables! In this chapter, you’ll learn how to create basic string and numeric variables, and perform calculations on these variables. You’ll also learn about the magic of a shell-within-a-shell (shell-ception), opening up huge opportunities for advanced scripting.\n  ",
           "parts":[
              "Basic variables in Bash",
              "Using variables in Bash",
              "Shell within a shell",
              "Numeric variables in Bash",
              "Converting Fahrenheit to Celsius",
              "Extracting data from files",
              "Arrays in Bash",
              "Creating an array",
              "Creating associative arrays",
              "Climate calculations in Bash"
           ]
        },
        {
           "title":"\n          Control Statements in Bash Scripting\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Life isn't always linear and neither should your Bash scripts. In this chapter, you’ll take your Bash scripts to the next level by learning control statements. You’ll learn the differences between FOR, WHILE, IF, and CASE statements and how to use them in your Bash scripts. Armed with these new tools, you’ll be ready to create more advanced Bash scripts with conditional logic. \n  ",
           "parts":[
              "IF statements",
              "Sorting model results",
              "Moving relevant files",
              "FOR loops & WHILE statements",
              "A simple FOR loop",
              "Correcting a WHILE statement",
              "Cleaning up a directory",
              "CASE statements",
              "Days of the week with CASE",
              "Moving model results with CASE",
              "Finishing a CASE statement"
           ]
        },
        {
           "title":"\n          Functions and Automation\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Give your Bash scripts a powerful new addition by building useful functions to process data and variables. In this last chapter, you will learn the structure of functions in Bash, how to use functions to help automate frequent tasks, and program your scripts to run on schedule without needing to even lift a finger.\n  ",
           "parts":[
              "Basic functions in Bash",
              "Uploading model results to the cloud",
              "Get the current day",
              "Arguments, return values, and scope",
              "A percentage calculator",
              "Sports analytics function",
              "Summing an array",
              "Scheduling your scripts with Cron",
              "Analyzing a crontab schedule",
              "Creating cronjobs",
              "Scheduling cronjobs with crontab",
              "Thanks and wrap up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Shell"
     ],
     "tracks":[
        "Data Engineer with Python"
     ]
  },
  {
     "title":"Data Visualization in Spreadsheets",
     "description":"Learn the fundamentals of data visualization using spreadsheets.",
     "detailDescription":"A picture can tell a thousand words - but only if you use the right picture! This course teaches you the fundamentals of data visualization with Google Sheets. You'll learn how to create common chart types like bar charts, histograms, and scatter charts, as well as more advanced types, such as sparkline and candlestick charts. You will look at how to prepare your data and use Data Validation and VLookup formulas to target specific data to chart. You'll learn how to use Conditional Formatting to apply a format to a cell or a range of cells based on certain criteria, and finally, how to create a dashboard showing plots and data together. Along the way, you'll use data from the Olympics, sharks attacks, and Marine Technology from the ASX.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Business Intelligence and Using Dashboards\n        ",
           "index":"1",
           "description":"\n    Learn about business intelligence and dashboards for analyzing information in todays data-driven world.  Create a basic dashboard and master setting up your data to get the most out of it.\n  ",
           "parts":[
              "Using Sheets as a Business Intelligence platform",
              "Using data validation controls view medal tallies",
              "Using data validation controls to pick from a list",
              "Using conditional formatting on a dashboard ",
              "Setting up a basic dashboard",
              "Creating a column chart from your data",
              "Setting up your worksheet with formulas of reference",
              "Charting the medal statistics",
              "Setting up your data",
              "Getting started",
              "Format dates and numbers"
           ]
        },
        {
           "title":"\n          Efficient Column Charts\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Create and format a column chart to showcase data and learn a few smart tricks along the way.  Look at using named ranges to refer to cells in your worksheet, making them user-friendly and easy to work with.\n  ",
           "parts":[
              "Efficient column charts",
              "Creating a column chart for your dashboard",
              "Format chart, axis titles and series",
              "Axis, gridlines, and changing the plot",
              "Removing a series",
              "Changing the plotted range",
              "Named ranges",
              "Using named ranges",
              "Summing using a named range",
              "Averaging using a named range"
           ]
        },
        {
           "title":"\n          Dashboard Controls\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    A dashboard is like a control panel.  Look at ways to allow a user to use this control panel to get different results from your dashboard.\n  ",
           "parts":[
              "Data validation",
              "Setting up your data",
              "Format numbers within your dataset",
              "Using VLOOKUP with data validation",
              "Creating and testing the data validation",
              "Adding the calculation",
              "Creating the line plot",
              "Formatting your line chart",
              "Chart titles, axis, font, gridlines",
              "Other formatting options"
           ]
        },
        {
           "title":"\n          Other Charts for Your Dashboard\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    A picture paints a thousand words.  Look at what types of charts to use in what situation to showcase your data.\n  ",
           "parts":[
              "Histograms",
              "Inserting the VLOOKUP",
              "Creating a histogram on the dashboard",
              "Formatting your histogram",
              "Candlestick charts",
              "Changing your dates to text",
              "Creating the candlestick for the dashboard",
              "Formatting the candlestick",
              "Scatter charts",
              "Creating a scatter chart",
              "Formatting your scatter chart",
              "Sparkline charts within a cell",
              "Sparklines",
              "Changing the color of your sparkline",
              "The column sparkline"
           ]
        },
        {
           "title":"\n          Conditional Formatting\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn how to use rules based on criteria you set to format certain cells on your dashboard. See the formatting change as the values in the cells change.\n  ",
           "parts":[
              "Using conditional formatting",
              "Creating a simple rule to highlight cells ",
              "Highlighting cells between a range",
              "Using formulas and tidying up the dashboard",
              "Using a custom formula to highlight a row",
              "Highlighting duplicates",
              "Using wildcard characters to highlight dates",
              "Change a condition in a format",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Spreadsheets"
     ],
     "tracks":[
        "Spreadsheet Fundamentals"
     ]
  },
  {
     "title":"Introduction to Spreadsheets",
     "description":"Learn the basics of spreadsheets by working with rows, columns, addresses, and ranges.",
     "detailDescription":"Spreadsheet software is one of the most popular and powerful tools in data analysis. Millions of people use tools like Google Sheets or Microsoft Excel on a daily basis. Even the most experienced data scientists often started their careers with spreadsheets and still use it to test assumptions or to look at data for the first time. In this course, you will learn the basics of spreadsheets by working with rows, columns, addresses, and ranges. You will create your own formulas and learn how to use references.",
     "time":"2 hours",
     "chapters":[
        {
           "title":"\n          Getting started\n        ",
           "index":"1",
           "description":"\n    In this chapter, you’ll learn how to navigate within spreadsheets using concepts like rows, columns, cells, and ranges. Then you’ll practice using an essential part of spreadsheets: formulas. Finally, you'll learn how different data types are used in Google Sheets.\n  ",
           "parts":[
              "How it works",
              "Rows and Columns",
              "Cells",
              "Ranges",
              "Formulas",
              "Exponents and parentheses",
              "Percentages",
              "Comparison operators",
              "Data types: text and numbers",
              "Data types: currency and date",
              "Data types: logic"
           ]
        },
        {
           "title":"\n          References\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll learn how to use a powerful technique in Google Sheets: referencing. This chapter will cover concepts like absolute references, autofilling, and reactivity. After this chapter, your productivity with spreadsheets will have increased by a factor of n.\n  ",
           "parts":[
              "Cell references",
              "Circular references",
              "Copying references",
              "Copying horizontally",
              "Copying columns",
              "Mathematical operators and references",
              "Percentages and references",
              "Comparison operators and references",
              "Absolute references",
              "Absolute references: row",
              "Absolute references: column",
              "Combine everything"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[

     ]
  },
  {
     "title":"Intermediate Spreadsheets",
     "description":"Expand your spreadsheets vocabulary by diving deeper into data types, including numeric data, logical data, and missing data.",
     "detailDescription":"This course will expand your Google Sheets vocabulary. You'll dive deeper into data types, practice manipulating numeric and logical data, explore missing data and error types, and calculate some summary statistics. As you go, you'll explore datasets on 100m sprint world records, asteroid close encounters, benefit claims, and butterflies.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          What's in a cell?\n        ",
           "index":"1",
           "description":"\n    In which you learn to interrogate cells to determine the data type of their contents, and to convert between data types.\n  ",
           "parts":[
              "Data types for data science",
              "What IS*() the data type?",
              "Checking rarer data types",
              "Finding missing data",
              "Dteectnig bdaly tpyed dtaa",
              "Convert or die!",
              "Making numbers while the sun shines",
              "How the 104% live",
              "Converting logical values to numbers",
              "Preaching to the CONVERT()ed"
           ]
        },
        {
           "title":"\n          Working with numbers\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In which you learn to apply log and square root transformations to numbers, round them up and down, and generate random numbers.\n  ",
           "parts":[
              "Common data transformations",
              "Logarithmic transformations",
              "Exponential transformations",
              "Square root transformations",
              "Rounding and formatting numbers",
              "Round and round",
              "From floor to ceiling",
              "Rounding negative numbers",
              "Generating random numbers",
              "Generating uniform random numbers",
              "Generating random numbers from other distributions"
           ]
        },
        {
           "title":"\n          Logic  & Errors\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In which you learn how to work with logical data consisting of TRUE and FALSE values, and how to handle missing values and errors.\n  ",
           "parts":[
              "Logical operations",
              "Logical operations are hard... NOT!",
              "AND now for something completely different",
              "Yea OR nay",
              "Flow control",
              "IF only",
              "Lots of IFS",
              "SWITCH it on!",
              "Blanks, missing values, & errors",
              "Blankety blank",
              "Going missing",
              "Errors and omissions",
              "What's the problem?"
           ]
        },
        {
           "title":"\n          Positional Matching\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In which you learn about cell addresses, advanced matching, sorting and filtering, and simple imputation.\n  ",
           "parts":[
              "Cell addresses",
              "Working with cell addresses",
              "From addresses to values",
              "Finding nearby cells with offsets",
              "Local addresses",
              "Lookups & matching",
              "A VLOOKUP refresher",
              "Sorted!\n",
              "Matching values",
              "Bringing it all together",
              "Advanced filtering",
              "Conditional summary statistics",
              "Simple imputation",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Analysis in Spreadsheets"
     ],
     "tracks":[
        "Spreadsheet Fundamentals"
     ]
  },
  {
     "title":"Pivot Tables in Spreadsheets",
     "description":"Explore the world of Pivot Tables within Google Sheets, and learn how to quickly organize thousands of data points with just a few clicks of the mouse.",
     "detailDescription":"Working with large quantities of data in spreadsheets can be difficult and time-consuming. Have you ever wished there was a quick and efficient way to organize and evaluate your data within seconds? Pivot Tables are your answer! In this course we will explore the world of Pivot Tables within Google Sheets, and learn how to quickly organize thousands of datapoints with just a few clicks of the mouse. We will analyze the Average rainfall across multiple US cities, the Top 10 of the Fortune Global 500, and a selection of Films released between 2010 and 2016. You will learn techniques such as sorting, subtotaling, and filtering your data using these real world examples. By the end of the course, you will be able to create your own custom pivot tables with datasets of any size!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Pivot Tables for Google Sheets\n        ",
           "index":"1",
           "description":"\n    This chapter will discuss what a pivot table is, how it works, and will lead you through the steps of creating and setting up your first pivot table.\n  ",
           "parts":[
              "Introduction to pivot tables",
              "Create a pivot table",
              "Create a pivot table pt 2",
              "Create a pivot table pt 3",
              "Pivot table rows and columns",
              "Select rows",
              "Select columns",
              "Rearrange rows and columns",
              "Pivot table values",
              "Selecting values",
              "Selecting multiple values",
              "Pivot table basics"
           ]
        },
        {
           "title":"\n          Behind the Scenes of the Pivot Table\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter discuss how a pivot table works, and how it deals with the underlying data.\n  ",
           "parts":[
              "How a pivot table works",
              "What does a pivot table do?",
              "Analyze the pivot table",
              "Analyze the pivot table pt 2",
              "Using filters in a pivot table",
              "Selecting filters",
              "Filtering by using a string",
              "Filtering on min/max values",
              "Filtering on values",
              "Putting all the pieces together",
              "Building a complete pivot table",
              "Building a complete pivot table pt 2",
              "Building a complete pivot table pt 3"
           ]
        },
        {
           "title":"\n          Advanced Options\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will discuss more advanced options that will help you to get the most of your pivot tables.\n  ",
           "parts":[
              "Changing the calculation of values",
              "Counting text values",
              "Counting numerical values",
              "Minimum and maximum values",
              "Average and median",
              "Calculated fields",
              "What can be done with a calculated field",
              "Create a calculated field",
              "Create a calculated field pt 2",
              "Create a calculated field pt 3",
              "Data as percentages, drilling down, & grouping",
              "Percentage of grand total",
              "Percentage of rows",
              "What does drilling down do?",
              "Grouping rows"
           ]
        },
        {
           "title":"\n           Editing Data and Troubleshooting\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will walk you through modifying data in a pivot table, and troubleshooting various issues you may encounter.\n  ",
           "parts":[
              "Adding or Changing Data",
              "Changing the source data",
              "Correct the dataset",
              "Correcting Inconsistent Source Data",
              "Find and correct the error in the data",
              "Adding data",
              "Troubleshooting and Errors",
              "Finding Missing Data in a Dataset",
              "Find missing data within this dataset",
              "Best Practices and Recommendations",
              "Types of Categories",
              "Select the Measurements",
              "Alternatives to Pivot Tables",
              "Final Thoughts"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Spreadsheets"
     ],
     "tracks":[
        "Spreadsheet Fundamentals"
     ]
  },
  {
     "title":"Introduction to Statistics in Spreadsheets",
     "description":"Learn how to leverage statistical techniques using spreadsheets to more effectively work with and extract insights from your data.",
     "detailDescription":"Statistics is the science that deals with the collection, analysis, and interpretation of data. Having a solid foundation in statistics will help you effectively work with your data to test hypotheses and uncover insights that can help solve your problems. This course is designed to give you that foundation in statistics. Using Spreadsheets functions, you'll dive into averages, distributions, hypothesis testing, and conclude the course by applying your newfound knowledge in a case study. Along the way, you'll work with a variety of datasets ranging from eBay auctions to train ridership to historical presidential approval ratings. Enjoy!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Getting To Know Your Data\n        ",
           "index":"1",
           "description":"\n    Begin your journey by learning why and how to summarize your data using statistics such as the mean, median, and mode. While working with a variety of datasets ranging from Amazon revenue to U.S Presidential ratings, you'll learn about the differences between each of these fundamental statistics and most importantly, when to use each.  \n  ",
           "parts":[
              "Welcome to the course!",
              "Don't be average!",
              "Presidential approval rating averages",
              "Difference between median and mean",
              "Modal madness",
              "How far from average?",
              "Train variation",
              "Calculating standard deviations",
              "Playing quarters",
              "Standardizing data",
              "Comparing z-scores",
              "Exploring eBay auctions"
           ]
        },
        {
           "title":"\n          Statistical Data Visualization\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Data visualization is one of the most important parts of any data science workflow. It leads to a deeper understanding of your dataset which in turn allows you to more effectively communicate results to stakeholders. In this chapter, you'll learn how to visualize your data in Spreadsheets using statistical plots such as the histogram, scatter plot, and bar plot.\n  ",
           "parts":[
              "Visualizing Distributions",
              "\"Normal\" views of money",
              "Visualizing customer longevity",
              "Visualizing customer donations",
              "Is the data \"normally\" distributed?",
              "Visualizing Correlations",
              "Correlation between price and quantity sold",
              "Correlation between seller rating and closing price",
              "Adding a trend line",
              "Bar charts",
              "Bar chart of competitive counts",
              "Visualizing categories"
           ]
        },
        {
           "title":"\n          Statistical Hypothesis Testing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter introduces you to statistical hypothesis testing. You'll learn how to construct a hypothesis, test it using different statistical tests, and properly interpret the results. \n  ",
           "parts":[
              "Central to Stats: Sampling!",
              "Sampling in Spreadsheets",
              "Does sampling size matter?",
              "Central Limit Theorem in action",
              "Hypothesis Testing",
              "Comparing samples with a t-test",
              "Paired t-test",
              "Hypothesis Testing with the Z-test",
              "Performing a Z-test",
              "What changes in a two-tailed test?",
              "Hypothesis Testing with the Chi-squared test",
              "Performing a chi-squared test",
              "Are bank loans getting worse?"
           ]
        },
        {
           "title":"\n          Case Study: Dating Profile Analysis\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The final stretch! Apply all of your newfound statistical knowledge and solidify everything you have learned by working through a case study consisting of online dating profile data. \n  ",
           "parts":[
              "Dating Data!",
              "Understanding the distribution of ages",
              "What's the drinking age?",
              "Profile login behavior",
              "Visuals & Distributions",
              "Visualizing logins",
              "How old do users look?",
              "Tipping the scale to positive correlation",
              "Investigating age and volunteering",
              "More complex relationships",
              "Are gender and number of roommates independent?",
              "Getting old and rich",
              "Multiple relationships!",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Analysis in Spreadsheets"
     ],
     "tracks":[
        "Data Skills for Business",
        "Intermediate Spreadsheets"
     ]
  },
  {
     "title":"Options Trading in Spreadsheets",
     "description":"Learn how to price options contracts and visualize payout of various options strategies using spreadsheets.",
     "detailDescription":"Options are an extremely important part of the financial markets. They matter not only to traders and asset managers, but also to anyone that receives stock options from their employers as part of their benefit packages. Understanding what options are — and, indeed, how they can make you money — can be made a lot easier with the use of technology. Throughout this course, you'll work with data and formulas to help you get the most out of trading via Google Sheets. By the end of this course, you will be able to use Google Sheets to build a valuation model from scratch and use it to price actual option contracts. Come along on this fun and interactive journey with Google Sheets!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to options\n        ",
           "index":"1",
           "description":"\n    In this chapter, you'll take your first steps on the path to mastering option valuation models in spreadsheets. In this chapter, you will learn the basics of derivative contracts known as options. You will find out how to use spreadsheets to perform basic operations to compute the value of different types of option contracts.\n  ",
           "parts":[
              "Introduction to options",
              "Call and put option values",
              "Profit MAXimization",
              "IF() the formula is correct",
              "Calculating the payoffs",
              "Putting it in writing",
              "Filtering",
              "Summing payoffs up with SUMIF()",
              "Look up and sum",
              "Utilizing VLOOKUP() for options trading",
              "Calculating option values",
              "VLOOKingUP payoffs"
           ]
        },
        {
           "title":"\n          Options (and Strategies), Illustrated\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Things get slightly more complex in this chapter. You will learn option strategies, or combinations of option contracts designed to profit from your view of the markets. By the end of the chapter, you will gain knowledge of some of the most popular strategies such as bull and bear spreads and learn how to use spreadsheets to visualize possible outcomes of your strategies, while learning several useful spreadsheet functions along the way!\n  ",
           "parts":[
              "Options, Illustrated",
              "An array of possibilities",
              "Finishing touches on the dataset",
              "Into charted waters",
              "Bull and bear spreads",
              "Bull spreads",
              "Estimating total payoffs",
              "Bear spreads",
              "Neutral strategies - Straddle and Strangle",
              "Neutral strategies - straddle",
              "Neutral strategies - strangle",
              "Put-call parity",
              "Flipping the butterflies",
              "Watching the butterfly",
              "Alternative butterfly"
           ]
        },
        {
           "title":"\n          Option Greeks\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the third chapter, you will take a trip to the United States and then to Greece to learn the main elements of the Black-Scholes model, which enables you to calculate the fair value of an option contract and to work out its sensitivities to various factors, such as changes in the price of the underlying asset and time decay.\n  ",
           "parts":[
              "The Black-Scholes model",
              "Time and volatility",
              "Looking up time and volatility",
              "Logarithms, variance, and interest rates",
              "Calculating d1 and d2",
              "The Black-Scholes model - 2",
              "N(d1) and N(d2)",
              "N(d1) and N(d2) in the negative",
              "Call and put values",
              "Option values",
              "Delta and Theta",
              "Delta",
              "Probability density",
              "Part two and еheta",
              "Rho and Vega",
              "Rho"
           ]
        },
        {
           "title":"\n          Binomial Model for Option Pricing\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter of the course, you will master the binomial option pricing model. It is a very useful tool, which enables you to compute the present value of an option contract based on the likelihood and magnitude of changes in the price of the underlying asset. You will utilize advanced spreadsheet formulas to build the model and expand it by an additional period.\n  ",
           "parts":[
              "Introduction to binomial models for options pricing",
              "Zero mile marker",
              "Stage one and two",
              "Stocking up",
              "Stocking up, part 2",
              "Planks",
              "The two states",
              "The two states, part 2",
              "The final stage",
              "Going backward",
              "Roof",
              "Put values down",
              "Multi-period expansion",
              "Ifs, calls, and puts",
              "Multi-period expansion",
              "Multi-period expansion, part 2",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Spreadsheets"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Data Analysis in Spreadsheets",
     "description":"Learn how to analyze data with spreadsheets using functions such as SUM(), AVERAGE(), and VLOOKUP().",
     "detailDescription":"This course will dig deeper into some of the core functionality of Google Sheets. There's a whole bunch of predefined functions we'll cover, like `SUM()` and `AVERAGE()`, and `VLOOKUP()`. We'll apply these techniques to do some analysis on your grades in school, look at performance statistics within a company, track monthly sales, and look at some real geographical information about the countries of the world.",
     "time":"3 hours",
     "chapters":[
        {
           "title":"\n          Predefined functions\n        ",
           "index":"1",
           "description":"\n    This chapter introduces a very useful feature in Google Sheets: predefined functions. You'll use these functions to solve complex problems without having to worry about specific calculations. We’ll cover a lot of predefined functions,  including functions for numbers, functions for strings, and functions for dates.\n  ",
           "parts":[
              "First function - ROUND",
              "Function composition - SQRT",
              "Functions and ranges - MIN, MAX",
              "Selecting ranges - SUM, AVERAGE, MEDIAN",
              "Multiple arguments - RANK",
              "Even more arguments - RANK",
              "String manipulation - LEFT, RIGHT",
              "String information - LEN, SEARCH",
              "Combining strings - CONCATENATE",
              "Date functions - WEEKDAY",
              "Comparing dates ",
              "Combining functions"
           ]
        },
        {
           "title":"\n          Conditional functions and lookups\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the last chapter of the course, you'll master more advanced functions like IF() and VLOOKUP(). Conditional and lookup functions won’t seem so scary after you completed this chapter.\n  ",
           "parts":[
              "Performance statistics",
              "Flow control - IF",
              "Nested logical functions - IF",
              "Combining logical values - OR, WEEKDAY",
              "Conditional counting - COUNTIF",
              "Conditional aggregation - COUNTIF",
              "Conditional sum - SUMIF",
              "Conditional average - AVERAGEIF",
              "Advanced conditions - AVERAGEIF",
              "Filters - FILTER, DATEVALUE, MEDIAN",
              "Grades in class",
              "Automating the lookup - VLOOKUP",
              "More about lookup - VLOOKUP",
              "Horizontal lookup - HLOOKUP",
              "Weighted average - SUMPRODUCT, HLOOKUP"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Spreadsheet Fundamentals"
     ]
  },
  {
     "title":"Financial Analytics in Spreadsheets",
     "description":"Learn how to build a graphical dashboard with spreadsheets to track the performance of financial securities.",
     "detailDescription":"Monitoring the evolution of traded assets is key in finance. In this course, you will learn how to build a graphical dashboard with spreadsheets to track the performance of financial securities. You will focus on historical prices and dividends of the hypothetical stock ABC. You will learn how to visualize its prices, how to measure essential reward and risk indicators, and see if your investment in ABC outperformed a benchmark index. At the end of the course, you should be able to use spreadsheets to build great monitoring tools used by traders and financial analysts in their day-to-day business life!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Monitoring historical prices \n        ",
           "index":"1",
           "description":"\n    In the first chapter, you’ll be introduced to the problem: you have a time series of monthly (historical) prices for the hypothetical stock ABC from which you have to extract some meaningful information. You’ll be given some definitions (what is a stock? what are dividends?), and at the end of the chapter, you’ll be able to graphically represent the evolution of a stock price over a specific period.\n  ",
           "parts":[
              "Introduction and first metrics",
              "What is a stock?",
              "Count prices and dividends\n",
              "Find minimum and maximum prices\n",
              "Find minimum and maximum dividends\n",
              "Identifying dates with unusual prices",
              "Find price at a given date ",
              "Find dates with minimum and maximum prices",
              "Visualizing the price evolution",
              "Plot a line chart of historical prices",
              "Customize the chart",
              "Highlight minimum and maximum prices"
           ]
        },
        {
           "title":"\n          Monitoring historical returns\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, the core of the analysis will switch from historical prices to historical returns. You’ll learn (and compute) the main performance indicators of past returns, both in terms of reward and risk. Finally, you’ll be introduced to risk-adjusted performance measures: indicators that take into account both reward and risk.\n  ",
           "parts":[
              "From prices to returns",
              "What are dollar and percentage returns?",
              "Compute historical returns",
              "Count positive and negative returns",
              "Reward metrics",
              "Compute the average return",
              "Compute the effective rate of return using PRODUCT() and COUNT()",
              "Compute the effective rate of return using ARRAYFORMULA()",
              "Risk metrics",
              "Compute the volatility",
              "Compute the volatility with STDEV()",
              "Compute the historical value-at-risk\n",
              "Risk-adjusted metrics",
              "Compute the Sharpe ratio",
              "Compute the semideviation\n",
              "Compute the Sortino ratio\n"
           ]
        },
        {
           "title":"\n          Monitoring the distribution of returns \n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you'll look at the full distribution of historical returns. First, you’ll learn how to build a histogram to describe the distribution of historical returns. Second, you’ll be introduced to the Gaussian distribution, a commonly used model for stock returns. You'll visually inspect if the Gaussian model is reasonable for the ABC stock returns. Finally, you'll understand potential flaws with the Gaussian model.\n  ",
           "parts":[
              "Histogram of stock returns",
              "Define bins",
              "Find the frequency of each bin",
              "Convert frequencies into relative frequencies",
              "Build the histogram",
              "The Gaussian model",
              "Plot the standard Gaussian model",
              "Change the location of the Gaussian model",
              "Change the dispersion of the Gaussian model",
              "Calibrating the Gaussian model",
              "Calibrate the Gaussian model on historical returns",
              "Overlay the Gaussian model to the empirical histogram ",
              "Compute the 5% value-at-risk from the Gaussian model",
              "Limitations of the Gaussian model",
              "What are the limitations of the Gaussian model?",
              "Compute skewness and kurtosis of the historical returns"
           ]
        },
        {
           "title":"\n          Benchmarking performance\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you’ll benchmark ABC stock against a market index and verify whether ABC outperformed the benchmark or not. The comparison process will be done through several steps/metrics. First, you’ll analyze the cumulative wealth. Next, you’ll extend the comparison using different indicators such as Sharpe Ratio and Drawdown. Finally, you’ll examine the linear relation between ABC stock and the benchmark through the correlation coefficient. At the end of the chapter, you’ll be introduced to more powerful and advanced spreadsheet features that introduce interactivity in your analysis.\n  ",
           "parts":[
              "Benchmarking",
              "How to choose a good benchmark?",
              "Compare the final wealth",
              "Plot the cumulative wealth",
              "Performance metrics comparison",
              "Compare the Sharpe ratios",
              "Compare the drawdowns",
              "Compare the maximum drawdowns",
              "Correlation analysis",
              "Compute the correlation coefficient ",
              "Compute the rolling-window correlation",
              "Creating the dashboard"
           ]
        }
     ],
     "prerequistes":[
        "Data Visualization in Spreadsheets"
     ],
     "tracks":[
        "Finance Fundamentals in Spreadsheets"
     ]
  },
  {
     "title":"Conditional Formatting in Spreadsheets",
     "description":"Learn how to use conditional formatting with your data through built-in options and by creating custom formulas.",
     "detailDescription":"Spreadsheets often suffer from having too much data. If you want to tell the underlying story that is in the data without creating additional reports, conditional formatting can help! Whether it's showing the age of your inventory by highlighting the items using a color scale, or accentuating the largest variances in year over year financial data, conditional formatting has built-in options that can be used without any complex code. It can be used instead of sorting or filtering since it works with the data that is already there! By the end, you will be creating your own report using conditional formatting to analyze a company's payroll.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          A Primer on Conditional Formatting\n        ",
           "index":"1",
           "description":"\n    Learn what conditional formatting is and how it can be used to emphasize the important data in a spreadsheet. We will discuss a variety of the built-in options you can use to apply conditional formatting rules to your data. \n  ",
           "parts":[
              "A primer on conditional formatting",
              "Conditional formatting",
              "Additional rule",
              "Conditional formatting of top and bottom values",
              "Greater than",
              "Weight range",
              "Auditing an expense account",
              "Conditional formatting using dates",
              "Before last week",
              "All dates except June",
              "Dates"
           ]
        },
        {
           "title":"\n          Custom Application of Conditional Formatting\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will learn how to apply conditional formatting in more flexible ways. We'll discuss a variety of functions you can use to create conditional formatting rules with custom formulas.\n  ",
           "parts":[
              "Primer on custom formulas",
              "Amount variance",
              "Percentage variance",
              "Working with AND / OR",
              "Positive and negative",
              "Both amount and variance",
              "Quality control",
              "Quality control further analysis",
              "Highlighting an entire row",
              "Formatting an entire row",
              "Custom formula"
           ]
        },
        {
           "title":"\n          Conditional Formatting Hacks\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn tricks to use conditional formatting in unique ways! In this chapter, you will learn more functions, build your own searches, and make interactive task lists with checkboxes.\n  ",
           "parts":[
              "Highlight duplicate values",
              "COUNTIF practice",
              "Finding more duplicates",
              "Conditionally formatting duplicates",
              "Cleaning it up",
              "Building a search box",
              "SEARCH Function",
              "Highlighting search",
              "Highlight top values",
              "SMALL function",
              "Highlighting SMALL",
              "Conditional formatting hacks",
              "Cross off your to dos",
              "Long term career goals",
              "Ranking your goals",
              "Crossing them off"
           ]
        },
        {
           "title":"\n          Putting It All Together\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will use everything you have learned about conditional formatting to analyze a company's payroll. You will be working with dates, looking for duplicates, and checking for errors to create your report.  \n  ",
           "parts":[
              "Working with payroll dates",
              "ISDATE function",
              "Correcting your report",
              "Checking for duplicates",
              "Checking a payroll register",
              "Paid time off totals",
              "Pay allowed range",
              "Moving to part-time",
              "Overall payroll analysis",
              "Year-to-date",
              "Positive variances",
              "Negative variances",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[
        "Data Analysis in Spreadsheets"
     ],
     "tracks":[

     ]
  },
  {
     "title":"Marketing Analytics in Spreadsheets",
     "description":"Learn how to ensure clean data entry and build dynamic dashboards to display your marketing data.",
     "detailDescription":"Spreadsheets are an essential tool for any marketing professional, but how does one keep these spreadsheets clean and accurate - especially when multiple parties contribute data? Data validation and regular expressions are powerful tools for marketing analysts, but having clean data is only half the battle. After we learn how to clean the data, we will visualize it by building charts! Throughout the course, we will explore a dataset that includes the kind of information you will encounter in the world of digital marketing. We will spot errors in metrics using data validation, use regular expressions to aggregate campaign metrics, build charts to analyze campaign performance, and use everything we've learned to build a dynamic dashboard!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Data Validation for Clean Data Entry\n        ",
           "index":"1",
           "description":"\n    In this chapter, you will explore the data validation options that Google Sheets offers to aid in clean data entry. You will also learn about the Bing and Google Ads paid advertising data you will explore throughout the course. After this chapter, you will be able to create spreadsheets that can be used by any number of people, without having to worry about disorganization.\n  ",
           "parts":[
              "The importance of clean data entry",
              "Test your knowledge",
              "Fix the errors",
              "Contribute to the data set",
              "Create dropdowns from lists",
              "Mitigating campaign name errors",
              "List from a range",
              "List of items",
              "Validations using cell criteria and checkboxes",
              "Text validation",
              "Check the checkboxes",
              "Putting it all together"
           ]
        },
        {
           "title":"\n          Regular Expressions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the digital marketing world, naming conventions may differ among paid advertising campaigns or ad groups, which poses a problem when the user wants to analyze campaign performance. Regular expressions can help match certain strings, replace parts of strings, or extract a portion of a string. In this chapter, you will learn to use regular expressions, along with Google Sheets' built-in functions REGEXMATCH(), REGEXREPLACE(), and REGEXEXTRACT(), to reorganize and aggregate data with ease.\n  ",
           "parts":[
              "What are regular expressions?",
              "Using regular expressions",
              "Writing regular expressions",
              "Test a string using REGEXMATCH",
              "Filter table using REGEXMATCH",
              "Aggregate campaign cost using REGEXMATCH",
              "Aggregate ad group cost-per-click using REGEXMATCH",
              "Modify a string using REGEXEXTRACT and REGEXREPLACE",
              "Rename brand campaigns using REGEXREPLACE()",
              "Rename all ad groups using REGEXREPLACE()",
              "Extract brand campaign names using REGEXEXTRACT()",
              "Create campaign IDs using REGEXEXTRACT()",
              "Cleaning Campaign Names",
              "Modify the campaign ID to include source",
              "How much did each source spend?",
              "Sum up campaigns with RegEx"
           ]
        },
        {
           "title":"\n          Visualize the Data with Charts\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you will explore Google and Bing Ad campaigns and ad group data. In addition to a refresher on some basic charts, you will explore new ways to use these charts and experiment with the chart editor settings to create both informative and visually appealing charts. You will learn to explain paid advertising data through visualizations, which is an important task in the fast-paced digital advertising world.\n  ",
           "parts":[
              "Analyzing paid-search trends with line & area charts",
              "Analyze cost data with a stacked area chart",
              "Plotting campaign click-through-rates with a line chart",
              "Visualizing ad group performance with column & bar charts",
              "Using a bar chart to visualize total ad group spend",
              "Assessing campaign performance with a column chart",
              "Ad group overview with 100% stacked bar chart",
              "Evaluating campaigns with pie & scatter plots",
              "Assessing campaign goal completions with a pie chart",
              "Understanding click through rate with a scatter plot",
              "Visualizing goal completions with a bubble chart",
              "Build a digital marketing dashboard",
              "Visualizing impressions with a doughnut chart",
              "Using a bubble chart to determine the better source",
              "Source performance using a standard stacked bar chart"
           ]
        },
        {
           "title":"\n          Build a Paid Search Campaign Dashboard\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In the final chapter, you will be tasked with building a paid advertising dashboard that can be dynamically filtered by both source and campaign name. After completing the chapter, you should be able to tackle almost any data mitigation or dashboard creation project that you, or your boss, may think of!\n  ",
           "parts":[
              "Preparing the data",
              "Dropdowns for source and campaign name",
              "Create a filtered table",
              "Prep for charts with a regex driven table",
              "Visualize the data",
              "Ad group impression share with a doughnut chart",
              "Ad group metrics with a bar chart",
              "Campaign and ad group analysis with a bubble chart",
              "Putting it all together",
              "Who are the dashboards for?",
              "Add a campaign dropdown filter",
              "Apply dynamic filter to dashboard",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Spreadsheets"
     ],
     "tracks":[
        "Intermediate Spreadsheets"
     ]
  },
  {
     "title":"Error and Uncertainty in Spreadsheets",
     "description":"Learn to distinguish real differences from random noise, and explore psychological crutches we use that interfere with our rational decision making.",
     "detailDescription":"You rely on predictions every day: you might check the weather app before choosing your outfit or peek at the traffic before starting your commute. Perhaps you are responsible for setting your organization’s strategy in the future. Do you find yourself wondering how accurate predictions are, how you can see into the future, and why the weatherman always seems to be wrong? In our Error and Uncertainty course, you’ll make some predictions yourself, learn to distinguish real differences from random noise, and explore psychological crutches we use that interfere with our rational decision making. You will uncover patterns in Seattle crime data, predict students’ final grades, prevent Nashville traffic accidents, and determine whether a bakery’s menu needs to change. Join us! We’re certain you’ll enjoy learning about error and uncertainty.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Defining error, uncertainty, and risk\n        ",
           "index":"1",
           "description":"\n    The first chapter presents common terminology, introduces methods for determining significant differences between groups, and outlines the kinds of error and uncertainty involved. We will specifically look at Seattle crime data and evaluate crime rate differences between precincts and neighborhoods. This chapter will equip learners to identify threats to the validity and accuracy of their conclusions.\n  ",
           "parts":[
              "Defining error and uncertainty",
              "Measures of central tendency",
              "Crime time",
              "IF functions",
              "Extracting UNIQUE() values",
              "Book 'em and count 'em",
              "Averages and IF conditions",
              "Counts with multiple criteria",
              "Correlation",
              "Rap sheet",
              "Correlation preparation",
              "A (crimes) committed relationship",
              "Strong relationships"
           ]
        },
        {
           "title":"\n          Making accurate predictions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The second chapter outlines both rudimentary (e.g., moving average, seasonal average, yearly average) and more complicated methods (e.g., linear regression) for making predictions and outlines the kinds of error and uncertainty involved. We will specifically look at anonymized student grades data and evaluate the accuracy of our predictions for given students. Throughout the chapter, we will identify threats to the validity and accuracy of our predictions.\n  ",
           "parts":[
              "Making the grade",
              "We all have our (central) tendencies",
              "Variable weights",
              "Now weight a minute",
              "Lying in weights",
              "Advanced prediction strategies",
              "What's in the FORECAST()?",
              "Variation in predictions",
              "Seems about right",
              "How clear is your crystal ball?",
              "Prediction accuracy",
              "Absolute deviation",
              "Average absolute deviation",
              "Statistical significance",
              "Significant differences",
              "Significant differences of opinion"
           ]
        },
        {
           "title":"\n          Poking holes in predictions\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Chapter 3 encourages learners to test the assumptions of their predictions using data on car crashes. Specifically, they will determine how to allocate resources to reduce injuries and fatalities from auto accidents. Learners will discuss the impact of outliers in prediction accuracy, evaluate the importance of normally distributed data in making predictions, employ consequence-likelihood matrices in risk management, and adapt psychological heuristics to discussions of numerical uncertainty and risk.\n  ",
           "parts":[
              "Outliers",
              "Down and outlier",
              "No filter",
              "Addressing outliers",
              "Sparklines",
              "Can't start a fire without a spark(line)",
              "The max matters",
              "What's the worst that could happen?",
              "There are consequences",
              "A likely story",
              "Risky business",
              "Risky business",
              "Random numbers",
              "How random",
              "Be fruitful and multiply",
              "Revisiting sparklines"
           ]
        },
        {
           "title":"\n          Case study: Should you change your bakery's menu?\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The final chapter integrates all the previous lessons into a constructed-world scenario. Learners are tasked with updating the menu at their small business: the Risky Business Bakery. They need to figure out whether to add or drop menu items based on whether there are significant differences in sales by baked good; whether their predicted sales figures from their accountant are accurate.\n  ",
           "parts":[
              "A half-baked idea?",
              "Half-baked ideas",
              "Falling on hearth times",
              "Summary statistics",
              "Do you know your muffins, man?",
              "Changing prices",
              "Bread on the rise?",
              "Paying the price",
              "Is change on the menu?",
              "A recipe for change",
              "Rain, rain, go away",
              "Fed up",
              "Review: Are we certain now?",
              "Adding variation",
              "Win some, lose some",
              "Just t-testing",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[
        "Introduction to Statistics in Spreadsheets"
     ],
     "tracks":[
        "Intermediate Spreadsheets"
     ]
  },
  {
     "title":"Financial Modeling in Spreadsheets",
     "description":"Learn basic business modeling including cash flows, investments, annuities, loan amortization, and more using Sheets.",
     "detailDescription":"Have you ever wanted to plan for retirement, understand the stock market, or create a cash flow for your business? In this course, you will learn how to build business and financial models in Sheets. Google Sheets is an excellent technology for business models! You can create a framework for your goal, like understanding the growth of investments, and then update that framework based on current data. You will learn the basics of business modeling focusing on cash flows, investments, annuities, loan amortization, and saving for retirement. By the end of the course, you will have gained referencing and function skills in Sheets that you can apply to all sorts of models.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          What are Models?\n        ",
           "index":"1",
           "description":"\n    An introduction to modeling financial statements in Sheets focusing on balance and income statements, which help create cash flow models. \n  ",
           "parts":[
              "How to love models",
              "Format the income statement",
              "Create the sum values",
              "Copy sums for each year",
              "Continuing simple models with balance sheets",
              "Format a balance statement model",
              "Balance all the years",
              "Common size statement",
              "Build a cash flow model",
              "Update the cash flow",
              "Complete cash flow for all years",
              "Forecast Cash Flows"
           ]
        },
        {
           "title":"\n          Time Value Money Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn Sheet's financial model functions by creating investment models with the fv, pv, pmt, and nper functions. You will also learn how to pay off debts in a loan amortization table. \n  ",
           "parts":[
              "Value functions",
              "Estimate effective interest rates",
              "How much will I earn?",
              "Double your money",
              "Growing your money",
              "Out-of-state tuition",
              "Add some starter money",
              "Can your child pay for college?",
              "Study abroad for a year",
              "Reducing your debt",
              "Start the loan amortization table",
              "Where did your money go?",
              "Complete loan model"
           ]
        },
        {
           "title":"\n          Planning and Investing Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Saving for retirement is tricky, but in this chapter, you will learn how to create models that help you plan to save and use your money after retirement. \n  ",
           "parts":[
              "Retirement planning in real dollars",
              "What's your nest egg?",
              "How much do you need to pay?",
              "Finish and visualize",
              "Retirement planning in nominal dollars 1",
              "Update yearly values",
              "Add the estimate of fixed income",
              "Break down the stock balance",
              "Retirement planning in nominal dollars 2",
              "Add withdrawals and money made",
              "Calculate total year-end",
              "How much initial money?"
           ]
        },
        {
           "title":"\n           Probabilistic Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Stock prices go up and down but can we model them? Learn about volatility and simulating stock prices in this final chapter. \n  ",
           "parts":[
              "Living with uncertainty",
              "Relative price and daily return",
              "What is the average return?",
              "Find volatility",
              "A simple stock model",
              "Expected return and random values",
              "Certainty and uncertainty",
              "Uncertainty charted",
              "Stock probabilities",
              "Stepping out the expected return",
              "Create the steps for min and max stock prices",
              "What is the most likely stock price?",
              "Model stock price probability",
              "Complete the probability table",
              "Graph the stock distribution"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Spreadsheets"
     ],
     "tracks":[
        "Finance Fundamentals in Spreadsheets"
     ]
  },
  {
     "title":"Loan Amortization in Spreadsheets",
     "description":"Learn how to build an amortization dashboard in spreadsheets with financial and conditional formulas.",
     "detailDescription":"A loan amortization schedule sounds like something that's only used by bankers and financial traders, right? Wrong! In this course, we'll be looking at the key financial formulas in Google Sheets that you can use to investigate your own loans, like student loans, car loans, and mortgages. We'll build up a dashboard in Google Sheets which uses visualizations and conditional formulas to produce presentation-ready spreadsheets which will impress any finance manager!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Financial Concepts in Google Sheets\n        ",
           "index":"1",
           "description":"\n    In this first chapter, you will learn all the basic financial formulas in Google Sheets that are needed to build up your first loan amortization spreadsheet for a student loan. This chapter will introduce calculations for principal payment, interest and principal at a given point in time.\n  ",
           "parts":[
              "Introduction to loan amortization",
              "Your \"friend,\" the loan shark",
              "Paying off your student loan in 1 year",
              "Guess the right payment",
              "Calculation of monthly payments",
              "Required fields for the PMT() function.",
              "Inputs for an annual loan",
              "Inputs for a monthly loan.",
              "Entering the PMT() formula",
              "Calculation of interest and principal payments",
              "Using the IPMT() function ",
              "Using the PPMT() function ",
              "Amortization table with two periods"
           ]
        },
        {
           "title":"\n          Creating an Amortization Schedule\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter is focused on extending the payment formulas to the full length of a loan. By the end of the chapter, you will be able to create a fully functional schedule and will be able to verify the accuracy of the calculations on the schedule.\n  ",
           "parts":[
              "Your first amortization schedule",
              "Entering loan terms",
              "Finishing the amortization schedule",
              "Adjusting for annual periods",
              "Cumulative financial functions",
              "Cumulative functions and opening balance.",
              "Working with a single cumulative function",
              "Adding cumulative functions to the schedule",
              "Measuring balance over time",
              "Counting forward periods with EOMONTH()",
              "Counting same month and backward with EOMONTH()",
              "Adding dates and LTV to the schedule"
           ]
        },
        {
           "title":"\n          Making a Loan Amortization Dashboard\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter is about taking the amortization schedule that you created in Chapter 2 and converting it into a fully functional loan dashboard which can be used by end users. You will create line and bar graphs, as well as using input controls and cell protection to ensure that end users will only be able to change what you want them to change!\n  ",
           "parts":[
              "Working with conditions and case statements",
              "Working with IF() functions",
              "SWITCH with baseball",
              "School grades with IFS()",
              "Adjusting dates for different time periods",
              "IF() formulas for monthly or bi-weekly periods",
              "IF() formulas to calculate semi-monthly periods",
              "IFS() formula for all payment types",
              "Loan visualizations",
              "Adding data to the chart.",
              "Adding the x-axis",
              "Adding the title",
              "Hiding unused cells",
              "Using FILTER to create a new table without NAs",
              "Fixing visualizations after using FILTER",
              "Hiding unused values using IFS"
           ]
        },
        {
           "title":"\n          Non-standard amortization schedules\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    The final chapter introduces real-world adjustments which are made to amortization schedules. These sorts of adjustments include upfront fees and lump sum payments. The course finishes by talking about floating rate mortgages, the maximum interest rate on floating loans and negative amortization.\n  ",
           "parts":[
              "Fees and Annual Percentage Rate",
              "Practice with APR",
              "Your friend, the payday loan shark.",
              "Calculating APR on the schedule",
              "Lump sum payments",
              "Manually calculating interest and principal.",
              "Modifying closing balances for a lump sum",
              "Hiding unused rows review",
              "Fixing the payment function",
              "Floating Rates",
              "Negative amortization scenario",
              "Impact of rising interest rates",
              "Longer-term loans and negative amortization",
              "Maximum annual rate",
              "Max interest rate with APR"
           ]
        }
     ],
     "prerequistes":[
        "Financial Modeling in Spreadsheets"
     ],
     "tracks":[
        "Finance Fundamentals in Spreadsheets"
     ]
  },
  {
     "title":"Data Science for Everyone",
     "description":"An introduction to data science with no coding involved.",
     "detailDescription":"What is data science, why is it so popular, and why did the Harvard Business Review hail it as the “sexiest job of the 21st century”? In this non-technical course, you’ll be introduced to everything you were ever too afraid to ask about this fast-growing and exciting field, without needing to write a single line of code. Through hands-on exercises, you’ll learn about the different data scientist roles, foundational topics like A/B testing, time series analysis, and machine learning, and how data scientists extract knowledge and insights from real-world data. So don’t be put off by the buzzwords. Start learning, gain skills in this hugely in-demand field, and discover why data science is for everyone!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Data Science\n        ",
           "index":"1",
           "description":"\n    We'll start the course by defining what data science is. We'll cover the data science workflow and how data science is applied to real-world problems. We'll finish the chapter by learning about different roles within the data science field.\n  ",
           "parts":[
              "What is data science?",
              "Customer segmentation workflow",
              "Building a customer service chatbot",
              "Applications of data science",
              "Assigning data science project",
              "Investment research",
              "Data science roles and tools",
              "Editing a job post",
              "Matching skills to jobs",
              "Classifying data tasks"
           ]
        },
        {
           "title":"\n          Data Collection and Storage\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that we understand the data science workflow, we'll dive deeper into the first step: data collection and storage. We'll learn about the different data sources you can draw from, what that data looks like, how to store the data once it's collected, and how a data pipeline can automate the process.\n  ",
           "parts":[
              "Data sources",
              "Sorting data sources",
              "Asthma frequencies",
              "Data types",
              "Classifying data types",
              "Net promoter score",
              "Activity tracker",
              "Data storage and retrieval",
              "Cloud platforms",
              "Querying a database",
              "Which type of database?",
              "Data Pipelines",
              "Data pipeline characteristics",
              "Extract Transform Load"
           ]
        },
        {
           "title":"\n          Preparation, Exploration, and Visualization\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Data preparation is fundamental: data scientists spend 80% of their time cleaning and manipulating data, and only 20% of their time actually analyzing it. This chapter will show you how to diagnose problems in your data, deal with missing values and outliers. You will then learn about visualization, another essential tool to both explore your data and convey your findings.\n  ",
           "parts":[
              "Data preparation",
              "The truth is out there",
              "Are you prepared?",
              "Exploratory Data Analysis",
              "Numerical EDA",
              "Visual EDA",
              "Visualization",
              "Interactive dashboards",
              "Improving a dashboard"
           ]
        },
        {
           "title":"\n          Experimentation and Prediction\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, we'll discuss experimentation and prediction! Beginning with experiments, we'll cover A/B testing, and move on to time series forecasting where we'll learn about predicting future events. Finally, we'll end with machine learning, looking at supervised learning, and clustering.\n  ",
           "parts":[
              "A/B Testing",
              "Creating an A/B testing workflow",
              "Statistical significance",
              "Intermediate results",
              "Time series forecasting",
              "Classifying time series data",
              "Interpret a time series plot",
              "Supervised machine learning",
              "When to use supervised learning",
              "Features and labels",
              "Model evaluation",
              "Clustering",
              "Supervised vs. unsupervised",
              "Cluster size selection",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Data Science for Everyone",
        "Data Literacy Fundamentals"
     ]
  },
  {
     "title":"Machine Learning for Everyone",
     "description":"An introduction to machine learning with no coding involved.",
     "detailDescription":"What's behind the machine learning hype? In this non-technical course, you’ll learn everything you’ve been too afraid to ask about machine learning. There’s no coding required. Hands-on exercises will help you get past the jargon and learn how this exciting technology powers everything from self-driving cars to your personal Amazon shopping suggestions. How does machine learning work, when can you use it, and what is the difference between AI and machine learning? They’re all covered. Gain skills in this hugely in-demand and influential field, and discover why machine learning is for everyone!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          What is Machine Learning?\n        ",
           "index":"1",
           "description":"\n    In this chapter,  we'll define machine learning and its relation to data science and artificial intelligence.  Then, we'll unpack important machine learning jargon and end with the machine learning workflow for building models.\n  ",
           "parts":[
              "What is machine learning?",
              "Recognizing handwritten digits",
              "AI, data science, and machine learning walk into a bar...",
              "What's true about machine learning?",
              "Machine learning concepts",
              "Machine learning lingo",
              "Supervised vs unsupervised",
              "Machine learning workflow",
              "Steps for building a model",
              "A true step"
           ]
        },
        {
           "title":"\n          Machine Learning Models\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that you know the basics of machine learning, let's dive a little bit deeper. At the end of this chapter, you will know the different types of machine learning, as well as how to evaluate and improve your models.\n  ",
           "parts":[
              "Supervised learning",
              "Warm up",
              "Regressing with class",
              "Unsupervised learning",
              "We don't need no supervision",
              "Gotta cluster 'em all!",
              "Evaluating performance",
              "True or False?",
              "Land of confusion",
              "Improving performance",
              "It's a long way to the top",
              "Explore hyperparameter tuning"
           ]
        },
        {
           "title":"\n          Deep Learning\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we'll unpack deep learning beginning with neural networks. Next, we'll take a closer look at two common use-cases for deep learning: computer vision and natural language processing. We'll wrap up the course discussing the limits and dangers of machine learning.\n  ",
           "parts":[
              "Deep learning",
              "What is deep learning?",
              "Should I use deep learning?",
              "Computer vision",
              "Image data",
              "The process",
              "Recognizing handwritten digits",
              "Natural Language Processing",
              "Sentiment analysis",
              "Classifying machine learning tasks",
              "Bag of words",
              "Limits of machine learning",
              "To black box or not to black box?",
              "Spotting bias in machine learning",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Machine Learning for Everyone",
        "Data Literacy Fundamentals"
     ]
  },
  {
     "title":"Data Science for Business",
     "description":"Learn about data science and how can you use it to strengthen your organization.",
     "detailDescription":"What is data science and how can you use it to strengthen your organization? This course will teach you about the skills you need on your data team, and how you can structure that team to meet your organization's needs. Data is everywhere! This course will provide you with an understanding of data sources your company can use and how to store that data. You'll also discover ways to analyze and visualize your data through dashboards and A/B tests. To wrap up the course, we'll discuss exciting topics in machine learning, including clustering, time series prediction, natural language processing (NLP), deep learning, and explainable AI! Along the way, you'll learn about a variety of real-world applications of data science and gain a better understanding of these concepts through practical exercises.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Introduction to Data Science\n        ",
           "index":"1",
           "description":"\n    We'll start the course by defining what data science is. We'll cover the data science workflow, and how data science is applied to real-world business problems. We'll finish the chapter by learning about ways to structure your data team to meet your organization's needs. \n  ",
           "parts":[
              "What is Data Science?",
              "Customer Segmentation Workflow",
              "Building a customer service chatbot",
              "Improving OKRs",
              "Applications of Data Science",
              "Assigning data science projects",
              "Investment research",
              "Building a data science team",
              "Interpreting a team sprint",
              "Editing a job posting",
              "Matching skills to jobs",
              "Classifying data tasks"
           ]
        },
        {
           "title":"\n          Data Collection and Storage\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Now that we understand the data science workflow, we'll dive deeper into the first step: data collection. We'll learn about the different data sources your company can draw from, and how to store that data once it's collected. \n  ",
           "parts":[
              "Data sources and risks",
              "Classifying data for security",
              "Creating web data events",
              "Protecting PII",
              "Solicited data",
              "Identifying question purpose",
              "Validating focus group feedback",
              "Net Promoter Score",
              "Collecting additional data",
              "Sorting data sources",
              "Asthma frequency",
              "Data storage and retrieval",
              "Cloud platforms",
              "Querying a database",
              "Which type of database?"
           ]
        },
        {
           "title":"\n          Analysis and Visualization\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, we'll discuss ways to explore and visualize data through dashboards. We'll discuss the elements of a dashboard and how to make a directed request for a dashboard. This chapter will also cover making ad hoc data requests and A/B tests, which are a powerful analytics tool that de-risk decision-making. \n  ",
           "parts":[
              "Dashboards",
              "Classifying dashboard elements",
              "Improving a dashboard",
              "Choosing the right dashboard",
              "Ad hoc analysis",
              "Filling out an ad hoc request",
              "Classifying requests",
              "A/B Testing",
              "Creating an A/B testing workflow",
              "Sample size",
              "Intermediate results"
           ]
        },
        {
           "title":"\n          Prediction\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, we'll discuss the buzziest topic in data science: machine learning! We'll cover supervised and unsupervised machine learning, and clustering. Then, we'll move on to special topics in machine learning, including time series prediction, natural language processing, deep learning, and explainable AI! \n  ",
           "parts":[
              "Supervised machine learning",
              "When to use Supervised Learning",
              "Features and labels",
              "Model evaluation",
              "Clustering",
              "Supervised vs. unsupervised",
              "Cluster size selection",
              "Special topics in Machine Learning",
              "Classifying machine learning tasks",
              "Sentiment Analysis",
              "Deep Learning and Explainable AI",
              "Finding the correct solution",
              "Should I use Deep Learning?"
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
     "title":"Data Visualization for Everyone",
     "description":"An introduction to data visualization with no coding involved.",
     "detailDescription":"Visualizing data using charts, graphs, and maps is one of the most impactful ways to communicate complex data. In this course, you’ll learn how to choose the best visualization for your dataset, and how to interpret common plot types like histograms, scatter plots, line plots and bar plots. You'll also learn about best practices for using colors and shapes in your plots, and how to avoid common pitfalls. Through hands-on exercises, you'll visually explore over 20 datasets including global life expectancies, Los Angeles home prices, ESPN's 100 most famous athletes, and the greatest hip-hop songs of all time.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Visualizing distributions\n        ",
           "index":"1",
           "description":"\n    In this chapter you’ll learn the value of visualizations, using real-world data on British monarchs, Australian salaries, Panamanian animals, and US cigarette consumption, to graphically represent the spread of a variable using histograms and box plots.\n  ",
           "parts":[
              "A plot tells a thousand words",
              "Motivating visualization",
              "Continuous vs. categorical variables",
              "Histograms",
              "Interpreting histograms",
              "Adjusting bin width",
              "Box plots",
              "Interpreting box plots",
              "Ordering box plots"
           ]
        },
        {
           "title":"\n          Visualizing two variables\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    You’ll learn how to interpret data plots and understand core data visualization concepts such as correlation, linear relationships, and log scales. Through interactive exercises, you’ll also learn how to explore the relationship between two continuous variables using scatter plots and line plots. You'll explore data on life expectancies, technology adoption, COVID-19 coronavirus cases, and Swiss juvenile offenders. Next you’ll be introduced to two other popular visualizations—bar plots and dot plots—often used to examine the relationship between categorical variables and continuous variables. Here, you'll explore famous athletes, health survey data, and the price of a Big Mac around the world.\n  ",
           "parts":[
              "Scatter plots",
              "Interpreting scatter plots",
              "Trends with scatter plots",
              "Line plots",
              "Interpreting line plots",
              "Logarithmic scales for line plots",
              "Line plots without dates on the x-axis",
              "Bar plots",
              "Interpreting bar plots",
              "Interpreting stacked bar plots",
              "Dot plots",
              "Interpreting dot plots",
              "Sorting dot plots"
           ]
        },
        {
           "title":"\n          The color and the shape\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It’s time to make your insights even more impactful. Discover how you can add color and shape to make your data visualizations clearer and easier to understand, especially when you find yourself working with more than two variables at the same time. You'll explore Los Angeles home prices, technology stock prices, math anxiety, the greatest hiphop songs, scotch whisky preferences, and fatty acids in olive oil.\n  ",
           "parts":[
              "Higher dimensions",
              "Another dimension for scatter plots",
              "Another dimension for line plots",
              "Using color",
              "Eye-catching colors",
              "Qualitative, sequential, diverging",
              "Highlighting data",
              "Plotting many variables at once",
              "Interpreting pair plots",
              "Interpreting correlation heatmaps",
              "Interpreting parallel coordinates plots"
           ]
        },
        {
           "title":"\n          99 problems but a plot ain't one of them\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this final chapter, you’ll learn how to identify and avoid the most common plot problems. For example, how can you avoid creating misleading or hard to interpret plots, and will your audience understand what it is you’re trying to tell them? All will be revealed! You'll explore wind directions, asthma incidence, and seats in the German Federal Council.\n  ",
           "parts":[
              "Polar coordinates",
              "Pie plots",
              "Rose plots",
              "Axes of evil",
              "Bar plot axes",
              "Dual axes",
              "Sensory overload",
              "Chartjunk",
              "Multiple plots",
              "Congratulations"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Data Literacy Fundamentals"
     ]
  },
  {
     "title":"Machine Learning for Business",
     "description":"Understand the fundamentals of Machine Learning and how it's applied in the business world.",
     "detailDescription":"This course will introduce the key elements of machine learning to the business leaders. We will focus on the key insights and base practices how to structure business questions as modeling projects with the machine learning teams. You will understand the different types of models, what kind of business questions they help answer, or what kind of opportunities they can uncover, also learn to identify situations where machine learning should NOT be applied, which is equally important. You will understand the difference between inference and prediction, predicting probability and amounts, and how using unsupervised learning can help build meaningful customer segmentation strategy.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Machine learning and data use cases\n        ",
           "index":"1",
           "description":"\n    Machine learning is used in many different industries and fields. It can fundamentally improve the business if applied correctly. This chapter outlines machine learning use cases, job roles and how they fit in the data needs pyramid.\n  ",
           "parts":[
              "Machine learning and data pyramid",
              "Terminology clarification",
              "Order data pyramid needs",
              "Match tasks in data pyramid",
              "Machine learning principles",
              "Modeling types",
              "Find supervised and unsupervised cases",
              "Job roles, tools and technologies",
              "Job role responsibilities",
              "Match data projects with job roles",
              "Team structure types"
           ]
        },
        {
           "title":"\n          Machine learning types\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter overviews different machine learning types. We will look into differences between causal and prediction models, explore supervised and unsupervised learning, and finally understand the sub-types of supervised learning: classification and regression. \n  ",
           "parts":[
              "Prediction vs. inference dilemma",
              "Inference and prediction differences",
              "Identify inference vs. prediction use cases",
              "Inference (causal) models",
              "Experiments and causal models",
              "Identify non actionable variables",
              "Prediction models (supervised learning)",
              "Supervised modeling principles",
              "Identify classification and regression models",
              "Prediction models (unsupervised learning)",
              "Unsupervised modeling use cases",
              "Classification, regression or unsupervised models"
           ]
        },
        {
           "title":"\n          Business requirements and model design\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter reviews key steps in scoping out business requirements, identifying and sizing machine learning opportunities, assessing the model performance, and identifying any performance risks in the process.\n  ",
           "parts":[
              "Business requirements",
              "Identify situation, opportunity and action",
              "Identify successful experiments",
              "Model training",
              "Model training process",
              "Training, validation and test",
              "Model performance measurement",
              "Poor performance examples",
              "Identify performance metrics",
              "Machine learning risks",
              "Fixing non performing models",
              "Non-actionable models",
              "Identify actionable recommendations"
           ]
        },
        {
           "title":"\n          Managing machine learning projects\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    This chapter will look into the best and worst practices of managing machine learning projects. We will identify most common machine learning mistakes, learn how to manage communication between the business and ML teams and finally address the challenges when deploying machine learning models to production.\n  ",
           "parts":[
              "Machine learning mistakes",
              "Identify machine learning mistakes",
              "Data needs pyramid",
              "Match ML mistakes by their types",
              "Communication management",
              "Business communication focus",
              "Market testing",
              "Machine learning in production",
              "Production systems",
              "Production systems ML use cases",
              "ML in production launch",
              "Wrap-up"
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
     "title":"Data Engineering for Everyone",
     "description":"Discover how data engineers lay the groundwork that makes data science possible.",
     "detailDescription":"In 2019, the average salary for data engineers overtook data scientists. How did this happen? Companies wanting to find the gold within their data realized it wasn’t possible if they hadn’t yet built the mine. Data engineers lay the foundations that make data science possible.\n\nIn this course, you’ll learn about a data engineer’s core responsibilities, how they differ from data scientists, and facilitate the flow of data through an organization. Through hands-on exercises you’ll follow Spotflix, a fictional music streaming company, to understand how their data engineers collect, clean, and catalog their data. By the end of the course, you’ll understand what your company's data engineers do, be ready to have a conversation with a data engineer, and have a solid foundation to start your own data engineer journey.",
     "time":"2 hours",
     "chapters":[
        {
           "title":"\n          What is data engineering?\n        ",
           "index":"1",
           "description":"\n    In this chapter, you’ll learn what data engineering is and why demand for them is increasing. You’ll then discover where data engineering sits in relation to the data science lifecycle, how data engineers differ from data scientists, and have an introduction to your first complete data pipeline.\n  ",
           "parts":[
              "Data engineering and big data",
              "Go with the flow",
              "Not responsible",
              "Big time",
              "Data engineers vs. data scientists",
              "Tell me the truth",
              "Who is it",
              "The data pipeline",
              "It's not true",
              "Pipeline"
           ]
        },
        {
           "title":"\n          Storing data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It’s time to talk about data storage—one of the main responsibilities for a data engineer. In this chapter, you’ll learn how data engineers manage different data structures, work in SQL—the programming language of choice for querying and storing data, and implement appropriate data storage solutions with data lakes and data warehouses.\n  ",
           "parts":[
              "Data structures",
              "Structures",
              "What's the difference",
              "SQL databases",
              "We can work it out",
              "Columns",
              "Different breeds",
              "Data warehouses and data lakes",
              "Tell the truth",
              "Our warehouse (in the middle of our street)"
           ]
        },
        {
           "title":"\n          Moving and processing data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Data engineers make life easy for data scientists by preparing raw data for analysis using different processing techniques at different steps. These steps need to be combined to create pipelines, which is when automation comes into play. Finally, data engineers use parallel and cloud computing to keep pipelines flowing smoothly.\n  ",
           "parts":[
              "Processing data",
              "Connect the dots",
              "Scheduling data",
              "Schedules",
              "One or the other",
              "Parallel computing",
              "Whenever, whenever",
              "Parallel universe",
              "Cloud computing",
              "Obscured by clouds",
              "Somewhere I belong",
              "We are the champions"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[
        "Data Literacy Fundamentals"
     ]
  },
  {
     "title":"Introduction to Scala",
     "description":"Begin your journey with Scala, a popular language for scalable applications and data engineering infrastructure.",
     "detailDescription":"Get an introduction to the programming language Scala. You'll learn why and how companies like Netflix, Airbnb, and Morgan Stanley are choosing Scala for large-scale applications and data engineering infrastructure. You'll learn the basics of the language, including syntax and style, focusing on the most commonly used features in the Scala standard library. You'll learn by writing code for a real program that plays a computer version of the popular card game Twenty-One. You’ll get a taste of the value of a hybrid object-oriented and functional programming language, of which Scala is the foremost example. We recommend this course for learners with intermediate-level programming experience, which can be acquired in the listed prerequisites.",
     "time":"3 hours",
     "chapters":[
        {
           "title":"\n          A Scalable Language\n        ",
           "index":"1",
           "description":"\n    Welcome to Scala! You'll learn what Scala is, who uses it, and why you should use it. You'll explore four common data types: integers, floating-point numbers, logical values, and text, using the Scala interpreter.\n  ",
           "parts":[
              "A scalable language",
              "What is Scala?",
              "Why use Scala?",
              "Who uses Scala?",
              "Scala code and the Scala interpreter",
              "What makes Scala scalable?",
              "Scala is object-oriented",
              "Reasons for programming in Scala",
              "Immutable variables (val) and value types",
              "Define immutable variables (val)",
              "Don't try to change me",
              "Mutable variables (var) and type inference",
              "Define mutable variables (var)",
              "You can change me",
              "Pros and cons of immutability"
           ]
        },
        {
           "title":"\n          Workflows, Functions, Collections\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Discover two more ways of writing Scala code (writing a script and building an application) and popular tools that make writing these programs easier. Then, learn what functions do and how to use them, and structure your data using the Array and List collections.\n  ",
           "parts":[
              "Scripts, applications, and real-world workflows",
              "Create and run a Scala script",
              "Benefits of compiled languages",
              "Functions",
              "What do functions do?",
              "Identify the body of a function",
              "Call a function",
              "Arrays",
              "Create and parameterize an array",
              "Initialize an array",
              "An array, all at once",
              "Updating arrays",
              "Lists",
              "Initialize and prepend to a list",
              "Initialize a list using cons and Nil",
              "Concatenate Lists"
           ]
        },
        {
           "title":"\n          Type Systems, Control Structures, Style\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Learn about Scala's advanced static type system. After learning how to control your program with if/else, while loops, and the foreach method, you’ll convert imperative-style code to the Scala-preferred functional style.\n  ",
           "parts":[
              "Scala's static type system",
              "Static typing vs. dynamic typing",
              "Pros and cons of static type systems",
              "Make decisions with if and else",
              "if and printing",
              "if expressions result in a value",
              "if and else inside of a function",
              "while and the imperative style",
              "A simple while loop",
              "Loop over a collection with while",
              "foreach and the functional style",
              "Is Scala purely a functional language?",
              "Converting while to foreach",
              "Signs of style",
              "The essence of Scala"
           ]
        }
     ],
     "prerequistes":[
        "Intermediate Python"
     ],
     "tracks":[
        "Data Engineer with Python"
     ]
  },
  {
     "title":"Introduction to Tableau",
     "description":"Get started with Tableau, a widely used business intelligence (BI) and analytics software to explore, visualize, and securely share data.",
     "detailDescription":"Tableau is a widely used business intelligence (BI) and analytics software trusted by companies like Amazon, Experian, and Unilever to explore, visualize, and securely share data in the form of Workbooks and Dashboards. With its user-friendly drag-and-drop functionality it can be used by everyone to quickly clean, analyze, and visualize your team’s data. You’ll learn how to navigate Tableau’s interface and connect and present data using easy-to-understand visualizations. By the end of this training, you’ll have the skills you need to confidently explore Tableau and build impactful data dashboards. Let’s dive in.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Getting Started with Tableau\n        ",
           "index":"1",
           "description":"\n    You will get an understanding of Tableau's fundamental concepts and features:  how to connect to data sources, use Tableau’s drag-and-drop interface, and create compelling visualizations. You will be explore an Airbnb dataset for the city of Amsterdam.\n  ",
           "parts":[
              "Introduction",
              "Connecting to data",
              "Loading data",
              "Loading workbooks",
              "Navigating Tableau",
              "Dimensions and measures",
              "A tour of the interface",
              "New York's neighborhoods prices",
              "Segmenting by room type",
              "Your first visualization",
              "Building and improving visualizations",
              "Building your first visualization",
              "Improving your first visualization",
              "Bringing it all together"
           ]
        },
        {
           "title":"\n          Building and Customizing Visualizations\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Let’s take it up a level and review the core concepts required for analyzing and exploring data in Tableau. You’ll learn how to slice and dice data with filters, create new columns using your own calculated fields, and aggregate dimensions and measures in a view. You will be working with education, social and infrastructure data.\n  ",
           "parts":[
              "Filtering and sorting",
              "Sorting and filtering through selection",
              "Sorting and excluding multiple fields",
              "Comparing G7 countries",
              "Filtering through the filter shelf",
              "Filtering for null values",
              "Top filters on Tableau",
              "Aggregation",
              "Scatter plots and aggregations",
              "CO2 Emissions and GDP in Sub Regions",
              "Counting on GDP per capita",
              "Standard deviation of life expectancy",
              "Calculated fields",
              "Creating calculated fields",
              "Calculated field for rounding",
              "Ratio between gender",
              "Average across gender"
           ]
        },
        {
           "title":"\n          Digging Deeper\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Dive deeper into analytics by learning how to visualize geographic data and plot data onto a map visualization. You’ll learn how to work with dates in Tableau and explore how the data changes with time. You’ll also learn how to add reference, trend, and forecasting lines to your views. You will do all of this exploring health statistics worldwide.\n  ",
           "parts":[
              "Mapping your data",
              "Creating a symbol map",
              "Your first symbol map",
              "More symbol map options",
              "World population",
              "Working with dates",
              "Visualizing dates",
              "Your data by year",
              "Your data by month",
              "Birth seasonality",
              "Reference lines, trend lines, and forecasting",
              "Adding reference lines, trend lines, and forecasting",
              "Reference lines",
              "Trend lines",
              "Forecasting",
              "Mortality forecast"
           ]
        },
        {
           "title":"\n          Presenting Your Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    Your data is full of interesting stories and insights still waiting to be told. Learn best practices for formatting and presenting data to tell data-driven stories. You’ll also learn how to create dashboards and use them to share key insights and support your team’s goals. You'll use daily stock price and foreign exchange rate data.\n  ",
           "parts":[
              "Best practices for formatting your visualizations",
              "Using color purposefully and readable fonts",
              "Use color purposefully",
              "Use readable fonts",
              "Use tooltips and adjust axes as necessary",
              "Use tooltips",
              "Adjust axes as necessary",
              "Monitor currency",
              "Dashboards",
              "Create a dashboard",
              "Creating a dashboard",
              "Customize your dashboard",
              "Add a tiled text box",
              "Add floating images and a button",
              "Currency and value",
              "Stories",
              "Create a story",
              "Creating a story",
              "Customize your story",
              "Tailor your captions",
              "Adjust layout",
              "My investments",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[

     ]
  },
  {
     "title":"Data Analysis in Excel",
     "description":"Learn how to analyze data in Excel.",
     "detailDescription":"There’s a lot more to Microsoft Excel than SUM and COUNT. Companies and institutions around the world use Excel’s powerful functions to efficiently transform mountains of raw data into clear insights, and now you can too.\n\nIn this course, you’ll develop employable analyst skills as you learn how to use time-saving keyboard shortcuts, convert and clean data types including text, times and dates, and build impressive logic functions and conditional aggregations. Through hands-on practice, you’ll learn over 35 new Excel functions, including CONCATENATE, VLOOKUP, and AVERAGEIF(S), and work with real-world Kickstarter data as you use your new-found Excel skills to analyze what makes a successful project.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploring Data\n        ",
           "index":"1",
           "description":"\n    In the first chapter, you’ll learn about the data analysis process, a framework that will help you transform raw data into information that is useful for decision-making. You will use Excel to start exploring the Kickstarter dataset.\n  ",
           "parts":[
              "Welcome to the wonderful world of Excel!",
              "What can Excel do?",
              "Data analysis steps",
              "Navigating the worksheet",
              "Exploring data in Excel",
              "Looking for exact matches",
              "Trimming your data",
              "Sorting the table",
              "Nesting functions",
              "Understanding data types in Excel",
              "Classifying data types",
              "Changing to text",
              "Rounding values"
           ]
        },
        {
           "title":"\n          Preparing Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll move on to data cleaning and learn about a variety of functions that help you prepare text and date fields. Additionally, you’ll use VLOOKUP, one of Excel’s most essential functions, to add data into your dataset from another table.\n  ",
           "parts":[
              "Cleaning text data",
              "Joining text strings",
              "Capitalizing words",
              "Using upper and lower case",
              "Extracting text from cells",
              "Counting characters",
              "Extracting text",
              "Replacing characters",
              "Preparing date data",
              "Using the system date",
              "Working with dates",
              "Finding the day of the week",
              "Figuring out the month",
              "The most important function in Excel",
              "Finding the matching column",
              "Working with range_lookup",
              "Using VLOOKUP"
           ]
        },
        {
           "title":"\n          Analyzing Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    For the final chapter, you’ll get down to business and use an assortment of functions to analyze the Kickstarter data and better understand what features successful projects have in common.\n  ",
           "parts":[
              "But who's COUNTing?",
              "Choosing the right count function",
              "Learning to count",
              "Counting blank cells",
              "Excel the great calculator",
              "Math functions in Excel",
              "Finding the minimum",
              "Aggregating data",
              "Logic functions",
              "The arguments of the IF() function",
              "Performing a logical test",
              "Taking IF() to the next level",
              "Conditional aggregations",
              "Finding unique values",
              "Counting projects",
              "Determining the average",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[

     ]
  },
  {
     "title":"Data Analysis in Excel",
     "description":"Learn how to analyze data in Excel.",
     "detailDescription":"There’s a lot more to Microsoft Excel than SUM and COUNT. Companies and institutions around the world use Excel’s powerful functions to efficiently transform mountains of raw data into clear insights, and now you can too.\n\nIn this course, you’ll develop employable analyst skills as you learn how to use time-saving keyboard shortcuts, convert and clean data types including text, times and dates, and build impressive logic functions and conditional aggregations. Through hands-on practice, you’ll learn over 35 new Excel functions, including CONCATENATE, VLOOKUP, and AVERAGEIF(S), and work with real-world Kickstarter data as you use your new-found Excel skills to analyze what makes a successful project.",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Exploring Data\n        ",
           "index":"1",
           "description":"\n    In the first chapter, you’ll learn about the data analysis process, a framework that will help you transform raw data into information that is useful for decision-making. You will use Excel to start exploring the Kickstarter dataset.\n  ",
           "parts":[
              "Welcome to the wonderful world of Excel!",
              "What can Excel do?",
              "Data analysis steps",
              "Navigating the worksheet",
              "Exploring data in Excel",
              "Looking for exact matches",
              "Trimming your data",
              "Sorting the table",
              "Nesting functions",
              "Understanding data types in Excel",
              "Classifying data types",
              "Changing to text",
              "Rounding values"
           ]
        },
        {
           "title":"\n          Preparing Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll move on to data cleaning and learn about a variety of functions that help you prepare text and date fields. Additionally, you’ll use VLOOKUP, one of Excel’s most essential functions, to add data into your dataset from another table.\n  ",
           "parts":[
              "Cleaning text data",
              "Joining text strings",
              "Capitalizing words",
              "Using upper and lower case",
              "Extracting text from cells",
              "Counting characters",
              "Extracting text",
              "Replacing characters",
              "Preparing date data",
              "Using the system date",
              "Working with dates",
              "Finding the day of the week",
              "Figuring out the month",
              "The most important function in Excel",
              "Finding the matching column",
              "Working with range_lookup",
              "Using VLOOKUP"
           ]
        },
        {
           "title":"\n          Analyzing Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    For the final chapter, you’ll get down to business and use an assortment of functions to analyze the Kickstarter data and better understand what features successful projects have in common.\n  ",
           "parts":[
              "But who's COUNTing?",
              "Choosing the right count function",
              "Learning to count",
              "Counting blank cells",
              "Excel the great calculator",
              "Math functions in Excel",
              "Finding the minimum",
              "Aggregating data",
              "Logic functions",
              "The arguments of the IF() function",
              "Performing a logical test",
              "Taking IF() to the next level",
              "Conditional aggregations",
              "Finding unique values",
              "Counting projects",
              "Determining the average",
              "Wrap-up"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[

     ]
  },
  {
     "title":"Introduction to Power BI",
     "description":"Gain a 360° overview of how to explore and use Power BI to build impactful reports.",
     "detailDescription":"Gain a 360° overview of how to explore and use Power BI to build impactful reports. In this course, you’ll go from zero to hero, as you discover how to use this popular business intelligence platform through hands-on exercises. You’ll first learn how to confidently load and transform data using Power Query and the importance of data models, before diving into creating visualizations using Power BI’s drag-and-drop functionality. You’ll also learn how to drill-down into reports and make your reports fully interactive. Lastly, you'll level-up your skills using DAX formulas (Data Analysis Expressions) to create customized calculated columns and fields to better analyze your data. Get started now. You've got the power!",
     "time":"4 hours",
     "chapters":[
        {
           "title":"\n          Getting Started with Power BI\n        ",
           "index":"1",
           "description":"\n    Discover how to navigate this intuitive tool and get to grips with Power BI’s Data, Model, and Report views. You’ll load multiple datasets in the Data view, build a data model to understand the relationships between your tables in Model view, and create your first bar graph and interactive map visualization in Report view. You’ll also practice using Power Query Editor to prep your data for analysis.\n  ",
           "parts":[
              "Introduction to Power BI",
              "Features of Power BI",
              "Getting started!",
              "Loading existing reports",
              "Your first visualization",
              "Add a card",
              "Slicers and Tables",
              "Slicers",
              "More columns",
              "Table",
              "Transforming data",
              "Cleaning data",
              "Power Query Editor",
              "Transform before load",
              "Field aggregation",
              "Transforming and formatting columns",
              "Transforming columns",
              "Formatting currency",
              "Making maps with geographic data"
           ]
        },
        {
           "title":"\n          Visualizing Data\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    It’s time to power-up your business intelligence skills! Through hands-on exercises, you’ll learn how to change and format a wide range of visualizations, before moving on to sorting data and creating hierarchies—making it possible for you to drill into your reports. Lastly, you’ll discover how to filter the information in your reports by location and control how these filters interconnect and interact with other visuals in your report.\n  ",
           "parts":[
              "Visualization options",
              "Choosing the right visual",
              "Making changes",
              "Changing visuals",
              "Editing properties",
              "Sorting and more formatting",
              "Sorting data",
              "Using the slicer",
              "Making it look good",
              "Drilling down and filtering",
              "Working with hierarchies",
              "The underlying data and hierarchies",
              "Looking at the data",
              "Creating a hierarchy",
              "Filters",
              "Adding a filter",
              "Turning off interactions",
              "Applying advanced filtering"
           ]
        },
        {
           "title":"\n          Creating Calculations with DAX\n        ",
           "index":"\n\n  \n    \n  \n\n",
           "description":"\n    In this chapter, you’ll learn how to create customized calculations using Microsoft's formula language, DAX (Data Analysis Expressions). Very similar to how formulas are written in Excel, you'll learn how to create calculated columns and tables—and when you should use them. You'll then progress to writing powerful calculated measures, leveraging Power BI's Quick Measures, to create complex DAX calculations like year over year change.\n  ",
           "parts":[
              "Introduction to DAX",
              "Calculated tables and columns",
              "Generating passwords",
              "Nested function",
              "Profit column",
              "Calculated measures",
              "Average function",
              "Product count",
              "Profit margin ratio",
              "Calculated measures and Quick Measures",
              "Calculate function and Quick Measures",
              "Calculate function",
              "Your first Quick Measure",
              "Time-based calculations",
              "CALCULATE() and dates",
              "Prior year profits",
              "Quarter over quarter change",
              "Congratulations!"
           ]
        }
     ],
     "prerequistes":[

     ],
     "tracks":[

     ]
  }
];

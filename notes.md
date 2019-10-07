# Notes

## Menu

- Introduction to RDBMS
- SQL
- Knex ++
- CRUD operations persisting data

R = Relational

DB = Database

M = Management

S = System

A Relation is similar to a spreadsheet, it has rows with columns.

Another name for a Relations is: **Table**.

The data on a Relational Database is stored in **Tables**.

[Client] <= HTTP (methods/endpoints/JSON data) => [API running on a Web Server] <> [Database Management System]

Some popular DBMS

- Oracle
- MySQL
- PostgreSQL
- MS SQL Server
- SQLite3 (file-based RDBMS)
- MongoDB (NO [Not Only] SQL database)

HTTP is a network protocol. A protocol is a set of rules for communication over the network.

Each database vendor can (and probably will) have it's own protocol.

SQL = Structured **Query** Language. SQL is a Standard.

Each DBMS will implement part of the SQL standard and add extra features on top.

Some SQL Commands:

select categoryName Name, Description as Details from categories

SELECT \* FROM Products order by price desc

```sql
SELECT * FROM Products
where price > 45
order by price desc
```

> Use single quotes to wrap dates and string values in SQL.

```sql
SELECT country, city, *
FROM [Customers]
where country = 'Germany'
order by country, city;
```

```sql
SELECT country, city, *
FROM [Customers]
where country = 'Germany' or country = 'Argentina'
order by country, city;
```

```sql
SELECT country, city, *
FROM [Customers]
where country in ('Germany', 'Argentina', 'Austria')
order by country, city;
```

```sql
SELECT * FROM [Products]
order by price desc
limit 5
```

```sql
insert into categories (description, categoryName)
values ('Swag', 'Lambda Swag')
```

```sql
update Categories set description = 'Lambda School Swag'
--select * from categories
where categoryId = 9
```

```sql
update Categories set description = 'Lambda School Swag', categoryName = 'The Swag'
--select * from categories
where categoryId = 9
```

```sql
delete from Categories
--select * from categories
where categoryId = 9
```

## Connect to a DBMS from our API

[API] <= JS => [Knex] <- SQL -> [DB Driver] <= DBMS Protocol => [DBMS]

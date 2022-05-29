/*1.
film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
*/
SELECT DISTINCT replacement_cost
FROM film;

/*2.
film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?
*/
SELECT count (DISTINCT replacement_cost)
FROM film

/*3.
film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
*/
SELECT count(*)
FROM film
WHERE title LIKE 'T%' AND rating = 'G';

/*4.
country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
*/
SELECT count(*)
FROM country
WHERE country LIKE '_____'

/*5.
city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?
*/
SELECT count(*)
FROM city
WHERE city LIKE '%R' OR city LIKE '%r'

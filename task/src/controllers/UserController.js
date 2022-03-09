/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
 import users from "../data/users.js";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */


/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = (title) => {
    const formattedName = users.map ((users) =>{
        const data ={
            name: title + "." + users.name,
            age: users.age,
            major: users.major,
        }
        return data
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(formattedName);
        }, 3000);
    });

};


/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (name) => {
    const findtedName = users.find((users) => {
        return users.name='Aufa'; 
    });
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(findtedName);
        }, 2000);
    });
};

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (major) => {
    const filtertedMajor = users.filter((users) => {
        return users.major='English'; 
    });
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(filtertedMajor);
        }, 2000);
    });

};

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export {formatUser, findByName, filterByMajor}

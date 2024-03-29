const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);



module.exports.createThongBaoDeTai = function (thongbaoInfo, callback) {
    const { tbdt_noidung, sv_ma, tbdt_xoa, tbdt_thoigian, dt_ma, bl_ma } = thongbaoInfo;

    pool.query('INSERT INTO thongbao_detai (tbdt_noidung, sv_ma, tbdt_xoa, tbdt_thoigian, dt_ma, bl_ma,tbdt_tuade ,tbdt_dadoc) VALUES ($1, $2, $3, $4, $5, $6,\'Comment\', 0)', [tbdt_noidung, sv_ma, tbdt_xoa, tbdt_thoigian, dt_ma, bl_ma], (error, result) => {

            callback(error, result);
    });
    
};


module.exports.getThongBaoDeTaiList = function (sv_ma, callback) {
    pool.query('SELECT * FROM thongbao_detai WHERE sv_ma=$1',[sv_ma], (error, results) => {
        callback(error, results.rows);
    });
};






module.exports.updateThongBaoDeTai = function (tbdt_stt, sv_ma, bl_ma, dt_ma , callback) {
    pool.query('UPDATE thongbao_detai set tbdt_dadoc=1 WHERE tbdt_stt=$1 and sv_ma=$2 and bl_ma=$3 and dt_ma=$4 ', [tbdt_stt, sv_ma, bl_ma, dt_ma], (error, result) => {
        callback(error, result);
    });
};
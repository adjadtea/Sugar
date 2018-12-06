/*
 * German locale definition.
 * See the readme for customization and more information.
 * To set this locale globally:
 *
 * Sugar.Date.setLocale('de')
 *
 */
Sugar.Date.addLocale('de', {
  'plural': true,
  'units': 'miliseken,detik|dtk,menit|mnt,Jam,Hari,Minggu|mggu,Bulan|bln,Tahun|thn',
  'months': 'Jan:uari|,Feb:ruari|,Mar:et|,Apr:il|,Mei,Juni,Juli,Ag:ustus|,Sept:ember|,Okt:ober|,Nov:ember|,Des:ember|',
  'weekdays': 'Minggu|Ahad,Sen:in|,Sel:asa|,Rab:u|,Kam:is|,Jum:at|,Sab:tu|',
  'numerals': 'nol,satu,dua,tiga,empat,lima,enam,tujuh,delapan,sembilan',
  'tokens': '',
  'short': '{dd}/{MM}/{yyyy}',
  'medium': '{d} {Month} {yyyy}',
  'long': '{d} {Month} {yyyy} {time}',
  'full': '{Weekday}, {d} {Month} {yyyy} {time}',
  'stamp': '{Dow} {d} {Mon} {yyyy} {time}',
  'time': '{H}:{mm}',
  'past': '{sign} {num} {unit}',
  'future': '{sign} {num} {unit}',
  'duration': '{num} {unit}',
  'timeMarkers': 'um',
  'ampm': 'pagi,sore',
  'modifiers': [
    { 'name': 'day', 'src': 'vorgestern', 'value': -2 },
    { 'name': 'day', 'src': 'kemarin', 'value': -1 },
    { 'name': 'day', 'src': 'sekarang', 'value': 0 },
    { 'name': 'day', 'src': 'esok', 'value': 1 },
    { 'name': 'day', 'src': 'lusa', 'value': 2 },
    { 'name': 'sign', 'src': 'sebelumnya', 'value': -1 },
    { 'name': 'sign', 'src': 'sesudah', 'value': 1 },
    { 'name': 'shift', 'src': 'terakhir', 'value': -1 },
    { 'name': 'shift', 'src': 'selanjutnya', 'value': 1 }
  ],
  'parse': [
    '{months} {year?}',
    '{sign} {num} {unit}',
    '{num} {unit} {sign}',
    '{shift} {unit:5-7}'
  ],
  'timeParse': [
    '{shift?} {day|weekday}',
    '{weekday?},? {date}\\.? {months?}\\.? {year?}'
  ],
  'timeFrontParse': [
    '{shift} {weekday}',
    '{weekday?},? {date}\\.? {months?}\\.? {year?}'
  ]
});

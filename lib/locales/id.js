/*
 * Indonesia locale definition.
 * See the readme for customization and more information.
 * To set this locale globally:
 *
 * Sugar.Date.setLocale('id')
 *
 */
Sugar.Date.addLocale('id', {
  'plural': true,
  'units': 'ms|miliseken,dtk|detik|,mnt|menit,jam,hr|hari,mggu|minggu,bln|bulan,thn|tahun',
  'months': 'jan:uari|,feb:ruari|,mrt|maret,apr:il|,mei,jun:i|,jul:i|,ags|agustus,sep:tember|,okt:ober|,nov:ember|,des:ember|',
  'weekdays': 'minggu|mgu,senin|snn,selasa|sls,rabu|rbu,kamis|kms,jumat|jmt,sabtu|sbt',
  'numerals': 'nol,satu,dua,tiga,empat,lima,enam,tujuh,delapan,sembilan,sepuluh',
  'short':  '{dd}-{MM}-{yyyy}',
  'medium': '{d} {month} {yyyy}',
  'long':   '{d} {Month} {yyyy} {time}',
  'full':   '{weekday}, {d} {Month} {yyyy} {time}',
  'stamp':  '{dow} {d} {Mon} {yyyy} {time}',
  'time':   '{H}:{mm}',
  'past':   '{num} {unit} {sign}',
  'future': '{num} {unit} {sign}',
  'duration': '{num} {unit}',
  'modifiers': [
    { 'name': 'day', 'src': 'kemarin', 'value': -1 },
    { 'name': 'day', 'src': 'sekarang', 'value': 0 },
    { 'name': 'day', 'src': 'besok', 'value': 1 },
    { 'name': 'day', 'src': 'lusa', 'value': 2 },
    { 'name': 'sign', 'src': 'lalu', 'value': -1 },
    { 'name': 'sign', 'src': 'dari sekarang', 'value': 1 },
    { 'name': 'shift', 'src': 'sebelumnya', 'value': -1 },
    { 'name': 'shift', 'src': 'berikutnya', 'value': 1 }
  ],
  'parse': [
    '{months} {year?}',
    '{num} {unit} {sign}',
    '{0?} {unit:5-7} {shift}',
    '{0?} {shift} {unit:5-7}'
  ],
  'timeParse': [
    '{shift?} {day|weekday}',
    '{weekday?},? {date} {months?}\\.? {year?}'
  ],
  'timeFrontParse': [
    '{shift?} {day|weekday}',
    '{weekday?},? {date} {months?}\\.? {year?}'
  ]
});

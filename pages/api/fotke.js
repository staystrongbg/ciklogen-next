import fotke from '../../fotke';

export default function handler(req, res) {
  res.statusCode = 200;
  res.json(fotke);
}

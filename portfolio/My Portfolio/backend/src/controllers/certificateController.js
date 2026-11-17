import { Certificate } from '../config/db.js'

const getCertificates = async (req, res) => {
  try {
    const baseURL = `${req.protocol}://${req.get('host')}`
    const certificates = await Certificate.findAll()

    const result = certificates.map(item => ({
      ...item.toJSON(),
      image: item.image ? `${baseURL}${item.image}` : null
    }))

    res.json(result)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

const addCertificate = async (req, res) => {
  try {
    const { name, organization, route, date } = req.body
    const image = req.file ? `/uploads/certificates/${req.file.filename}` : null

    const certificate = await Certificate.create({ image, name, organization, route, date })
    res.status(201).json(certificate)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

const deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByPk(req.params.id)

    if (!certificate) return res.status(404).json({ msg: 'Certificate not found' })

    await certificate.destroy()
    res.status(200).json({ msg: 'Successfully deleted', data: certificate })
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

export { getCertificates, addCertificate, deleteCertificate }
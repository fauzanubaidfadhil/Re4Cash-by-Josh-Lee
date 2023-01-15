import Button, { LinkButton } from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengelolakelolalapakpenjualantambah.css";
import { useState } from "react";
import { ButtonTambah } from "../components/OverlayPengelola";

const PengelolaKelolaLapakPenjualanTambah = () => {

  const [buttontambah, setButtonTambah] = useState(false)

  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-form-dashboard-kelolalapakpenjualan-tambah">
              <h4>Tambah Data Penjualan</h4>
              <form className="card-formtambah-dashpengelola-kelolalapakpenjualan">
                <div className="grup-formtambah-dashpengelola-kelolalapakpenjualan">
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Jenis Produk</label>
                    <div className="formtambah-radio">
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Daur Ulang</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Mentahan</label>
                      </div>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Foto Produk</label>
                    {/* <input type="file"/> */}
                    <div className="form-uploadpicture">
                      <iconify-icon icon="mdi:file-image-plus-outline" />
                      <p>Tambahkan foto (1/5)</p>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Nama Produk</label>
                    <input type="text"/>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Deskripsi</label>
                    <textarea></textarea>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Harga</label>
                    <div className="form-inputharga">
                      <span className="form-inputharga-text">Rp</span>
                      <input type="text" className="form-inputharga-kolom"/>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Satuan</label>
                    <div className="formtambah-radio">
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Kg</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Pcs</label>
                      </div>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Kategori</label>
                    <div className="formtambah-radio">
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Organik</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Anorganik</label>
                      </div>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Sub Kategori</label>
                    <select>
                      <option value="dikemas"></option>
                      <option value="dikemas">Plastik</option>
                      <option value="dikirim">Botol Plastik</option>
                      <option value="selesai">Botol Kaca</option>
                      <option value="selesai">Aluminium</option>
                      <option value="selesai">Kaleng</option>
                      <option value="selesai">...</option>
                    </select>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Stok Barang</label>
                    <input type="number" className="formtambah-number"/>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label>Model</label>
                    {/* <input type="text" placeholder="Rp 20,000.00"/> */}
                    <div className="form-inputmodel">
                      <span className="form-inputmodel-pilihan">+</span>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Distribusi</label>
                    <div className="formtambah-radio">
                      <div className="formtambah-radio-pilihan">
                        <input type="checkbox"/>
                        <label>Kami Antar</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="checkbox"/>
                        <label>Ambil Sendiri</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="checkbox"/>
                        <label>Kurir</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-formtambah-dashpengelola-kelolalapakpenjualan">
                  <LinkButton type="BUTTON_BATAL" to="/kelola-lapak-penjualan-pengelola">Batal</LinkButton>
                  <Button onClick={()=>setButtonTambah(!buttontambah)} type="BUTTON_TAMBAH">Tambah</Button>
                </div>
              </form>                
            </section>
          </div>
          <Footerdashboardpengelola/>
        </div>
      </div>
      {buttontambah && <ButtonTambah link='/kelola-lapak-penjualan-pengelola' setButtonTambah={setButtonTambah}/>}
    </HOCdashboardpengelola>
  );
};

export default PengelolaKelolaLapakPenjualanTambah;
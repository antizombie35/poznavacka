var functionVersion = "1.5";
var dataVersion = "1.1";
var buildVersion = "0";
var contributors = "A35, H34";
var gotBuildHash = false;

var data = [
    {id: 0, rAns: "Martináč hruškový", src: ["https://upload.wikimedia.org/wikipedia/commons/8/87/Saturnia_pyri_Soulier.jpg","https://www.biolib.cz/IMG/GAL/174359.jpg"]},
    {id: 1, rAns: "Babočka paví oko", src: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Tagpfauenauge_Peacock_Butterfly_%283736504034%29.jpg/250px-Tagpfauenauge_Peacock_Butterfly_%283736504034%29.jpg","https://motyli.kolas.cz/foto/babocky/male/09723356.jpg"]},
    {id: 2, rAns: "Rybenka domácí", src: ["https://www.dewolf.cz/wp-content/uploads/2019/07/rybenka1.jpg","https://www.krejsashop.cz/userfiles/blog/big/blg-142-14.jpg"]},
    {id: 3, rAns: "Šídlo modré", src: ["https://www.biolib.cz/IMG/GAL/19020.jpg","https://www.vazky.net/wp-content/uploads/sites/19/2021/03/Aeshna-cyanea-sidlo-modre-IMG_2231-Edit.jpg","https://www.vazky.net/wp-content/uploads/sites/19/2021/03/Aeshna-cyanea-2007_-09_-22-11_-53_-31_-petrovice.jpg"]},
    {id: 4, rAns: "Vážka ploská", src: ["https://upload.wikimedia.org/wikipedia/commons/a/af/Female_Libellula_depressa_bgiu.jpg","https://upload.wikimedia.org/wikipedia/commons/8/8e/Platetrum_depressum_1_Luc_Viatour.JPG"]},
    {id: 5, rAns: "Šváb obecný", src: ["https://www.hubeniskudcu.cz/images/svab_obecny.png?crc=222240164","http://www.brouci.cz/files/web200/clanky/svab-obecny-a-rus-domaci.jpg"]},
    {id: 6, rAns: "Rus domácí", src: ["https://www.krejsashop.cz/userfiles/blog/big/blg-140-14.jpg","https://upload.wikimedia.org/wikipedia/commons/1/17/Blatella_germanica_p1160206.jpg"]},
    {id: 7, rAns: "Škvor obecný", src: ["http://www.chovzvirat.cz/images/zvirata/skvor-obecny_rih70xm.jpg","https://upload.wikimedia.org/wikipedia/commons/3/34/Earwig_on_white_background.jpg"]},
    {id: 8, rAns: "Kudlanka nábožná", src: ["http://www.chovzvirat.cz/images/zvirata/kudlanka-nabozna_oej98si.jpg","https://www.ceska-krajina.cz/wp-content/uploads/2019/08/ceska-krajina-kudlanka-nabozna-wikimedia-premysl-malek.jpg"]},
    {id: 9, rAns: "Pakobylka indická", src: ["https://www.biolib.cz/IMG/GAL/23147.jpg","https://leporelo.info/pics/small.php?f=pakobylka.jpg&s=400"]},
    {id: 10, rAns: "Kobylka zelená", src: ["https://www.nasezahrada.com/wp-content/uploads/2019/08/kobylka-zelena-700x420-c-default.jpg","https://upload.wikimedia.org/wikipedia/commons/3/37/Heupferd_fg01.jpg"]},
    {id: 11, rAns: "Cvrček polní", src: ["https://tvorove.cz/wp-content/uploads/2021/05/Houslovy_virtuoz_Cvrcek_polni_2-e1621098993837-1000x667.jpg","https://upload.wikimedia.org/wikipedia/commons/1/10/Gryllus_campestris_MHNT.jpg"]},
    {id: 12, rAns: "Krtononožka obecná", src: ["https://upload.wikimedia.org/wikipedia/commons/c/cd/Gryllotalpa_gryllotalpa_MHNT.jpg","http://www.chovzvirat.cz/images/zvirata/krtonozka-obecna_sqx56ek.jpg"]},
    {id: 14, rAns: "Saranče stěhovavé", src: ["https://upload.wikimedia.org/wikipedia/commons/b/bc/Saran%C4%8De_st%C4%9Bhovav%C3%A1_9054.jpg","https://plus.rozhlas.cz/sites/default/files/images/03045780.jpeg"]},
    {id: 15, rAns: "Veš dětská", src: ["http://www.chovzvirat.cz/images/zvirata/ves-detska_azb11hv.jpg","http://4a.upol.cz/images/ves01.jpg","https://www.macrophotography.cz/photos/none-478.jpg"]},
    {id: 16, rAns: "Veš muňka", src: ["http://www.chovzvirat.cz/images/zvirata/ves-munka_jle58rm.jpg","https://upload.wikimedia.org/wikipedia/commons/6/69/Crab_louse_%28251_23%29_Female%2C_from_a_human_host.jpg"]},
    {id: 17, rAns: "Třásněnka západní", src: ["https://img.primadoma.cz/w_10/24/9f/column/249f2bbcd6ad9ec22dda13c632061058_trasnenka.jpg","https://www.levnepostriky.cz/i/gallery/20130209151710_strapka.jpg"]},
    {id: 18, rAns: "Pěnodějka obecná", src: ["http://www.chovzvirat.cz/images/zvirata/penodejka-obecna_ygm10ud.jpg","https://upload.wikimedia.org/wikipedia/commons/f/fc/Aphrophoridae_-_Philaenus_spumarius-1.JPG"]},
    {id: 19, rAns: "Cikáda viničná", src: ["https://www.biolib.cz/IMG/GAL/279149.jpg","http://a-svet.cz/c/cikada-vinicna/cikada-vinicna.jpg"]},
    {id: 20, rAns: "Vlnatka krvavá", src: ["https://cdn.myshoptet.com/usr/www.hubeni-skudcu.cz/user/documents/upload/vlnatka%20krvav%C3%A1.jpg","https://www.agromanual.cz/images/atlas_skudci/vlnatka_krvava_kolonie_meic_rod.jpg"]},
    {id: 21, rAns: "Mšice maková", src: ["https://upload.wikimedia.org/wikipedia/commons/d/d1/Aphids_May_2010-1.jpg","https://www.agromanual.cz/images/atlas_skudci/msice_makova_1_pozdena.jpg"]},
    {id: 22, rAns: "Puklice švestková", src: ["http://www.guh.cz/edu/bi/biologie_bezobratli/foto09/foto_042.jpg","https://upload.wikimedia.org/wikipedia/commons/6/67/Zimolez_L.nitida_02.JPG"]},
    {id: 23, rAns: "Ruměnice pospolná", src: ["https://upload.wikimedia.org/wikipedia/commons/9/9f/Pyrrhocoris_apterus_%28aka%29.jpg","https://prima-receptar.cz/wp-content/uploads/2020/04/rumenice.jpg"]},
    {id: 24, rAns: "Kněžice", src: ["https://upload.wikimedia.org/wikipedia/commons/f/f3/Heteroptera_fg02.jpg","https://upload.wikimedia.org/wikipedia/commons/0/0c/Kn%C4%9B%C5%BEice_zelen%C3%A1.jpg"]},
    {id: 25, rAns: "Štěnice domácí", src: ["https://upload.wikimedia.org/wikipedia/commons/8/87/Bed_bug%2C_Cimex_lectularius.jpg","https://www.krejsashop.cz/userfiles/blog/big/blg-144-14.jpg"]},
    {id: 26, rAns: "Bruslařka", src: ["https://upload.wikimedia.org/wikipedia/commons/1/1d/Water_strider_Gerris_lacustris.jpg","http://nature.unas.cz/wp-content/uploads/2016/06/gerris2.jpg"]},
    {id: 27, rAns: "Vodoměrka", src: ["https://upload.wikimedia.org/wikipedia/commons/0/00/Hydrometra_stagnorum01.jpg","https://cdn.administrace.tv/2022/04/23/medium_169/158d1e6a6efc2e6b5c373d0ccf3b8c66.jpg"]},
    {id: 28, rAns: "Zlatoočka skvrnitá", src: ["https://upload.wikimedia.org/wikipedia/commons/0/06/Chrysoperla.carnea.jpg","http://www.naturabohemica.cz/images/Chrysopa_perla_4303.jpg"]},
    {id: 29, rAns: "Mravkolev běžný", src: ["https://upload.wikimedia.org/wikipedia/commons/7/7f/Myrmeleon_pictifrons.jpg","http://www.chovzvirat.cz/images/zvirata/mravkolev-bezny_mzj84tl.jpg"]},
    {id: 30, rAns: "Pilořitka", src: ["https://www.skudci.com/files/piloritka-velka-teaser_0.jpg","https://upload.wikimedia.org/wikipedia/commons/3/34/Urocerus_gigas4.jpg"]},
    {id: 31, rAns: "Ploskohřbetka", src: ["https://deti.vls.cz/data/web/brevire/hmyz/cephalcia-abietis-autor-jakub-beranek.jpg","http://www.chovzvirat.cz/images/zvirata/ploskohrbetka-smrkova_bqe33ek.jpg"]},
    {id: 32, rAns: "Žlabatka", src: ["https://leporelo.info/pics/pic/zlabatky.jpg","https://www.blanokridlivpraze.cz/obrazky/2016/63238-zlabatka-dubova-halka.jpg","https://upload.wikimedia.org/wikipedia/commons/b/b6/Cynips_quercusfolii.jpg"]},
    {id: 33, rAns: "Lumek", src: ["https://upload.wikimedia.org/wikipedia/commons/1/1c/Rhyssa_persuasoria.jpg","http://www.chovzvirat.cz/images/zvirata/lumek-veliky_pwf00xg.jpg"]},
    {id: 34, rAns: "Lumčík", src: ["https://www.irozhlas.cz/sites/default/files/styles/zpravy_fotogalerie_large/public/images/02422477.jpeg?itok=Ngi_zb5a","http://www.chovzvirat.cz/images/zvirata/lumcik-zlutonohy_mbg51we.jpg"]},
    {id: 35, rAns: "Kutilky", src: ["https://upload.wikimedia.org/wikipedia/commons/5/5c/Sceliphron_curvatum_02.JPG","https://www.najdije.cz/wp-content/uploads/2019/11/kutilka-asijska-600-edit-2-e1573264168567.jpg"]},
    {id: 36, rAns: "Samotářské včely", src: ["https://upload.wikimedia.org/wikipedia/commons/9/9f/Megachile_lagopoda_1.jpg","https://www.zelenadomacnost.com/blog/wp-content/uploads/2020/03/valch%C3%A1%C5%99ka-Denis-2.jpg"]},
    {id: 37, rAns: "Mravenci všežravý", src: ["https://www.deratizator.cz/images/bt_portfolio/6/original/aec15131dede94e330a239ae5cd888e5.jpeg","https://www.krejsashop.cz/userfiles/blog/big/blg-126-14.jpg"]},
    {id: 38, rAns: "Vosa", src: ["https://tvorove.cz/wp-content/uploads/2021/06/Vosa_obecna_mala_bojovnice_2-1000x667.jpg","https://upload.wikimedia.org/wikipedia/commons/2/24/Vespula_germanica.jpg"]},
    {id: 39, rAns: "Sršeň", src: ["https://upload.wikimedia.org/wikipedia/commons/1/1a/160921_Hornisse_01.jpg","https://upload.wikimedia.org/wikipedia/commons/a/ab/Vespa_crabro-lateral.jpeg"]},
    {id: 40, rAns: "Čmeláci", src: ["https://www.receptyprimanapadu.cz/wp-content/uploads/2020/04/iStock-638135966.jpg","https://1884403144.rsc.cdn77.org/foto/cmelak/MHgwL3NtYXJ0L3RoYg/5-full-3494829.jpg?v=3&st=4IsKXKeNN2hxJINAIlPjP4LL3Dl6z6v9Bjd35UtVAuk&ts=1600812000&e=0"]},
    {id: 41, rAns: "Včela medonosná", src: ["http://www.chovzvirat.cz/images/zvirata/vcela-medonosna_amw36ui.jpg","https://cdn.wander-book.com/images/vizitky/detail/vcela-medonosna-22162.jpg"]},
    {id: 42, rAns: "Střevlík měděný", src: ["https://upload.wikimedia.org/wikipedia/commons/a/a7/Carabus_cancellatus03.jpg","https://www.biolib.cz/IMG/GAL/154273.jpg"]},
    {id: 43, rAns: "Krajník pižmový", src: ["http://www.chovzvirat.cz/images/zvirata/krajnik-pizmovy_blk13bh.jpg","https://upload.wikimedia.org/wikipedia/commons/1/1c/Calosoma_sycophanta.JPG"]},
    {id: 44, rAns: "Potápník vroubený", src: ["https://www.biolib.cz/IMG/GAL/36998.jpg","https://upload.wikimedia.org/wikipedia/commons/6/67/Gelbrandk%C3%A4fer_%28Dytiscus_marginalis%29.jpg"]},
    {id: 45, rAns: "Vodomil černý", src: ["https://upload.wikimedia.org/wikipedia/commons/e/ed/Gro%C3%9Fer_Kolbenwasserk%C3%A4fer_Hydrous_piceus_1.jpg","http://www.nasepriroda.cz/incimgs2/npr-201503-0004_05_6.jpg"]},
    {id: 46, rAns: "Hrobařík obecný", src: ["http://www.chovzvirat.cz/images/zvirata/hrobarik-obecny_ezk61zs.jpg","https://upload.wikimedia.org/wikipedia/commons/7/70/Krompootdoodgraver_Nicrophorus_vespillo_achter_grassprietje.jpg"]},
    {id: 47, rAns: "Světluška menší", src: ["https://upload.wikimedia.org/wikipedia/commons/8/87/Lamprohiza_splendidula01.jpg","http://www.chovzvirat.cz/images/zvirata/svetluska-mensi_izh05bj.jpg"]},
    {id: 48, rAns: "Kovařík černoskvrnný", src: ["https://www.biolib.cz/IMG/GAL/252374.jpg","https://www.biolib.cz/IMG/GAL/268034.jpg"]},
    {id: 49, rAns: "Krasec měďák", src: ["http://www.naturabohemica.cz/wp-content/uploads/2008/09/img_5279.jpg","http://www.chovzvirat.cz/images/zvirata/krasec-medak_ywf70xt.jpg"]},
    {id: 50, rAns: "Slunéčko sedmitečné", src: ["https://g.denik.cz/109/1e/76896-slunecko_hydra-640-16x9.jpg","http://www.chovzvirat.cz/images/zvirata/slunecko-sedmitecne_bae13pm.jpg"]},
    {id: 51, rAns: "Červotoč umrlčí", src: ["https://www.veselebydleni.cz/files/galeria/mag/2018_2/cervotoc-umrlci.jpeg","http://www.chovzvirat.cz/images/zvirata/cervotoc-umrlci_lue60ww.jpg"]},
    {id: 52, rAns: "Majka obecná", src: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Meloe_proscarabaeus%2C_Odessa.jpg/800px-Meloe_proscarabaeus%2C_Odessa.jpg","http://www.chovzvirat.cz/images/zvirata/majka-obecna_hrb68ov.jpg"]},
    {id: 53, rAns: "Potemník moučný", src: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Tenebrio_molitor_MHNT.jpg/1024px-Tenebrio_molitor_MHNT.jpg","https://www.krejsashop.cz/userfiles/blog/big/blg-138-14.jpg"]},
    {id: 54, rAns: "Rroháč obecný", src: ["https://www.biolib.cz/IMG/GAL/BIG/387090.jpg","http://www.chovzvirat.cz/images/zvirata/rohac-obecny_wst82cz.jpg"]},
    {id: 55, rAns: "Chroust obecný", src: ["http://www.chovzvirat.cz/images/zvirata/chroust-obecny_lcb24ip.jpg","https://cdn.myshoptet.com/usr/www.pasti.cz/user/documents/upload/detail-chrousta.jpg"]},
    {id: 56, rAns: "Vruboun posvátný", src: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Scarabaeus.sacer.jpg/1280px-Scarabaeus.sacer.jpg","https://www.biolib.cz/IMG/GAL/379679.jpg"]},
    {id: 57, rAns: "Chrobák velký", src: ["https://hmyz.estranky.cz/img/original/4775/chrobak-velky--3-.jpg","https://www.biolib.cz/IMG/GAL/312846.jpg"]},
    {id: 58, rAns: "Nosorožík kapucínek", src: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Oryctes_nasicornis_male_2012_G1.jpg/1920px-Oryctes_nasicornis_male_2012_G1.jpg","https://upload.wikimedia.org/wikipedia/commons/4/48/Oryctes_nasicornis_hunn.jpg"]},
    {id: 59, rAns: "Zlatohlávek", src: ["https://www.calla.cz/stromyahmyz/fotky/zlatohlavek-skvostny-1.jpg","https://www.prirodovedci.cz/storage/images/800x600/2155.jpg"]},
    {id: 60, rAns: "Tesařík obrovský", src: ["https://www.naturfoto.cz/fotografie/ostatni/tesarik-obrovsky-260310.jpg","http://www.chovzvirat.cz/images/zvirata/tesarik-obrovsky_rdi17fz.jpg"]},
    {id: 61, rAns: "Mandelinka bramborová", src: ["https://g.denik.cz/1/a3/vik-mandelinka_denik-630-16x9.jpg","https://www.priroda.cz/nahledy/m/mandelinka-foto-352x0.jpg"]},
    {id: 62, rAns: "Nosatec", src: ["https://www.biolib.cz/IMG/GAL/5348.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Curculio_nucum01.jpg/1200px-Curculio_nucum01.jpg"]},
    {id: 63, rAns: "Lýkožrout smrkový", src: ["https://www.levnepostriky.cz/i//gallery/234/031/lykozrut_smrekovy.jpg","https://deti.vls.cz/data/web/800px-ips-typographus-female-.jpg"]},
    {id: 64, rAns: "Komár pisklavý", src: ["https://img.obrazky.cz/?url=90db62f6e03e7ae5&size=2","https://www.priroda.cz/clanky/foto/komar-84259.jpg"]},
    {id: 65, rAns: "Anofeles čtyřskvrnný", src: ["https://www.cdc.gov/mosquitoes/images/about/Anopheles-merus-mosquito.jpg?_=35358","http://scientistsagainstmalaria.net/sites/default/files/styles/full_post/public/Anopheles.jpg?itok=WpGi5yfc"]},
    {id: 66, rAns: "Bedlobytka hřibová", src: ["https://www.biolib.cz/IMG/GAL/BIG/392449.jpg","https://www.naturfoto.cz/fotografie/krasensky/bedlobytka-1208.jpg"]},
    {id: 67, rAns: "Bejlomorka buková", src: ["https://svabblog.files.wordpress.com/2017/03/img_446311.jpg","http://www.chovzvirat.cz/images/zvirata/bejlomorka-bukova_yvc16kt.jpg"]},
    {id: 68, rAns: "Muchnička", src: ["https://i.iinfo.cz/images/450/muchnicka-2.jpg","https://www.skudci.com/files/muchnicka-3.jpg"]},
    {id: 69, rAns: "Ovád hovězí", src: ["https://www.biolib.cz/IMG/GAL/BIG/322470.jpg","https://www.krejsashop.cz/userfiles/blog/big/blg-128-14.jpg"]},
    {id: 70, rAns: "Vtule třešňová", src: ["https://www.biolib.cz/IMG/GAL/127658.jpg","https://upload.wikimedia.org/wikipedia/commons/9/96/Tephritidae_-_Rhagoletis_cerasi.JPG"]},
    {id: 71, rAns: "Octomilky obecné", src: ["https://img.ceskyinternet.cz/clanky/og/160077343231.jpg","http://www.chovzvirat.cz/images/zvirata/octomilka-obecna_xqn30gb.jpg"]},
    {id: 72, rAns: "Moucha domácí", src: ["https://www.biolib.cz/IMG/GAL/230277.jpg","https://upload.wikimedia.org/wikipedia/commons/8/8f/Musca_domestica_September_2007-1.jpg"]},
    {id: 73, rAns: "Masařka obecná", src: ["http://www.chovzvirat.cz/images/zvirata/masarka-obecna_kyf00un.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/A_Fly_by_Matthias_Zimmermann.jpg/270px-A_Fly_by_Matthias_Zimmermann.jpg"]},
    {id: 74, rAns: "Bodalka tse-tse", src: ["https://www.biolib.cz/IMG/GAL/17533.jpg","https://upload.wikimedia.org/wikipedia/commons/6/6e/Glossina_morsitans_morsitans-pregnant_female.jpg"]},
    {id: 75, rAns: "Bzučivky", src: ["https://www.acheta.cz/data/fotogalerie/04-bzucivka-zelena-pinkymaden-doza-18g-larev/foto3.jpg","https://upload.wikimedia.org/wikipedia/commons/d/d9/Goldfliege_Lucilia_sericata.JPG"]},
    {id: 76, rAns: "Pestřenka", src: ["https://cdn.administrace.tv/2021/11/02/medium_169/7910e259a64e87c6578794531685463d.jpg","http://www.chovzvirat.cz/images/zvirata/pestrenka-rybizova_unw95la.jpg"]},
    {id: 77, rAns: "Blecha morová", src: ["https://upload.wikimedia.org/wikipedia/commons/6/66/Scanning_Electron_Micrograph_of_a_Flea.jpg","https://www.biolib.cz/IMG/GAL/17520.jpg"]},
    {id: 78, rAns: "Chrostík", src: ["https://1gr.cz/fotky/idnes/20/072/cl8h/BMA84ae1e_profimedia_0516055938.jpg","https://upload.wikimedia.org/wikipedia/commons/2/2c/Brachycentrus.montanus.jpg"]},
    {id: 79, rAns: "Obaleč jabloňový", src: ["http://web2.mendelu.cz/af_291_projekty2/vseo/files/195/17988.jpg","https://www.zahrada-centrum.cz/images/illustrations/slider/001419.jpg"]},
    {id: 80, rAns: "Mol šatní", src: ["https://www.mirdo.cz/wp-content/uploads/2021/08/27/Satni-moli-v-obleceni-a-zpusoby-jak-se-zbavit-satnich-molu.jpg","https://www.patriotmagazin.cz//data/article/preview/mol.satni.jpg"]},
    {id: 81, rAns: "Píďalka angreštová", src: ["https://www.hlasek.com/foto/abraxas_grossulariata_bo1542.jpg","http://www.chovzvirat.cz/images/zvirata/pidalka-angrestova_qea62yj.jpg"]},
    {id: 82, rAns: "Bělásek zelný", src: ["http://www.lepidoptera.cz/images/1588.jpg","https://upload.wikimedia.org/wikipedia/commons/7/73/Pi%C3%A9ride_du_chou.JPG"]},
    {id: 83, rAns: "Otakárek fenyklový", src: ["http://www.lepidoptera.cz/images/1687.jpg","http://www.chovzvirat.cz/images/zvirata/otakarek-fenyklovy_yqm97vh.jpg"]},
    {id: 84, rAns: "Modrásek jetelový", src: ["http://bohemiaorientalis.cz/wp-content/uploads/2020/05/Modrasek-jetelovy-Hamernicka-stran-Kvasiny-IMG_2145.jpg","https://upload.wikimedia.org/wikipedia/commons/3/35/Polyommatus_bellargus_male%2C_Aveyron%2C_France_-_Diliff.jpg"]},
    {id: 85, rAns: "Žluťásek", src: ["http://motyli.kolas.cz/foto/zlutasci/velke/12727729.jpg","http://www.lepidoptera.cz/images/394.jpg"]},
    {id: 86, rAns: "Vřetenuška obecná", src: ["http://www.karelsimecek.cz/fm/files/fotogalerie/vretenuska_obecna/3118089538.jpg","http://www.chovzvirat.cz/images/zvirata/vretenuska-obecna_rtr12ns.jpg"]},
    {id: 87, rAns: "Lišaj smrtihlav", src: ["https://upload.wikimedia.org/wikipedia/commons/0/06/Acherontia_atropos%2C_emerged_DH_060_06_12_27-02_cr.jpg","http://www.chovzvirat.cz/images/zvirata/lisaj-smrtihlav_eqp85de.jpg","https://www.dhphoto.cz/photos/lisaj-smrtihlav-acherontia-atropos-2923.jpg"]},
    {id: 88, rAns: "Stužkonoska modrá", src: ["https://www.dhphoto.cz/photos/stuzkonoska-modra-catocala-fraxini-2898.jpg","http://www.chovzvirat.cz/images/zvirata/stuzkonoska-modra_cyv56js.jpg"]},
    {id: 89, rAns: "Bourec morušový", src: ["https://www.cojeco.cz/images/descript/d5168119e0e5d32e3d4f8a105bb7fb9b.jpg","https://www.biolib.cz/IMG/GAL/217309.jpg"]},
    {id: 90, rAns: "Bekyně mniška", src: ["http://motyli.kolas.cz/foto/bekyne/velke/14717405.jpg","https://upload.wikimedia.org/wikipedia/commons/1/1f/Lymantria_monacha_%E2%99%82_-_Black_arches_%28male%29_-_%D0%9C%D0%BE%D0%BD%D0%B0%D1%88%D0%B5%D0%BD%D0%BA%D0%B0_%28%D1%81%D0%B0%D0%BC%D0%B5%D1%86%29_%2827003797058%29.jpg"]},
    {id: 91, rAns: "Přástevník medvědí", src: ["https://www.dhphoto.cz/photos/prastevnik-medvedi-arctia-caja-4800.jpg","http://www.chovzvirat.cz/images/zvirata/prastevnik-medvedi_bns73cd.jpg"]},
    {id: 92, rAns: "Babočka admirál", src: ["https://upload.wikimedia.org/wikipedia/commons/5/5f/2018_07_R%C3%BCgen_Admiral.jpg","https://upload.wikimedia.org/wikipedia/commons/1/16/Vanessa_atalanta2.jpg","https://upload.wikimedia.org/wikipedia/commons/c/cc/Vanessa_atalanta_-_Admiral_%28illustration%29.jpg"]},

]
export interface GeneralEnvironmentConfig {
    production?: boolean;

    /**
     * จำนวนวันหมดอายุของ Cookies หลังจากกดปุ่มยอมรับ (หน่วยวัน)
     *
     * ค่าเริ่มต้นคือ 7
     */
    cookieAcceptExpireDateNumber?: number;

    /**
     * กำหนดให้หน้าเลือกระบบแสดงเป็นหน้าแรก โดยปรับแก้ไฟล์
     * `app-routing.module.ts` ให้สอดคล้องกับเงื่อนไข
     *
     * ค่าเริ่มต้นคือ true
     */
    useHomePage?: boolean;

    /**
     * กำหนดให้หน้าแรกต้องผ่านการล็อกอินก่อนใช้งาน โดยปรับแก้ไฟล์
     * `home-routing.module.ts` หรือไฟล์ routing ของระบบหลัก
     * เช่น `gis-routing.module.ts` ให้สอดคล้องกับเงื่อนไข
     *
     * ค่าเริ่มต้นคือ false
     */
    requireAuthenticationHomePage?: boolean;

    /**
     * กำหนดรูปแบบการ Authentication
     *
     * `true` : แอพจะ redirect ไป AtlasX Web Service หน้าล็อกอินของ OAuth (แนะนำ)
     *
     * `false` : แอพจะแสดงหน้าล็อกอินของ Angular
     *
     * ค่าเริ่มต้นคือ true
     */
    fullSecureAuthentication?: boolean;

}

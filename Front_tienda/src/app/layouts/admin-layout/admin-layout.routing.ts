import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { LoginComponent } from "src/app/pages/login/login.component";
import { ProductosComponent } from "src/app/pages/productos/productos.component";
import { ClientesComponent } from "src/app/pages/clientes/clientes.component";
import { VentasComponent } from "src/app/pages/ventas/ventas.component";
import { ConsolidadoComponent } from "src/app/pages/consolidado/consolidado.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "login", component: LoginComponent },
  { path: "productos", component: ProductosComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "ventas", component: VentasComponent},
  { path: "consolidado", component: ConsolidadoComponent}

  // { path: "rtl", component: RtlComponent }
];

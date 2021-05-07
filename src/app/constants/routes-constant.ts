export class RoutesConstant {

  // Params
  public static ACCOUNTANT_ID = 'id';

  // Route roots
  public static ACCOUNTANTS_ROUTE = 'accountants';

  // Routes
  public static ACCOUNTANTS_LIST = RoutesConstant.ACCOUNTANTS_ROUTE;
  public static ACCOUNTANTS_DETAILS_BASE = RoutesConstant.ACCOUNTANTS_ROUTE;
  public static ACCOUNTANTS_DETAILS = RoutesConstant.ACCOUNTANTS_ROUTE + '/:' + RoutesConstant.ACCOUNTANT_ID;
  public static ACCOUNTANTS_NEW = RoutesConstant.ACCOUNTANTS_ROUTE + '/new';
  public static ACCOUNTANTS_EDIT_BASE = RoutesConstant.ACCOUNTANTS_ROUTE + '/edit';
  public static ACCOUNTANTS_EDIT = RoutesConstant.ACCOUNTANTS_EDIT_BASE + '/:' + RoutesConstant.ACCOUNTANT_ID;
}

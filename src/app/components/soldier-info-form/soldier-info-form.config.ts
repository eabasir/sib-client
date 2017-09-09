import {Category, MODEL_NAMES} from '../../names/Const'
import {SoldierInfo} from "./soldier-info-form.metadata";

export const SOLDIER_BASE_INO : SoldierInfo []  =[

  {key: MODEL_NAMES.firstName, value: '', category: Category.Personal, docs: [], mandatory: true},
  {key: MODEL_NAMES.surname, value: '', category: Category.Personal, docs: [], mandatory: true},
  {key: MODEL_NAMES.national_code, value: '', category: Category.Personal, docs: [], mandatory: true},
  {key: MODEL_NAMES.father_name, value: '', category: Category.Personal, docs: [], mandatory: true},
  {key: MODEL_NAMES.passport_number, value: '', category: Category.Personal, docs: [], mandatory: false},
  {key: MODEL_NAMES.dob, value: '', category: Category.Personal, docs: [], mandatory: false},
  {key: MODEL_NAMES.education, value: '', category: Category.Personal, docs: [], mandatory: false},
  {key: MODEL_NAMES.university, value: '', category: Category.Personal, docs: [], mandatory: false},
  {key: MODEL_NAMES.education_major, value: '', category: Category.Personal, docs: [], mandatory: false},
  {key: MODEL_NAMES.education_sub_major, value: '', category: Category.Personal, docs: [], mandatory: false},
  {key: MODEL_NAMES.birth_place, value: '', category: Category.Personal, docs: [], mandatory: false},
  {key: MODEL_NAMES.phone, value: '', category: Category.Personal, docs: [], mandatory: false},
  {key: MODEL_NAMES.mobile_phone, value: '', category: Category.Personal, docs: [], mandatory: false},
  {key: MODEL_NAMES.marriage_status, value: '', category: Category.Personal, docs: [], mandatory: false},
  {key: MODEL_NAMES.address, value: '', category: Category.Personal, docs: [], mandatory: false},


  // Order of following items are important :service_penalty, leave_incentive and serve_reduction must be after legal_discharge_date
  {key: MODEL_NAMES.dispatch_date, value: '', category: Category.Service, docs: [], mandatory: true},
  {key: MODEL_NAMES.legal_discharge_date, value: '', category: Category.Service, docs: [], mandatory: false},
  {key: MODEL_NAMES.real_discharge_date, value: '', category: Category.Service, docs: [], mandatory: false},
  {key: MODEL_NAMES.serve_place, value: '', category: Category.Service, docs: [], mandatory: false},
  {key: MODEL_NAMES.serve_place_part, value: '', category: Category.Service, docs: [], mandatory: false},
  {key: MODEL_NAMES.service_penalty, value: '', category: Category.Service, docs: [], mandatory: false},
  {key: MODEL_NAMES.serve_reduction, value: '', category: Category.Service, docs: [], mandatory: false},
  {key: MODEL_NAMES.leave_incentive, value: '', category: Category.Service, docs: [], mandatory: false},
  {key: MODEL_NAMES.degree, value: '', category: Category.Service, docs: [], mandatory: false},
  {key: MODEL_NAMES.serve_status, value: '', category: Category.Service, docs: [], mandatory: false},

];


/* ============================================================
   COMMUNITY RESOURCES — the only file to edit when the
   community resource list changes.
   ------------------------------------------------------------
   Source: Community Resources & Dental Care Guide,
   Banner Gateway Medical Center (updated 2/25/26).
   - phone: what patients see, e.g. "(602) 264-2255"
   - tel:   what the phone dials, e.g. "+16022642255"
   - address: shown with a tap to open maps link
   - url: optional website link
   Every field except name is optional.
   ============================================================ */

export type CommunityResource = {
  name: string;
  phone?: string;
  tel?: string;
  note?: string;
  address?: string;
  url?: string;
};

export type ResourceSection = {
  id: string;
  title: string;
  blurb: string;
  resources: CommunityResource[];
};

export const crisisLines: CommunityResource[] = [
  {
    name: "Suicide and Crisis Lifeline",
    phone: "988",
    tel: "988",
    note: "Call or text any time for suicidal thoughts or any acute mental health crisis. Free and confidential, 24 hours a day.",
  },
  {
    name: "National Domestic Violence Helpline",
    phone: "(800) 799-7233",
    tel: "+18007997233",
    note: "If you are experiencing abuse, call or chat. Advocates are available 24 hours a day.",
    url: "https://www.thehotline.org",
  },
  {
    name: "Arizona Sexual and Domestic Violence Helpline",
    phone: "(602) 279-2980",
    tel: "+16022792980",
    note: "Statewide support, safety planning, and connection to local services.",
    url: "https://arizonasurvivors.org",
  },
];

export const resourceSections: ResourceSection[] = [
  {
    id: "dental",
    title: "Dentists and oral care",
    blurb:
      "Low cost, sliding scale, and donated dental care across the Valley. Call ahead to confirm hours, eligibility, and current pricing.",
    resources: [
      {
        name: "Area Agency on Aging",
        phone: "(602) 264-2255",
        tel: "+16022642255",
        note: "Dentures only.",
        address: "1366 E Thomas Rd, Phoenix, AZ 85014",
      },
      {
        name: "Arizona School of Dentistry and Oral Health (A.T. Still University)",
        phone: "(480) 248-8100",
        tel: "+14802488100",
        note: "Discounted and low cost care.",
        address: "5835 E Still Circle, Mesa, AZ 85206",
      },
      {
        name: "Arizona Dental Association (Mesa)",
        phone: "(480) 248-8100",
        tel: "+14802488100",
        note: "Discounted and low cost care.",
        address: "777 E Southern Ave, Mesa, AZ 85204",
      },
      {
        name: "Chandler Family Health Center Dental Clinic",
        phone: "(480) 344-6109",
        tel: "+14803446109",
        note: "Discounted care with a sliding scale fee schedule.",
        address: "1951 W Frye Rd, Chandler, AZ 85224",
      },
      {
        name: "Children's Dental Clinic",
        phone: "(602) 233-3133",
        tel: "+16022333133",
        note: "Dental care for children.",
        address: "326 E Coronado Rd, Phoenix, AZ 85004",
      },
      {
        name: "Coronado Dental Clinic (Mesa)",
        phone: "(480) 461-8683",
        tel: "+14804618683",
        note: "Discounted and low cost care.",
        address: "247 N Macdonald, Mesa, AZ 85201",
      },
      {
        name: "Donated Dental Services (DDS)",
        phone: "(480) 850-1474",
        tel: "+14808501474",
        note: "Donated or discounted care for those who qualify. Program only, call for details.",
      },
      {
        name: "Maricopa Health Dental Services",
        phone: "(623) 344-6789",
        tel: "+16233446789",
        note: "Discounted care with a sliding scale fee schedule.",
        address: "3207 W Buckeye Rd, Phoenix, AZ 85009",
      },
      {
        name: "Maricopa County Integrated Health Intake",
        phone: "(602) 344-1005",
        tel: "+16023441005",
        note: "Central intake line for Maricopa County health services.",
        address: "3636 N Central Ave, Phoenix, AZ 85012",
      },
      {
        name: "Maricopa Medical Center Dental Clinic (Adults)",
        phone: "(602) 344-1015",
        tel: "+16023441015",
        note: "Discounted and sliding scale. Extractions only.",
        address: "2601 E Van Buren St, Phoenix, AZ 85008",
      },
      {
        name: "Mesa Senior Services Denture Program",
        phone: "(480) 962-5612",
        tel: "+14809625612",
        note: "Denture program.",
        address: "247 N Macdonald, Mesa, AZ 85201",
      },
      {
        name: "Native American Community Health Center",
        phone: "(602) 279-5262",
        tel: "+16022795262",
        note: "Open to the public for cleanings, exams, x rays, and fillings.",
        address: "3848 W Thomas Rd, Phoenix, AZ 85009",
      },
      {
        name: "Neighborhood Christian Clinic",
        phone: "(602) 258-6008",
        tel: "+16022586008",
        note: "Sliding scale fees for qualified individuals.",
        address: "2130 W Northern Ave, Phoenix, AZ 85021",
      },
      {
        name: "Phoenix College Dental Clinic",
        phone: "(602) 285-7323",
        tel: "+16022857323",
        note: "Discounted cleanings. Closed during summer.",
        address: "1202 W Thomas Rd, Phoenix, AZ 85013",
      },
      {
        name: "Rio Salado Dental Hygiene School",
        phone: "(480) 517-8020",
        tel: "+14805178020",
        note: "Dental cleanings for $25, plus other discounts.",
        address: "2323 W 14th St, Tempe, AZ 85281",
      },
      {
        name: "St. Joe's Mercy Care Dental Clinic",
        phone: "(602) 406-3560",
        tel: "+16024063560",
        note: "Low cost dental care for underserved patients.",
        address: "250 W Thomas Rd, Phoenix, AZ 85013",
      },
      {
        name: "St. Vincent de Paul",
        phone: "(602) 261-6868",
        tel: "+16022616868",
        note: "Offers a lottery for free dental care.",
        address: "420 W Madison St, Phoenix, AZ 85003",
      },
      {
        name: "University of Arizona Mobile Dental Clinic (Tucson)",
        phone: "(520) 626-2267",
        tel: "+15206262267",
        note: "Mobile dental clinic serving Tucson communities.",
      },
    ],
  },
  {
    id: "medical",
    title: "Medical care",
    blurb:
      "Clinics and programs offering low cost primary care, follow up care, and medical equipment for patients with and without insurance.",
    resources: [
      {
        name: "Clinica La Familia",
        phone: "(602) 539-3999",
        tel: "+16025393999",
        note: "Spanish and English medical clinic. $90 office visit without insurance.",
        address: "616 E Southern Ave #103, Mesa, AZ 85204",
      },
      {
        name: "Community Bridges Access to Care",
        phone: "(877) 931-9142",
        tel: "+18779319142",
        note: "Substance use and mental health services.",
        url: "https://communitybridgesinc.org",
      },
      {
        name: "VA Medical Center (Phoenix)",
        phone: "(602) 277-5551",
        tel: "+16022775551",
        note: "For 100% disabled veterans only.",
        address: "650 E Indian School Rd, Phoenix, AZ 85012",
      },
      {
        name: "VA Medical Center Dental Clinic (Prescott)",
        phone: "(928) 776-6177",
        tel: "+19287766177",
        note: "For 100% disabled veterans only.",
        address: "500 N Summit Ave, Prescott, AZ 86301",
      },
      {
        name: "Mountain Park Health Center",
        phone: "(620) 243-7227",
        tel: "+16202437227",
        note: "Discounted and sliding scale care. Cleanings, fillings, and extractions.",
        address: "4415 N 16th St, Phoenix, AZ 85016",
      },
      {
        name: "Statewide Reachout Health Care America",
        phone: "(623) 434-9343",
        tel: "+16234349343",
        note: "Mobile healthcare services for underserved communities.",
        address: "14251 W Bell Rd, Surprise, AZ 85374",
      },
      {
        name: "White Dove Medical Thrift Store",
        phone: "(602) 274-3683",
        tel: "+16022743683",
        note: "Thrift store with medical equipment.",
        address: "1255 W Guadalupe Rd, Mesa, AZ 85202",
      },
    ],
  },
  {
    id: "mental-health",
    title: "Mental health, domestic violence, and shelters",
    blurb:
      "Crisis support, walk in mental health care, emergency shelter, and family services. The crisis lines at the top of this page are always available.",
    resources: [
      {
        name: "Mind 24/7",
        phone: "(844) 646-3247",
        tel: "+18446463247",
        note: "Walk in mental health urgent care providing stabilization. Open 24 hours.",
        address: "1138 Higley Rd, Mesa, AZ 85206",
      },
      {
        name: "AZCEND",
        phone: "(480) 963-1423",
        tel: "+14809631423",
        note: "Overnight shelter and meals. Call 7:30 AM to 4 PM, Monday through Friday.",
        address: "345 S California St, Chandler, AZ 85225",
      },
      {
        name: "CASS Homeless Shelter",
        phone: "(602) 256-6945",
        tel: "+16022566945",
        note: "Emergency shelter and support for people experiencing homelessness.",
        address: "230 S 12th Ave, Phoenix, AZ 85007",
      },
      {
        name: "Homeward Bound",
        phone: "(602) 263-7654",
        tel: "+16022637654",
        note: "Domestic violence shelter.",
        address: "2929 N 3rd St, Phoenix, AZ 85012",
      },
      {
        name: "Gompers Rehabilitation Center",
        phone: "(602) 336-0061",
        tel: "+16023360061",
        note: "Provides free and fee for service care.",
        address: "1366 E Thomas Rd, Phoenix, AZ 85014",
      },
      {
        name: "Dave Pratt Boys and Girls Club",
        phone: "(602) 271-9961",
        tel: "+16022719961",
        note: "After school programs and youth support services.",
        address: "225 E Grant St, Phoenix, AZ 85004",
      },
    ],
  },
];

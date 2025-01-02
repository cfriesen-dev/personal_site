// Question Display
export const DEFAULT_DESTINATIONS = [
  "A website not listed",
  "Redirects to another website",
];

// URL Fields
export const TLD_JS_FIELDS = ["subdomain", "domain", "tld"];
export const URL_FIELDS = [
  {
    field: "protocol",
    name: "scheme",
    suffix: "//",
  },
  {
    field: "username",
    name: "username",
    suffix: ":",
  },
  {
    field: "password",
    name: "password",
    suffix: "@",
  },
  {
    field: "subdomain",
    name: "subdomain",
    suffix: ".",
  },
  {
    field: "domain",
    name: "domain",
    suffix: ":",
  },
  {
    field: "port",
    name: "port",
    suffix: "/",
  },
  {
    field: "pathname",
    name: "path",
    suffix: "?",
  },
  {
    field: "search",
    name: "query-string",
    suffix: "",
  },
];

// Phishing Categories
export const PHISHING_CATEGORIES = [
  {
    id: 0,
    name: "Login information",
    description:
      "Login information that will be ignored if not looked for by the destination site. Can be used to include the domain name of a trusted entity.",
  },
  {
    id: 1,
    name: "Misspelling",
    description:
      "Easily mis-typed or overlooked mispellings of the trusted entity.",
  },
  {
    id: 2,
    name: "Incorrect/Unfamiliar TLD",
    description:
      "Correct name as part of the domain for the trusted entity but registered under a different TLD (Top Level Domain) and therefore a completely different site.",
  },
  {
    id: 3,
    name: "WWW included",
    description:
      "WWW included in the domain name as opposed to being a subdomain to appear as the original site's www.name.com",
  },
  {
    id: 4,
    name: "Character homophone switch",
    description:
      "Using a character from another language's character set (such as cyrillic) that looks very similar to a character in the latin set.",
  },
  {
    id: 5,
    name: "Obfuscation",
    description:
      "Using URL encodings as well as other pieces such as logins, punycode, etc. to make the URL less readable in general.",
  },
  {
    id: 6,
    name: "IP Only",
    description:
      "Only showing the IP address and not any domain information at all.",
  },
];

// CSS Classes
export const CORRECT_CLASS = "correct-answer";
export const INCORRECT_CLASS = "incorrect-answer";
export const EXPANDED_CLASS = "expanded";
export const CONTRACTED_CLASS = "contracted";

(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a256d1._.js", {

"[project]/component/common/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buttonVariants": (()=>buttonVariants),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.tsx [app-client] (ecmascript)"); // Impor utilitas cn untuk menggabungkan class
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
'use client';
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {
    variants: {
        variant: {
            primary: 'bg-blue-600 text-white hover:bg-blue-600/90',
            destructive: 'bg-red-600 text-white hover:bg-red-600/90',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-200/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = ({ className, variant, size, children, isLoading, disabled, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        disabled: isLoading || disabled,
        ...props,
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "mr-2 h-4 w-4 animate-spin"
            }, void 0, false, {
                fileName: "[project]/component/common/Button.tsx",
                lineNumber: 49,
                columnNumber: 23
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/component/common/Button.tsx",
        lineNumber: 43,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = 'Button';
const __TURBOPACK__default__export__ = Button;
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button$React.forwardRef");
__turbopack_refresh__.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/component/common/SearchBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/components/common/SearchBar.tsx
__turbopack_esm__({
    "SearchBar": (()=>SearchBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$component$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/component/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function SearchBar({ placeholder, basePath }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get('q') || '');
    const handleSearch = (e)=>{
        e.preventDefault();
        const currentParams = new URLSearchParams(); // Mulai dari params kosong
        if (query) {
            currentParams.set('q', query);
        }
        router.push(`${basePath}?${currentParams.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSearch,
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            size: 20,
                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/component/common/SearchBar.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: placeholder,
                            value: query,
                            onChange: (e)=>setQuery(e.target.value),
                            className: "w-full h-12 pl-11 pr-4 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        }, void 0, false, {
                            fileName: "[project]/component/common/SearchBar.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/component/common/SearchBar.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$component$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "submit",
                    className: "h-12 flex-shrink-0",
                    children: "Cari"
                }, void 0, false, {
                    fileName: "[project]/component/common/SearchBar.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/component/common/SearchBar.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/component/common/SearchBar.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "RnUEoF8v8ZNY9vk1FT4Fpp7q2QI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SearchBar;
var _c;
__turbopack_refresh__.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/component/common/Pagination.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Pagination": (()=>Pagination)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.tsx [app-client] (ecmascript)"); // Asumsi Anda punya fungsi cn (classnames)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Pagination({ totalPages, currentPage }) {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const createPageURL = (pageNumber)=>{
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `/jobs?${params.toString()}`;
    };
    if (totalPages <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center space-x-4 mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: createPageURL(currentPage - 1),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-4 py-2 text-sm rounded-md border", currentPage === 1 ? 'bg-gray-100 text-gray-400 pointer-events-none' : 'bg-white text-gray-700 hover:bg-gray-50'),
                "aria-disabled": currentPage === 1,
                tabIndex: currentPage === 1 ? -1 : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        size: 16,
                        className: "mr-1"
                    }, void 0, false, {
                        fileName: "[project]/component/common/Pagination.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    "Previous"
                ]
            }, void 0, true, {
                fileName: "[project]/component/common/Pagination.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-gray-600",
                children: [
                    "Page ",
                    currentPage,
                    " of ",
                    totalPages
                ]
            }, void 0, true, {
                fileName: "[project]/component/common/Pagination.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: createPageURL(currentPage + 1),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-4 py-2 text-sm rounded-md border", currentPage === totalPages ? 'bg-gray-100 text-gray-400 pointer-events-none' : 'bg-white text-gray-700 hover:bg-gray-50'),
                "aria-disabled": currentPage === totalPages,
                tabIndex: currentPage === totalPages ? -1 : undefined,
                children: [
                    "Next",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        size: 16,
                        className: "ml-1"
                    }, void 0, false, {
                        fileName: "[project]/component/common/Pagination.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/component/common/Pagination.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/component/common/Pagination.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Pagination, "a+DZx9DY26Zf8FVy1bxe3vp9l1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Pagination;
var _c;
__turbopack_refresh__.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/jobService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/services/jobService.ts
// --- DEFINISI TIPE YANG KONSISTEN ---
// Tipe ini akan menjadi satu-satunya sumber kebenaran dan digunakan di semua komponen.
// src/services/jobService.ts
__turbopack_esm__({
    "getAllJobIds": (()=>getAllJobIds),
    "getAllJobs": (()=>getAllJobs),
    "getFeaturedJobs": (()=>getFeaturedJobs),
    "getJobDetails": (()=>getJobDetails),
    "getRecommendedJobs": (()=>getRecommendedJobs)
});
const mockJobDatabase = [
    {
        id: 1,
        title: "Senior Frontend Developer (React)",
        type: "Full-time",
        location: "Jakarta, Indonesia (Hybrid)",
        description: "Kami mencari seorang Frontend Developer berpengalaman untuk memimpin pengembangan antarmuka pengguna yang inovatif dan berperforma tinggi. Anda akan berkolaborasi erat dengan tim produk, desainer UI/UX, dan backend engineer untuk mengubah visi menjadi produk nyata yang digunakan oleh jutaan orang.",
        responsibilities: [
            "Mengembangkan dan memelihara komponen UI yang reusable dan efisien menggunakan React.js dan TypeScript.",
            "Menerjemahkan desain dan wireframe dari Figma menjadi kode berkualitas tinggi.",
            "Mengoptimalkan komponen untuk kecepatan dan skalabilitas maksimum di berbagai perangkat dan browser.",
            "Berkolaborasi dengan backend developer untuk mengintegrasikan RESTful API dan GraphQL.",
            "Menulis pengujian unit dan integrasi untuk memastikan kualitas dan keandalan kode."
        ],
        qualifications: [
            "Gelar Sarjana di bidang Ilmu Komputer atau bidang terkait.",
            "Pengalaman minimal 4 tahun dalam pengembangan frontend.",
            "Keahlian mendalam pada React.js, TypeScript, HTML5, dan CSS3/SASS.",
            "Pengalaman dengan state management library seperti Redux Toolkit atau Zustand.",
            "Memahami prinsip-prinsip desain responsif dan mobile-first."
        ],
        postedDate: "2025-08-01T10:00:00Z",
        company: {
            id: 1,
            name: "PT Teknologi Bersama",
            logoUrl: "https://placehold.co/128x128/000000/FFFFFF?text=TB"
        }
    },
    {
        id: 2,
        title: "UI/UX Designer",
        type: "Contract",
        location: "Surabaya, Indonesia",
        description: "Bergabunglah dengan tim kami untuk merancang pengalaman pengguna yang intuitif dan menarik secara visual untuk produk keuangan kami. Anda akan bertanggung jawab atas seluruh proses desain, dari riset hingga prototipe interaktif.",
        responsibilities: [
            "Melakukan riset pengguna untuk memahami kebutuhan dan masalah.",
            "Membuat wireframe, user flow, dan prototipe interaktif.",
            "Merancang antarmuka yang indah dan fungsional.",
            "Berkolaborasi dengan tim produk dan engineer."
        ],
        qualifications: [
            "Portofolio yang kuat dalam desain UI/UX.",
            "Mahir menggunakan Figma, Sketch, atau Adobe XD.",
            "Pengalaman dengan design systems.",
            "Kemampuan komunikasi yang baik."
        ],
        postedDate: "2025-07-28T14:30:00Z",
        company: {
            id: 2,
            name: "Solusi Keuangan Nusantara",
            logoUrl: "https://placehold.co/128x128/1d4ed8/FFFFFF?text=SKN"
        }
    }
];
const getFeaturedJobs = async (params)=>{
    console.log("Fetching featured jobs with params:", params);
    try {
        const limit = params.limit || 4;
        // Simulasi data pekerjaan unggulan
        const mockJobs = Array.from({
            length: limit
        }, (_, i)=>({
                id: 200 + i,
                title: `Senior ${params.category?.toUpperCase() || 'Tech'} Engineer #${i + 1}`,
                company: {
                    name: `Innovate Solutions ${i + 1}`
                },
                location: 'Remote',
                type: 'Full-time',
                postedAt: new Date(Date.now() - i * 1000 * 60 * 60 * 48).toISOString(),
                salaryMin: 15000000
            }));
        // Simulasi penundaan jaringan
        await new Promise((resolve)=>setTimeout(resolve, 300));
        // Mengembalikan data dengan struktur yang diharapkan
        return {
            data: mockJobs
        };
    } catch (error) {
        console.error('Error fetching featured jobs:', error);
        throw new Error('Gagal mengambil data pekerjaan unggulan.');
    }
};
async function getAllJobIds() {
    // Di aplikasi nyata, ini bisa berupa query API yang lebih efisien.
    return mockJobDatabase.map((job)=>({
            id: job.id.toString()
        }));
}
async function getJobDetails(id) {
    console.log(`[SERVICE] Mencari detail untuk pekerjaan dengan ID: ${id}`);
    // Simulasi penundaan jaringan seperti memanggil API sungguhan
    await new Promise((resolve)=>setTimeout(resolve, 100));
    const job = mockJobDatabase.find((j)=>j.id.toString() === id);
    return job || null;
}
const getRecommendedJobs = async ()=>{
    console.log("Fetching recommended jobs for authenticated user...");
    try {
        // Simulasi data rekomendasi yang beragam
        const mockJobs = [
            {
                id: 301,
                title: 'Data Scientist (AI Focus)',
                company: {
                    name: 'Data Insights Co.'
                },
                location: 'Yogyakarta',
                type: 'Full-time',
                postedAt: new Date().toISOString(),
                salaryMin: 18000000
            },
            {
                id: 302,
                title: 'Senior Product Manager',
                company: {
                    name: 'Agile Product House'
                },
                location: 'Jakarta',
                type: 'Full-time',
                postedAt: new Date().toISOString(),
                salaryMin: 25000000
            },
            {
                id: 303,
                title: 'Cloud DevOps Engineer (AWS)',
                company: {
                    name: 'CloudNet Solutions'
                },
                location: 'Remote',
                type: 'Contract',
                postedAt: new Date().toISOString()
            },
            {
                id: 304,
                title: 'Lead Mobile Developer (React Native)',
                company: {
                    name: 'MobileFirst Apps'
                },
                location: 'Bandung',
                type: 'Full-time',
                postedAt: new Date().toISOString(),
                salaryMin: 22000000
            }
        ];
        // Simulasi penundaan jaringan agar loading spinner terlihat
        await new Promise((resolve)=>setTimeout(resolve, 800));
        return {
            data: mockJobs
        };
    } catch (error) {
        console.error('Error fetching recommended jobs:', error);
        throw new Error('Gagal mengambil data pekerjaan rekomendasi.');
    }
};
const getAllJobs = async (filters = {})=>{
    console.log("Fetching jobs with filters:", filters);
    try {
        const page = filters.page || 1;
        const limit = filters.limit || 5; // Tampilkan 5 pekerjaan per halaman
        // --- Data Placeholder untuk simulasi ---
        const mockJobs = Array.from({
            length: 23
        }, (_, i)=>({
                id: i + 1,
                title: `Software Engineer #${i + 1}`,
                company: {
                    name: `Tech Company ${i % 5}`
                },
                location: i % 3 === 0 ? 'Jakarta' : 'Remote',
                type: 'Full-time',
                postedAt: new Date(Date.now() - i * 1000 * 60 * 60 * 24).toISOString(),
                description: 'Deskripsi pekerjaan yang menarik.'
            }));
        // Simulasi filter
        const filteredJobs = mockJobs.filter((job)=>{
            const keywordMatch = filters.keyword ? job.title.toLowerCase().includes(filters.keyword.toLowerCase()) : true;
            // ... tambahkan logika filter lain
            return keywordMatch;
        });
        const totalItems = filteredJobs.length;
        const totalPages = Math.ceil(totalItems / limit);
        const paginatedData = filteredJobs.slice((page - 1) * limit, page * limit);
        // Simulasi respons API
        return await Promise.resolve({
            data: paginatedData,
            meta: {
                currentPage: page,
                totalPages: totalPages,
                totalItems: totalItems,
                perPage: limit
            }
        });
    } catch (error) {
        console.error('Error fetching jobs:', error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/component/common/SectionTitle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.tsx [app-client] (ecmascript)");
;
;
const SectionTitle = ({ title, subtitle, align = 'left', className, as: HeadingTag = 'h2' // The component will render an `h2` tag by default.
 })=>{
    // A cleaner way to map props to Tailwind classes.
    const alignmentClasses = {
        left: 'items-start text-left',
        center: 'items-center text-center',
        right: 'items-end text-right'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col", alignmentClasses[align], className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeadingTag, {
                className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/component/common/SectionTitle.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-3 max-w-2xl text-md text-gray-600"),
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/component/common/SectionTitle.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/component/common/SectionTitle.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_c = SectionTitle;
const __TURBOPACK__default__export__ = SectionTitle;
var _c;
__turbopack_refresh__.register(_c, "SectionTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/component/job/JobCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/components/job/JobCard.tsx
__turbopack_esm__({
    "JobCard": (()=>JobCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
;
;
// Fungsi helper untuk format waktu yang lebih informatif
const timeAgo = (dateString)=>{
    if (!dateString) return '';
    const date = new Date(dateString);
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " tahun lalu";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " bulan lalu";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " hari lalu";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " jam lalu";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " menit lalu";
    return "Baru saja";
};
const JobCard = ({ job })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/jobs/${job.id}`,
        className: "block p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 hover:shadow-lg transition-all duration-300 ease-in-out",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "w-16 h-16 bg-gray-100 rounded-md object-cover border",
                        // --- PERBAIKAN: Akses properti logo dari `job.company.logoUrl` ---
                        src: job.company?.logoUrl || `https://ui-avatars.com/api/?name=${job.company?.name?.charAt(0)}&background=f0f4ff&color=4f46e5`,
                        alt: `${job.company?.name} logo`,
                        width: 64,
                        height: 64
                    }, void 0, false, {
                        fileName: "[project]/component/job/JobCard.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/component/job/JobCard.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-blue-600 flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/component/job/JobCard.tsx",
                                    lineNumber: 44,
                                    columnNumber: 88
                                }, this),
                                " ",
                                job.company?.name || 'Perusahaan'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/component/job/JobCard.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-900 mt-1 hover:text-blue-700",
                            children: job.title
                        }, void 0, false, {
                            fileName: "[project]/component/job/JobCard.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500",
                            children: [
                                job.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/component/job/JobCard.tsx",
                                            lineNumber: 47,
                                            columnNumber: 74
                                        }, this),
                                        " ",
                                        job.location
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/component/job/JobCard.tsx",
                                    lineNumber: 47,
                                    columnNumber: 30
                                }, this),
                                job.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/component/job/JobCard.tsx",
                                            lineNumber: 48,
                                            columnNumber: 70
                                        }, this),
                                        " ",
                                        job.type
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/component/job/JobCard.tsx",
                                    lineNumber: 48,
                                    columnNumber: 26
                                }, this),
                                job.postedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/component/job/JobCard.tsx",
                                            lineNumber: 49,
                                            columnNumber: 74
                                        }, this),
                                        " ",
                                        timeAgo(job.postedAt)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/component/job/JobCard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/component/job/JobCard.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/component/job/JobCard.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/component/job/JobCard.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/component/job/JobCard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_c = JobCard;
var _c;
__turbopack_refresh__.register(_c, "JobCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/component/company/RecommendedJobs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RecommendedJobs": (()=>RecommendedJobs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/store/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jobService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/jobService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$component$2f$common$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/component/common/SectionTitle.tsx [app-client] (ecmascript)"); // PERBAIKAN: Impor sebagai default
var __TURBOPACK__imported__module__$5b$project$5d2f$component$2f$job$2f$JobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/component/job/JobCard.tsx [app-client] (ecmascript)"); // PERBAIKAN: Impor sebagai default
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function RecommendedJobs() {
    _s();
    const isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "RecommendedJobs.useAuthStore[isAuthenticated]": (state)=>state.isAuthenticated
    }["RecommendedJobs.useAuthStore[isAuthenticated]"]);
    const [recommendedJobs, setRecommendedJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecommendedJobs.useEffect": ()=>{
            if (isAuthenticated) {
                const fetchRecommendations = {
                    "RecommendedJobs.useEffect.fetchRecommendations": async ()=>{
                        setIsLoading(true);
                        try {
                            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jobService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecommendedJobs"])();
                            setRecommendedJobs(response.data);
                        } catch (error) {
                            console.error("Failed to fetch recommendations:", error);
                        } finally{
                            setIsLoading(false);
                        }
                    }
                }["RecommendedJobs.useEffect.fetchRecommendations"];
                fetchRecommendations();
            }
        }
    }["RecommendedJobs.useEffect"], [
        isAuthenticated
    ]);
    if (!isAuthenticated) {
        return null;
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mt-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$component$2f$common$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Pekerjaan yang Direkomendasikan untuk Anda",
                    subtitle: "Berdasarkan profil dan aktivitas Anda, kami sedang mencari peluang terbaik."
                }, void 0, false, {
                    fileName: "[project]/component/company/RecommendedJobs.tsx",
                    lineNumber: 39,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center h-40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "animate-spin text-blue-600",
                        size: 32
                    }, void 0, false, {
                        fileName: "[project]/component/company/RecommendedJobs.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/component/company/RecommendedJobs.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/component/company/RecommendedJobs.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this);
    }
    if (recommendedJobs.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$component$2f$common$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Pekerjaan yang Direkomendasikan untuk Anda",
                subtitle: "Berdasarkan profil dan aktivitas Anda, kami menemukan peluang ini."
            }, void 0, false, {
                fileName: "[project]/component/company/RecommendedJobs.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: recommendedJobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$component$2f$job$2f$JobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        job: job
                    }, job.id, false, {
                        fileName: "[project]/component/company/RecommendedJobs.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/component/company/RecommendedJobs.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/component/company/RecommendedJobs.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(RecommendedJobs, "Rn5Hd9D5Om79ZyEaUFs+eafZPbk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = RecommendedJobs;
var _c;
__turbopack_refresh__.register(_c, "RecommendedJobs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/component/company/CompanyCategoryFilters.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/component/company/CompanyCategoryFilters.tsx
__turbopack_esm__({
    "CompanyCategoryFilters": (()=>CompanyCategoryFilters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client'; // Komponen ini harus interaktif, jadi kita tandai sebagai Client Component.
;
;
;
// Fungsi untuk mengambil data kategori dari API (dengan data simulasi sebagai fallback)
async function getCategories() {
    try {
        // Ganti dengan URL API Anda yang sebenarnya
        // const response = await fetch('/api/v1/data/company-specializations'); 
        // if (!response.ok) throw new Error('Gagal mengambil kategori');
        // const data = await response.json();
        // return data.data || [];
        // --- Data Simulasi (ganti dengan fetch API di atas) ---
        await new Promise((resolve)=>setTimeout(resolve, 700)); // Simulasi delay jaringan
        return [
            {
                id: 2,
                name: 'Website',
                slug: 'website'
            },
            {
                id: 3,
                name: 'Cyber Security',
                slug: 'cyber-security'
            },
            {
                id: 4,
                name: 'Network',
                slug: 'network'
            },
            {
                id: 5,
                name: 'Data',
                slug: 'data'
            },
            {
                id: 6,
                name: 'Design',
                slug: 'design'
            },
            {
                id: 7,
                name: 'Android',
                slug: 'android'
            }
        ];
    // --- Akhir Data Simulasi ---
    } catch (error) {
        console.error("Error fetching categories:", error);
        return []; // Kembalikan array kosong jika terjadi error
    }
}
function CompanyCategoryFilters() {
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // --- FIX: Gunakan array untuk menyimpan kategori yang dipilih ---
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Sinkronkan state dengan URL saat komponen pertama kali dimuat atau URL berubah
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompanyCategoryFilters.useEffect": ()=>{
            const categoriesFromUrl = searchParams.get('category')?.split(',') || [];
            setSelectedCategories(categoriesFromUrl.filter(Boolean)); // Filter string kosong
        }
    }["CompanyCategoryFilters.useEffect"], [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompanyCategoryFilters.useEffect": ()=>{
            const fetchAndSetCategories = {
                "CompanyCategoryFilters.useEffect.fetchAndSetCategories": async ()=>{
                    setIsLoading(true);
                    const fetchedData = await getCategories();
                    // Tombol "Relevan" tidak lagi diperlukan dalam mode multi-pilih,
                    // karena pengguna bisa mengosongkan pilihan untuk melihat semua.
                    setCategories(fetchedData);
                    setIsLoading(false);
                }
            }["CompanyCategoryFilters.useEffect.fetchAndSetCategories"];
            fetchAndSetCategories();
        }
    }["CompanyCategoryFilters.useEffect"], []);
    // --- FIX: Logika baru untuk menangani multi-pilihan ---
    const handleFilterClick = (slug)=>{
        const params = new URLSearchParams(searchParams);
        // Buat salinan dari state saat ini
        const newSelected = new Set(selectedCategories);
        if (newSelected.has(slug)) {
            newSelected.delete(slug); // Hapus jika sudah ada (toggle off)
        } else {
            newSelected.add(slug); // Tambah jika belum ada (toggle on)
        }
        const newCategoriesArray = Array.from(newSelected);
        if (newCategoriesArray.length > 0) {
            params.set('category', newCategoriesArray.join(','));
        } else {
            params.delete('category'); // Hapus parameter jika tidak ada yang dipilih
        }
        params.set('page', '1');
        startTransition(()=>{
            router.push(`${pathname}?${params.toString()}`);
        });
    };
    // Loading state dengan skeleton UI yang modern
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-full h-12 animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-9 w-full bg-slate-200 dark:bg-slate-700 rounded-full"
            }, void 0, false, {
                fileName: "[project]/component/company/CompanyCategoryFilters.tsx",
                lineNumber: 108,
                columnNumber: 10
            }, this)
        }, void 0, false, {
            fileName: "[project]/component/company/CompanyCategoryFilters.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this);
    }
    return(// Container modern dengan padding dan background
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 md:gap-3 p-1 bg-slate-100 dark:bg-slate-800 rounded-full shadow-inner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handleFilterClick('relevant'),
                disabled: isPending,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out transform", "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-800 focus:ring-blue-500", "disabled:opacity-60 disabled:cursor-not-allowed", selectedCategories.length === 0 ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700/80"),
                children: "Relevan"
            }, void 0, false, {
                fileName: "[project]/component/company/CompanyCategoryFilters.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleFilterClick(category.slug),
                    disabled: isPending,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out transform", "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-800 focus:ring-blue-500", "disabled:opacity-60 disabled:cursor-not-allowed", // --- FIX: Cek apakah slug ada di dalam array ---
                    selectedCategories.includes(category.slug) ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-700/80"),
                    children: category.name
                }, category.id, false, {
                    fileName: "[project]/component/company/CompanyCategoryFilters.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/component/company/CompanyCategoryFilters.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this));
}
_s(CompanyCategoryFilters, "jv+j50ThzRaCDTmZM/o11fFYrKc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = CompanyCategoryFilters;
var _c;
__turbopack_refresh__.register(_c, "CompanyCategoryFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/companies/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_a256d1._.js.map
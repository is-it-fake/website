import { Check } from "lucide-react";

interface ResponsePreviewProps {
  error: string | null;
  result: {
    email: string;
    valid: boolean;
    message: string;
  } | null;
}

export function ResponsePreview({ error, result }: ResponsePreviewProps) {
  return (
    <div className="rounded-lg border border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#0d1117] shadow-sm transition-all duration-200">
      <div className="flex items-center justify-between border-b border-[#d0d7de] dark:border-[#30363d] px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-[#24292f] dark:text-[#c9d1d9]">
            Response Preview
          </h3>
          {result && result.valid && (
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#ddf4e4] dark:bg-[#1b4721] border border-[#a6e9b7] dark:border-[#238636]">
              <Check className="h-3.5 w-3.5 text-[#1a7f37] dark:text-[#3fb950]" />
              <span className="text-xs font-medium text-[#1a7f37] dark:text-[#3fb950]">
                Valid Email
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="divide-y divide-[#d0d7de] dark:divide-[#30363d]">
        <div className="p-3 sm:p-4">
          <div className="font-mono text-xs sm:text-sm bg-[#f6f8fa] dark:bg-[#161b22] rounded-lg border border-[#d0d7de] dark:border-[#30363d] p-3 sm:p-4 text-left overflow-x-auto">
            {error ? (
              <div className="text-[#cf222e] dark:text-[#f85149]">
                <pre className="whitespace-pre-wrap break-all">
                  {JSON.stringify({ error }, null, 2)}
                </pre>
              </div>
            ) : result ? (
              <div>
                <pre className="whitespace-pre-wrap break-all text-[#24292f] dark:text-[#c9d1d9]">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            ) : (
              <div>
                <pre className="whitespace-pre-wrap break-all text-[#57606a] dark:text-[#8b949e]">
                  {JSON.stringify(
                    {
                      email: "user@example.com",
                      valid: "True or False",
                      message: "Hello World",
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
